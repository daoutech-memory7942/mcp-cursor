import React from 'react';
import Button from '../components/Button';
import Search from '../components/Search';
import Avatar from '../components/Avatar';

export default function Dashboard() {
  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative size-full min-h-screen"
      data-name="캘린더-page-대시보드"
      data-node-id="7530:394"
    >
      {/* Sidebar */}
      <div
        className="bg-[#08a7bf] content-stretch flex flex-col items-start overflow-clip px-0 py-[20px] relative self-stretch shrink-0 w-[320px]"
        data-name="gnb"
        data-node-id="7531:402"
      >
        {/* Logo */}
        <div
          className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-full"
          data-name="wrap_logo"
          data-node-id="7531:453"
        >
          <div
            className="h-[26px] overflow-clip relative shrink-0 w-[120px]"
            data-name="Logo/Signature/horizon"
            data-node-id="7531:436"
          >
            <div
              className="absolute inset-[20.78%_0_11.84%_30.08%]"
              data-name="Group"
              data-node-id="I7531:436;422:74"
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
              data-node-id="I7531:436;422:84"
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
          data-node-id="7531:454"
        >
          <Avatar
            className="relative shrink-0 size-[40px]"
            masterBadge={false}
            statusBadge={false}
          />
          <div
            className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative"
            data-name="wrap_name"
            data-node-id="7531:1915"
          >
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-name="name"
              data-node-id="7531:1945"
            >
              <p
                className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
                data-node-id="7531:1946"
              >
                김다우 사원
              </p>
            </div>
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-name="team"
              data-node-id="7531:1944"
            >
              <p
                className="font-normal leading-[1.5] not-italic relative shrink-0 text-white text-[13px]"
                data-node-id="7531:1916"
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
          data-node-id="7531:2005"
        >
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7531:2018"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="smart-home"
              data-node-id="7531:2028"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-smart-home.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7531:2019"
            >
              홈
            </p>
          </div>
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7531:2031"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="folder"
              data-node-id="7531:2079"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-folder.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7531:2034"
            >
              드라이브
            </p>
          </div>
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7531:2036"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="layout-grid"
              data-node-id="7531:2082"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-layout-grid.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7531:2039"
            >
              Works
            </p>
          </div>
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7531:2041"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="chart-bar"
              data-node-id="7531:2085"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-chart-bar.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7531:2044"
            >
              설문
            </p>
          </div>
          <div
            className="content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full"
            data-name="menu"
            data-node-id="7531:2046"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="mail"
              data-node-id="7531:2088"
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-mail.svg"
              />
            </div>
            <p
              className="font-medium leading-[1.6] not-italic relative shrink-0 text-white text-[14px]"
              data-node-id="7531:2049"
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
        data-node-id="7530:396"
      >
        {/* Search Bar */}
        <div
          className="border border-[#d3d6e3] border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full"
          data-name="search"
          data-node-id="7531:2091"
        >
          <Search
            className="bg-white border border-[#c9d5e1] border-solid content-stretch flex gap-[4px] h-[32px] items-center justify-end overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0 w-[280px]"
            placeholder="검색어를 입력해주세요."
          />
          <div
            className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0"
            data-name="wrap_btn"
            data-node-id="7531:2107"
          >
            <Button type="normal" state="normal">
              Admin
            </Button>
            <Button type="primary" state="normal">
              Tutorial
            </Button>
          </div>
        </div>

        {/* First Overview Section */}
        <div
          className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-0 pt-[20px] px-[24px] relative shrink-0 w-full"
          data-name="container"
          data-node-id="7530:398"
        >
          <p
            className="font-bold leading-[1.5] not-italic relative shrink-0 text-[18px] text-black"
            data-node-id="7530:397"
          >
            Overview
          </p>
          <div
            className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
            data-name="container"
            data-node-id="7531:2121"
          >
            {/* Total Documents Card */}
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[12px]"
              data-name="box"
              data-node-id="7531:2124"
            >
              <div
                className="content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[24px] relative shrink-0 w-full"
                data-name="bottom_btn"
                data-node-id="7531:2133"
              >
                <div
                  className="bg-[#e7edf4] rounded-[6px] shrink-0 size-[48px]"
                  data-name="image"
                  data-node-id="7531:2138"
                />
                <div
                  className="content-stretch flex flex-col items-center justify-center leading-[1.5] not-italic relative shrink-0 text-black whitespace-pre-wrap"
                  data-name="txt"
                  data-node-id="7531:2139"
                >
                  <p
                    className="font-bold relative shrink-0 text-[18px] w-[192px]"
                    data-node-id="7531:2134"
                  >
                    10
                  </p>
                  <p
                    className="font-normal relative shrink-0 text-[13px] w-[192px]"
                    data-node-id="7531:2140"
                  >
                    Total Documents
                  </p>
                </div>
              </div>
              <div
                className="border-[#e4e6ec] border-solid border-t content-stretch flex items-center justify-between overflow-clip pl-[20px] pr-[12px] py-[10px] relative shrink-0 w-full"
                data-name="bottom_btn"
                data-node-id="7531:2125"
              >
                <p
                  className="font-normal leading-[1.5] not-italic relative shrink-0 text-[13px] text-black"
                  data-node-id="7531:2131"
                >
                  See detail
                </p>
                <div
                  className="overflow-clip relative shrink-0 size-[16px]"
                  data-name="chevron-right"
                  data-node-id="7531:2126"
                >
                  <div
                    className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"
                    data-name="Vector"
                    data-node-id="I7531:2126;514:37037"
                  >
                    <div
                      className="absolute inset-[-9.38%_-18.75%]"
                      style={{ '--stroke-0': 'rgba(53, 64, 82, 1)' } as React.CSSProperties}
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src="/images/icon-chevron-right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Mail Card */}
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[12px]"
              data-name="box"
              data-node-id="7531:2142"
            >
              <div
                className="content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[24px] relative shrink-0 w-full"
                data-name="bottom_btn"
                data-node-id="7531:2143"
              >
                <div
                  className="bg-[#e7edf4] rounded-[6px] shrink-0 size-[48px]"
                  data-name="image"
                  data-node-id="7531:2144"
                />
                <div
                  className="content-stretch flex flex-col items-center justify-center leading-[1.5] not-italic relative shrink-0 text-black whitespace-pre-wrap"
                  data-name="txt"
                  data-node-id="7531:2145"
                >
                  <p
                    className="font-bold relative shrink-0 text-[18px] w-[192px]"
                    data-node-id="7531:2146"
                  >
                    412
                  </p>
                  <p
                    className="font-normal relative shrink-0 text-[13px] w-[192px]"
                    data-node-id="7531:2147"
                  >
                    Total Mail
                  </p>
                </div>
              </div>
              <div
                className="border-[#e4e6ec] border-solid border-t content-stretch flex items-center justify-between overflow-clip pl-[20px] pr-[12px] py-[10px] relative shrink-0 w-full"
                data-name="bottom_btn"
                data-node-id="7531:2148"
              >
                <p
                  className="font-normal leading-[1.5] not-italic relative shrink-0 text-[13px] text-black"
                  data-node-id="7531:2149"
                >
                  See detail
                </p>
                <div
                  className="overflow-clip relative shrink-0 size-[16px]"
                  data-name="chevron-right"
                  data-node-id="7531:2150"
                >
                  <div
                    className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"
                    data-name="Vector"
                    data-node-id="I7531:2150;514:37037"
                  >
                    <div
                      className="absolute inset-[-9.38%_-18.75%]"
                      style={{ '--stroke-0': 'rgba(53, 64, 82, 1)' } as React.CSSProperties}
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src="/images/icon-chevron-right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Apps Card */}
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[12px]"
              data-name="box"
              data-node-id="7531:2153"
            >
              <div
                className="content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[24px] relative shrink-0 w-full"
                data-name="bottom_btn"
                data-node-id="7531:2154"
              >
                <div
                  className="bg-[#e7edf4] rounded-[6px] shrink-0 size-[48px]"
                  data-name="image"
                  data-node-id="7531:2155"
                />
                <div
                  className="content-stretch flex flex-col items-center justify-center leading-[1.5] not-italic relative shrink-0 text-black whitespace-pre-wrap"
                  data-name="txt"
                  data-node-id="7531:2156"
                >
                  <p
                    className="font-bold relative shrink-0 text-[18px] w-[192px]"
                    data-node-id="7531:2157"
                  >
                    54
                  </p>
                  <p
                    className="font-normal relative shrink-0 text-[13px] w-[192px]"
                    data-node-id="7531:2158"
                  >
                    Total Apps
                  </p>
                </div>
              </div>
              <div
                className="border-[#e4e6ec] border-solid border-t content-stretch flex items-center justify-between overflow-clip pl-[20px] pr-[12px] py-[10px] relative shrink-0 w-full"
                data-name="bottom_btn"
                data-node-id="7531:2159"
              >
                <p
                  className="font-normal leading-[1.5] not-italic relative shrink-0 text-[13px] text-black"
                  data-node-id="7531:2160"
                >
                  See detail
                </p>
                <div
                  className="overflow-clip relative shrink-0 size-[16px]"
                  data-name="chevron-right"
                  data-node-id="7531:2161"
                >
                  <div
                    className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"
                    data-name="Vector"
                    data-node-id="I7531:2161;514:37037"
                  >
                    <div
                      className="absolute inset-[-9.38%_-18.75%]"
                      style={{ '--stroke-0': 'rgba(53, 64, 82, 1)' } as React.CSSProperties}
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src="/images/icon-chevron-right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Board Card */}
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[12px]"
              data-name="box"
              data-node-id="7531:2164"
            >
              <div
                className="content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[24px] relative shrink-0 w-full"
                data-name="bottom_btn"
                data-node-id="7531:2165"
              >
                <div
                  className="bg-[#e7edf4] rounded-[6px] shrink-0 size-[48px]"
                  data-name="image"
                  data-node-id="7531:2166"
                />
                <div
                  className="content-stretch flex flex-col items-center justify-center leading-[1.5] not-italic relative shrink-0 text-black whitespace-pre-wrap"
                  data-name="txt"
                  data-node-id="7531:2167"
                >
                  <p
                    className="font-bold relative shrink-0 text-[18px] w-[192px]"
                    data-node-id="7531:2168"
                  >
                    7
                  </p>
                  <p
                    className="font-normal relative shrink-0 text-[13px] w-[192px]"
                    data-node-id="7531:2169"
                  >
                    Total Board
                  </p>
                </div>
              </div>
              <div
                className="border-[#e4e6ec] border-solid border-t content-stretch flex items-center justify-between overflow-clip pl-[20px] pr-[12px] py-[10px] relative shrink-0 w-full"
                data-name="bottom_btn"
                data-node-id="7531:2170"
              >
                <p
                  className="font-normal leading-[1.5] not-italic relative shrink-0 text-[13px] text-black"
                  data-node-id="7531:2171"
                >
                  See detail
                </p>
                <div
                  className="overflow-clip relative shrink-0 size-[16px]"
                  data-name="chevron-right"
                  data-node-id="7531:2172"
                >
                  <div
                    className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"
                    data-name="Vector"
                    data-node-id="I7531:2172;514:37037"
                  >
                    <div
                      className="absolute inset-[-9.38%_-18.75%]"
                      style={{ '--stroke-0': 'rgba(53, 64, 82, 1)' } as React.CSSProperties}
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src="/images/icon-chevron-right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Overview Section */}
        <div
          className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-0 pt-[20px] px-[24px] relative shrink-0 w-full"
          data-name="container"
          data-node-id="7531:2175"
        >
          <p
            className="font-bold leading-[1.5] not-italic relative shrink-0 text-[18px] text-black"
            data-node-id="7531:2176"
          >
            Overview
          </p>
          <div
            className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full"
            data-name="image_list"
            data-node-id="7531:2255"
          >
            {/* Card 1 */}
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[280px] items-start min-h-px min-w-px overflow-clip relative rounded-[12px]"
              data-name="box"
              data-node-id="7531:2238"
            >
              <div
                className="bg-[#f2f5f7] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-full"
                data-name="images"
                data-node-id="7531:2239"
              >
                <div
                  className="relative shrink-0 size-[52px]"
                  data-name="photo"
                  data-node-id="7531:2240"
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src="/images/icon-photo.svg"
                  />
                </div>
              </div>
              <div
                className="border-[#e4e6ec] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.5] min-h-px min-w-px not-italic overflow-clip pl-[20px] pr-[12px] py-[10px] relative text-black w-full"
                data-name="bottom_btn"
                data-node-id="7531:2242"
              >
                <p
                  className="font-bold relative shrink-0 text-[18px]"
                  data-node-id="7531:2243"
                >
                  Next Week
                </p>
                <p
                  className="flex-[1_0_0] font-normal min-h-px min-w-px overflow-hidden relative text-[13px] text-ellipsis w-full whitespace-pre-wrap"
                  data-node-id="7531:2244"
                >
                  President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[280px] items-start min-h-px min-w-px overflow-clip relative rounded-[12px]"
              data-name="box"
              data-node-id="7532:426"
            >
              <div
                className="bg-[#f2f5f7] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-full"
                data-name="images"
                data-node-id="7532:427"
              >
                <div
                  className="relative shrink-0 size-[52px]"
                  data-name="photo"
                  data-node-id="7532:428"
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src="/images/icon-photo.svg"
                  />
                </div>
              </div>
              <div
                className="border-[#e4e6ec] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.5] min-h-px min-w-px not-italic overflow-clip pl-[20px] pr-[12px] py-[10px] relative text-black w-full"
                data-name="bottom_btn"
                data-node-id="7532:430"
              >
                <p
                  className="font-bold relative shrink-0 text-[18px]"
                  data-node-id="7532:431"
                >
                  Next Week
                </p>
                <p
                  className="flex-[1_0_0] font-normal min-h-px min-w-px overflow-hidden relative text-[13px] text-ellipsis w-full whitespace-pre-wrap"
                  data-node-id="7532:432"
                >
                  President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[280px] items-start min-h-px min-w-px overflow-clip relative rounded-[12px]"
              data-name="box"
              data-node-id="7531:2229"
            >
              <div
                className="bg-[#f2f5f7] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-full"
                data-name="images"
                data-node-id="7532:414"
              >
                <div
                  className="relative shrink-0 size-[52px]"
                  data-name="photo"
                  data-node-id="7532:415"
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src="/images/icon-photo.svg"
                  />
                </div>
              </div>
              <div
                className="border-[#e4e6ec] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.5] min-h-px min-w-px not-italic overflow-clip pl-[20px] pr-[12px] py-[10px] relative text-black w-full"
                data-name="bottom_btn"
                data-node-id="7531:2233"
              >
                <p
                  className="font-bold relative shrink-0 text-[18px]"
                  data-node-id="7531:2234"
                >
                  A look back at 2025
                </p>
                <p
                  className="flex-[1_0_0] font-normal min-h-px min-w-px overflow-hidden relative text-[13px] text-ellipsis w-full whitespace-pre-wrap"
                  data-node-id="7531:2235"
                >
                  President Lee Jae Myung came into office in June, filling the void left by former President Yoon Suk Yeol. The transition reshaped the political landscape. The conservative People Power Party saw its
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[280px] items-start min-h-px min-w-px overflow-clip relative rounded-[12px]"
              data-name="box"
              data-node-id="7531:2178"
            >
              <div
                className="bg-[#f2f5f7] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-full"
                data-name="images"
                data-node-id="7532:418"
              >
                <div
                  className="relative shrink-0 size-[52px]"
                  data-name="photo"
                  data-node-id="7532:419"
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src="/images/icon-photo.svg"
                  />
                </div>
              </div>
              <div
                className="border-[#e4e6ec] border-solid border-t content-stretch flex flex-col gap-[10px] h-[97px] items-start leading-[1.5] not-italic overflow-clip pl-[20px] pr-[12px] py-[10px] relative shrink-0 text-black w-full"
                data-name="bottom_btn"
                data-node-id="7531:2184"
              >
                <p
                  className="font-bold relative shrink-0 text-[18px]"
                  data-node-id="7531:2219"
                >
                  NIS refutes Coupang
                </p>
                <p
                  className="flex-[1_0_0] font-normal min-h-px min-w-px overflow-hidden relative text-[13px] text-ellipsis w-full whitespace-pre-wrap"
                  data-node-id="7531:2185"
                >
                  South Korea's National Intelligence Service on Tuesday denied Coupang interim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
