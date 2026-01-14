import React, { useState } from 'react';
import Button from '../components/Button';
import Search from '../components/Search';
import Input from '../components/Input';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Avatar from '../components/Avatar';

export default function Checkout() {
  const [name, setName] = useState('');
  const [addressSelect, setAddressSelect] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [memberType, setMemberType] = useState<string[]>([]);
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const [registrationPath, setRegistrationPath] = useState('인터넷');

  const handleMemberTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setMemberType([...memberType, type]);
    } else {
      setMemberType(memberType.filter((t) => t !== type));
    }
  };

  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative size-full min-h-screen"
      data-name="캘린더-page-일정등록"
      data-node-id="7532:504"
    >
      {/* Sidebar */}
      <div
        className="bg-[#08a7bf] content-stretch flex flex-col items-start overflow-clip px-0 py-[20px] relative self-stretch shrink-0 w-[320px]"
        data-name="gnb"
        data-node-id="7532:505"
      >
        {/* Logo */}
        <div
          className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-full"
          data-name="wrap_logo"
          data-node-id="7532:506"
        >
          <div
            className="h-[26px] overflow-clip relative shrink-0 w-[120px]"
            data-name="Logo/Signature/horizon"
            data-node-id="7532:507"
          >
            <div
              className="absolute inset-[20.78%_0_11.84%_30.08%]"
              data-name="Group"
              data-node-id="I7532:507;422:74"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/logo-part1.png"
              />
            </div>
            <div
              className="absolute inset-[0_78.16%_0_0]"
              data-name="Group"
              data-node-id="I7532:507;422:84"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/logo-part2.png"
              />
            </div>
          </div>
        </div>

        {/* Profile */}
        <div
          className="content-stretch flex gap-[10px] items-start overflow-clip px-[24px] py-[20px] relative shrink-0 w-full"
          data-name="wrap_profile"
          data-node-id="7532:508"
        >
          <Avatar
            className="relative shrink-0 size-[40px]"
            masterBadge={false}
            statusBadge={false}
          />
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative"
            data-name="wrap_name"
            data-node-id="7532:510"
          >
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-name="name"
              data-node-id="7532:511"
            >
              <p
                className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
                data-node-id="7532:512"
              >
                김다우 사원
              </p>
            </div>
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-name="team"
              data-node-id="7532:513"
            >
              <p
                className="font-normal leading-[1.5] not-italic relative shrink-0 text-white text-[13px]"
                data-node-id="7532:514"
              >
                애플리케이션디자인팀
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div
          className="border-[#1298ac] border-solid border-t content-stretch flex flex-col items-start overflow-clip px-0 py-[20px] relative shrink-0 w-full"
          data-name="wrap_menu"
          data-node-id="7532:515"
        >
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7532:516"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="smart-home"
              data-node-id="7532:517"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-smart-home.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7532:519"
            >
              홈
            </p>
          </div>
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7532:520"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="folder"
              data-node-id="7532:521"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-folder.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7532:523"
            >
              드라이브
            </p>
          </div>
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7532:524"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="layout-grid"
              data-node-id="7532:525"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-layout-grid.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7532:527"
            >
              Works
            </p>
          </div>
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7532:528"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="chart-bar"
              data-node-id="7532:529"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-chart-bar.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7532:531"
            >
              설문
            </p>
          </div>
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7532:532"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="mail"
              data-node-id="7532:533"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-mail.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7532:535"
            >
              메일
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="bg-[#e7e8ec] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-[40px] pt-0 px-0 relative self-stretch"
        data-name="body"
        data-node-id="7532:536"
      >
        {/* Search Bar */}
        <div
          className="border border-[#d3d6e3] border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full"
          data-name="search"
          data-node-id="7532:537"
        >
          <Search
            className="bg-white border border-[#c9d5e1] border-solid content-stretch flex gap-[4px] h-[32px] items-center justify-end overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0 w-[280px]"
            placeholder="검색어를 입력해주세요."
          />
          <div
            className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0"
            data-name="wrap_btn"
            data-node-id="7532:539"
          >
            <Button type="normal" state="normal">
              Admin
            </Button>
            <Button type="primary" state="normal">
              Tutorial
            </Button>
          </div>
        </div>

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
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[184px]">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="텍스트를 입력해주세요."
                    className="w-full"
                  />
                </div>
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
                  className="bg-white border border-[#c9d5e1] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[5px] relative rounded-[6px] shrink-0 w-[184px]"
                  placeholder="셀렉트"
                  value={addressSelect}
                  onChange={setAddressSelect}
                  options={[
                    { value: 'seoul', label: '서울' },
                    { value: 'busan', label: '부산' },
                    { value: 'incheon', label: '인천' },
                  ]}
                />
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[481px]">
                  <Input
                    value={addressInput}
                    onChange={(e) => setAddressInput(e.target.value)}
                    placeholder="텍스트를 입력해주세요."
                    className="w-full"
                  />
                </div>
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
                <div
                  className="content-stretch flex gap-[6px] items-center relative shrink-0"
                  data-name="checkbox"
                  data-node-id="7532:664"
                >
                  <Checkbox
                    checked={memberType.includes('신규회원')}
                    onChange={(checked) => handleMemberTypeChange('신규회원', checked)}
                    labelText="신규회원"
                    className="flex items-center gap-[6px]"
                  />
                </div>
                <div
                  className="content-stretch flex gap-[6px] items-center relative shrink-0"
                  data-name="checkbox"
                  data-node-id="7532:667"
                >
                  <Checkbox
                    checked={memberType.includes('기존회원')}
                    onChange={(checked) => handleMemberTypeChange('기존회원', checked)}
                    labelText="기존회원"
                    className="flex items-center gap-[6px]"
                  />
                </div>
                <div
                  className="content-stretch flex gap-[6px] items-center relative shrink-0"
                  data-name="checkbox"
                  data-node-id="7532:671"
                >
                  <Checkbox
                    checked={memberType.includes('관리자')}
                    onChange={(checked) => handleMemberTypeChange('관리자', checked)}
                    labelText="관리자"
                    className="flex items-center gap-[6px]"
                  />
                </div>
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
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[184px]">
                  <Input
                    value={phone1}
                    onChange={(e) => setPhone1(e.target.value)}
                    placeholder=" "
                    className="w-full"
                  />
                </div>
                <p
                  className="font-normal leading-[1.6] not-italic overflow-hidden relative shrink-0 text-[14px] text-[#2f353c] text-ellipsis"
                  data-node-id="7533:708"
                >
                  -
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[184px]">
                  <Input
                    value={phone2}
                    onChange={(e) => setPhone2(e.target.value)}
                    placeholder=" "
                    className="w-full"
                  />
                </div>
                <p
                  className="font-normal leading-[1.6] not-italic overflow-hidden relative shrink-0 text-[14px] text-[#2f353c] text-ellipsis"
                  data-node-id="7533:710"
                >
                  -
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[184px]">
                  <Input
                    value={phone3}
                    onChange={(e) => setPhone3(e.target.value)}
                    placeholder=" "
                    className="w-full"
                  />
                </div>
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
                  value={registrationPath}
                  onChange={setRegistrationPath}
                  options={[
                    { value: '인터넷', label: '인터넷' },
                    { value: '지인소개', label: '지인소개' },
                    { value: '광고', label: '광고' },
                    { value: '기타', label: '기타' },
                  ]}
                  className="bg-white border border-[#c9d5e1] border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[5px] relative rounded-[6px] shrink-0 w-[240px]"
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
