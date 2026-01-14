import React, { useState } from 'react';
import Button from '../components/Button';
import Search from '../components/Search';
import Input from '../components/Input';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Sidebar from '../components/dashboard/Sidebar';
import SearchBar from '../components/dashboard/SearchBar';
import { useSearch } from '../hooks/useSearch';

export default function Checkout() {
  const [name, setName] = useState('');
  const [addressSelect, setAddressSelect] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [memberType, setMemberType] = useState<string[]>([]);
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const [registrationPath, setRegistrationPath] = useState('인터넷');
  const { searchValue, handleSearch, handleSearchChange } = useSearch();

  const handleMemberTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setMemberType([...memberType, type]);
    } else {
      setMemberType(memberType.filter((t) => t !== type));
    }
  };

  const handleMenuClick = (menuId: string) => {
    console.log('Menu clicked:', menuId);
    // 라우팅은 Sidebar 컴포넌트에서 처리됩니다
  };

  const handleAdminClick = () => {
    console.log('Admin button clicked');
  };

  const handleTutorialClick = () => {
    console.log('Tutorial button clicked');
  };

  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative size-full min-h-screen"
      data-name="캘린더-page-일정등록"
      data-node-id="7532:504"
    >
      <Sidebar
        onMenuClick={handleMenuClick}
      />

      {/* Main Content */}
      <div
        className="bg-[#e7e8ec] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-[40px] pt-0 px-0 relative self-stretch"
        data-name="body"
        data-node-id="7532:536"
      >
        <SearchBar
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
          onAdminClick={handleAdminClick}
          onTutorialClick={handleTutorialClick}
        />

        {/* Form Container */}
        <div
          className="content-stretch flex flex-col items-start justify-center pb-0 pt-[20px] px-[24px] relative shrink-0 w-full"
          data-name="container"
          data-node-id="7532:542"
        >
          <div
            className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full"
            data-name="page"
            data-node-id="7532:646"
          >
            <p
              className="font-medium leading-[1.5] not-italic relative shrink-0 text-[24px] text-black"
              data-node-id="7532:543"
            >
              Checkout
            </p>
            <div
              className="border-[#2f353c] border-solid border-t content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full"
              data-name="wrap-container"
              data-node-id="7532:647"
            >
              {/* 이름 */}
              <div
                className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full"
                data-name="container"
                data-node-id="7532:544"
              >
                <div
                  className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]"
                  data-name="tit"
                  data-node-id="7532:645"
                >
                  <p
                    className="font-medium leading-[1.6] not-italic relative shrink-0 text-[14px] text-black"
                    data-node-id="7532:639"
                  >
                    이름
                  </p>
                </div>
                <Input
                  state="normal"
                  errorMsg={false}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="텍스트를 입력해주세요."
                  className="flex-1"
                />
              </div>

              {/* 주소 */}
              <div
                className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full"
                data-name="container"
                data-node-id="7532:648"
              >
                <div
                  className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]"
                  data-name="tit"
                  data-node-id="7532:649"
                >
                  <p
                    className="font-medium leading-[1.6] not-italic relative shrink-0 text-[14px] text-black"
                    data-node-id="7532:650"
                  >
                    주소
                  </p>
                </div>
                <Select
                  state="normal"
                  placeholder="셀렉트"
                  value={addressSelect}
                  onChange={setAddressSelect}
                  options={[
                    { value: 'seoul', label: '서울' },
                    { value: 'busan', label: '부산' },
                    { value: 'incheon', label: '인천' },
                  ]}
                  className="shrink-0 w-[184px]"
                />
                <Input
                  state="normal"
                  errorMsg={false}
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  placeholder="텍스트를 입력해주세요."
                  className="flex-1"
                />
              </div>

              {/* 회원유형 */}
              <div
                className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full"
                data-name="container"
                data-node-id="7532:656"
              >
                <div
                  className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]"
                  data-name="tit"
                  data-node-id="7532:657"
                >
                  <p
                    className="font-medium leading-[1.6] not-italic relative shrink-0 text-[14px] text-black"
                    data-node-id="7532:658"
                  >
                    회원유형
                  </p>
                </div>
                <Checkbox
                  state="normal"
                  disabled={false}
                  checked={memberType.includes('신규회원')}
                  onChange={(checked) => handleMemberTypeChange('신규회원', checked)}
                  labelText="신규회원"
                />
                <Checkbox
                  state="normal"
                  disabled={false}
                  checked={memberType.includes('기존회원')}
                  onChange={(checked) => handleMemberTypeChange('기존회원', checked)}
                  labelText="기존회원"
                />
                <Checkbox
                  state="normal"
                  disabled={false}
                  checked={memberType.includes('관리자')}
                  onChange={(checked) => handleMemberTypeChange('관리자', checked)}
                  labelText="관리자"
                />
              </div>

              {/* 연락처 */}
              <div
                className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full"
                data-name="container"
                data-node-id="7533:690"
              >
                <div
                  className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]"
                  data-name="tit"
                  data-node-id="7533:691"
                >
                  <p
                    className="font-medium leading-[1.6] not-italic relative shrink-0 text-[14px] text-black"
                    data-node-id="7533:692"
                  >
                    연락처
                  </p>
                </div>
                <Input
                  state="normal"
                  errorMsg={false}
                  value={phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                  placeholder=""
                  className="shrink-0 w-[184px]"
                />
                <p
                  className="font-normal leading-[1.6] not-italic overflow-hidden relative shrink-0 text-[14px] text-[#2f353c] text-ellipsis"
                  data-node-id="7533:708"
                >
                  -
                </p>
                <Input
                  state="normal"
                  errorMsg={false}
                  value={phone2}
                  onChange={(e) => setPhone2(e.target.value)}
                  placeholder=""
                  className="shrink-0 w-[184px]"
                />
                <p
                  className="font-normal leading-[1.6] not-italic overflow-hidden relative shrink-0 text-[14px] text-[#2f353c] text-ellipsis"
                  data-node-id="7533:710"
                >
                  -
                </p>
                <Input
                  state="normal"
                  errorMsg={false}
                  value={phone3}
                  onChange={(e) => setPhone3(e.target.value)}
                  placeholder=""
                  className="shrink-0 w-[184px]"
                />
              </div>

              {/* 가입경로 */}
              <div
                className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full"
                data-name="container"
                data-node-id="7533:770"
              >
                <div
                  className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]"
                  data-name="tit"
                  data-node-id="7533:771"
                >
                  <p
                    className="font-medium leading-[1.6] not-italic relative shrink-0 text-[14px] text-black"
                    data-node-id="7533:772"
                  >
                    가입경로
                  </p>
                </div>
                <Select
                  state="normal"
                  value={registrationPath}
                  onChange={setRegistrationPath}
                  options={[
                    { value: '인터넷', label: '인터넷' },
                    { value: '지인소개', label: '지인소개' },
                    { value: '광고', label: '광고' },
                    { value: '기타', label: '기타' },
                  ]}
                  className="shrink-0 w-[240px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="content-stretch flex gap-[8px] items-center justify-center pb-0 pt-[20px] px-[24px] relative shrink-0 w-full"
          data-name="container"
          data-node-id="7533:712"
        >
          <Button type="primary" state="normal">
            저장
          </Button>
          <Button type="normal" state="normal">
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}
