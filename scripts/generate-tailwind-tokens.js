import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// RGB 값을 hex로 변환
function rgbToHex(r, g, b, a = 1) {
  const toHex = (n) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  if (a === 1) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  } else {
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
  }
}

// 변수 ID로 변수 찾기
function findVariableById(variables, id) {
  for (const collection of variables) {
    const variable = collection.variables.find(v => v.id === id);
    if (variable) return variable;
  }
  return null;
}

// VARIABLE_ALIAS를 재귀적으로 해결
function resolveColorValue(collections, value, originalModeId) {
  if (value.type === 'VARIABLE_ALIAS') {
    const referencedVar = findVariableById(collections, value.id);
    if (referencedVar) {
      // 참조된 변수가 속한 컬렉션 찾기
      const parentCollection = collections.find(c => 
        c.variables.some(v => v.id === referencedVar.id)
      );
      
      // 참조된 변수의 컬렉션의 기본 모드 사용, 없으면 원래 모드 사용
      const modeId = parentCollection?.defaultModeId || 
                     Object.keys(referencedVar.valuesByMode)[0] || 
                     originalModeId;
      
      const refValue = referencedVar.valuesByMode[modeId];
      if (refValue) {
        return resolveColorValue(collections, refValue, modeId);
      }
    }
    return null;
  }
  
  if (value.r !== undefined && value.g !== undefined && value.b !== undefined) {
    return rgbToHex(value.r, value.g, value.b, value.a);
  }
  
  return null;
}

// 디자인 토큰 파일 읽기
const tokenFile = path.join(__dirname, '..', 'figma-design-token.json');
const tokens = JSON.parse(fs.readFileSync(tokenFile, 'utf8'));

const colors = {};

// 모든 컬렉션의 변수들을 처리
tokens.collections.forEach(collection => {
  const defaultModeId = collection.defaultModeId;
  
  collection.variables.forEach(variable => {
    if (variable.resolvedType === 'COLOR') {
      // 기본 모드의 값 가져오기
      const modeId = defaultModeId || Object.keys(variable.valuesByMode)[0];
      const value = variable.valuesByMode[modeId];
      
      if (value) {
        const colorValue = resolveColorValue(tokens.collections, value, modeId);
        
        if (colorValue) {
          // 이름을 Tailwind CSS 형식으로 변환 (슬래시를 하이픈으로)
          const name = variable.name.replace(/\//g, '-');
          colors[name] = colorValue;
        } else {
          // 해결되지 않은 경우 로그 출력 (디버깅용)
          console.warn(`⚠️  색상을 해결할 수 없습니다: ${variable.name}`);
        }
      }
    }
  });
});

// tailwind.config.js 업데이트
const configFile = path.join(__dirname, '..', 'tailwind.config.js');
let configContent = fs.readFileSync(configFile, 'utf8');

// colors 객체를 문자열로 변환 (들여쓰기 포함)
const colorsEntries = Object.entries(colors)
  .map(([key, value]) => `        "${key}": "${value}"`)
  .join(',\n');
const colorsString = `{\n${colorsEntries}\n      }`;

// 기존 colors 섹션 제거하고 새로 추가
if (configContent.includes('extend: {}')) {
  configContent = configContent.replace(
    'extend: {}',
    `extend: {
      colors: ${colorsString}
    }`
  );
} else if (configContent.includes('extend: {')) {
  // 기존 colors 섹션 제거
  configContent = configContent.replace(/colors:\s*\{[^}]*\}/s, '');
  
  // extend 블록 찾기
  const extendMatch = configContent.match(/extend:\s*\{([^}]*)\}/s);
  if (extendMatch) {
    let existingContent = extendMatch[1].trim();
    // 빈 줄이나 쉼표 정리
    existingContent = existingContent.replace(/,\s*$/, '').trim();
    
    const newExtend = `extend: {
      ${existingContent ? existingContent + ',' : ''}
      colors: ${colorsString}
    }`;
    configContent = configContent.replace(/extend:\s*\{[^}]*\}/s, newExtend);
  }
}

fs.writeFileSync(configFile, configContent, 'utf8');

console.log('✅ Tailwind CSS 설정이 업데이트되었습니다!');
console.log(`📊 총 ${Object.keys(colors).length}개의 색상 토큰이 추가되었습니다.`);
