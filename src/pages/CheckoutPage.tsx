import { useState } from "react";
import { Search, Button, Input, Select, Checkbox } from "../components";
import {
  SmartHomeIcon,
  FolderIcon,
  LayoutGridIcon,
  ChartBarIcon,
  MailIcon,
} from "../components/dashboard/icons";

// Image URLs from Figma
const imgTypeSizeM40X40 = "https://www.figma.com/api/mcp/asset/3ba67910-14c7-46ca-9526-2e26ec99a2e9";
const imgEllipse1990 = "https://www.figma.com/api/mcp/asset/7b3813ab-ca17-487f-8768-5dd38bb896c0";
const imgLogo1 = "https://www.figma.com/api/mcp/asset/94100f9d-18fa-480f-b332-d7f8eb0f4494";
const imgLogo2 = "https://www.figma.com/api/mcp/asset/89380574-d9cb-4fb4-b8aa-5ca01b7779c4";

type StatusMiniProps = {
  className?: string;
  status?: "online";
};

function StatusMini({ className, status = "online" }: StatusMiniProps) {
  return (
    <div className={className}>
      <div className="absolute left-0 size-[8px] top-1/2 translate-y-[-50%]">
        <div className="absolute inset-[-6.25%]">
          <img className="block max-w-none size-full" alt="" src={imgEllipse1990} />
        </div>
      </div>
    </div>
  );
}

type BadgeProps = {
  className?: string;
  type?: "Manager";
  color?: "Black";
  size?: "M";
};

function Badge({ className, type = "Manager", color = "Black", size = "M" }: BadgeProps) {
  return (
    <div className={className}>
      <div className="flex flex-[1_0_0] flex-col font-pretendard font-medium justify-center leading-[0] min-h-px min-w-px relative text-text-neutral-white text-xs text-center tracking-[-0.24px] w-[9px]">
        <p className="leading-[12px] whitespace-pre-wrap">M</p>
      </div>
    </div>
  );
}

type AvatarProps = {
  className?: string;
  masterBadge?: boolean;
  statusBadge?: boolean;
  type?: "김다우 사원";
  size?: "M(40x40)";
};

function Avatar({
  className,
  masterBadge = true,
  statusBadge = true,
  type = "김다우 사원",
  size = "M(40x40)",
}: AvatarProps) {
  return (
    <div className={className}>
      <img className="block max-w-none size-full" alt="" height="40" src={imgTypeSizeM40X40} width="40" />
      {masterBadge && (
        <Badge className="absolute bg-light-gray-900 content-stretch flex flex-col inset-[52.5%_-2.5%_-2.5%_52.5%] items-center justify-center rounded-radius-full" />
      )}
      {statusBadge && <StatusMini className="absolute bottom-0 left-0 size-[8px]" />}
    </div>
  );
}

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [addressSelect, setAddressSelect] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [memberType, setMemberType] = useState<string[]>([]);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [joinPath, setJoinPath] = useState("인터넷");

  const handleMemberTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setMemberType([...memberType, type]);
    } else {
      setMemberType(memberType.filter((t) => t !== type));
    }
  };

  return (
    <div className="bg-bg-neutral-base flex items-start justify-start relative w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="bg-bg-primary-level1 flex flex-col items-start overflow-clip py-5 relative shrink-0 w-[320px] h-full">
        {/* Logo */}
        <div className="flex flex-col items-start px-6 py-3 relative shrink-0 w-full">
          <div className="h-[26px] overflow-clip relative shrink-0 w-[120px]">
            <div className="absolute inset-[20.78%_0_11.84%_30.08%]">
              <img alt="" className="block max-w-none size-full" src={imgLogo1} />
            </div>
            <div className="absolute inset-[0_78.16%_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLogo2} />
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="flex gap-[10px] items-start overflow-clip px-6 py-5 relative shrink-0 w-full">
          <Avatar className="relative shrink-0 size-10" masterBadge={false} statusBadge={false} />
          <div className="flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative">
            <div className="flex items-center relative shrink-0 w-full">
              <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-white">
                김다우 사원
              </p>
            </div>
            <div className="flex items-center relative shrink-0 w-full">
              <p className="font-pretendard text-typo-body-small-regular leading-[1.5] not-italic relative shrink-0 text-text-neutral-white">
                애플리케이션디자인팀
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="border-border-primary-level1 border-solid border-t flex flex-col items-start overflow-clip py-5 relative flex-1 w-full">
          <div className="flex gap-[10px] items-center overflow-clip px-6 py-2 relative shrink-0 w-full cursor-pointer hover:bg-bg-primary-level1-hover transition-colors">
            <div className="relative shrink-0 size-6 text-icon-neutral-white">
              <SmartHomeIcon />
            </div>
            <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-white">
              홈
            </p>
          </div>
          <div className="flex gap-[10px] items-center overflow-clip px-6 py-2 relative shrink-0 w-full cursor-pointer hover:bg-bg-primary-level1-hover transition-colors">
            <div className="relative shrink-0 size-6 text-icon-neutral-white">
              <FolderIcon />
            </div>
            <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-white">
              드라이브
            </p>
          </div>
          <div className="flex gap-[10px] items-center overflow-clip px-6 py-2 relative shrink-0 w-full cursor-pointer hover:bg-bg-primary-level1-hover transition-colors">
            <div className="relative shrink-0 size-6 text-icon-neutral-white">
              <LayoutGridIcon />
            </div>
            <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-white">
              Works
            </p>
          </div>
          <div className="flex gap-[10px] items-center overflow-clip px-6 py-2 relative shrink-0 w-full cursor-pointer hover:bg-bg-primary-level1-hover transition-colors">
            <div className="relative shrink-0 size-6 text-icon-neutral-white">
              <ChartBarIcon />
            </div>
            <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-white">
              설문
            </p>
          </div>
          <div className="flex gap-[10px] items-center overflow-clip px-6 py-2 relative shrink-0 w-full cursor-pointer hover:bg-bg-primary-level1-hover transition-colors">
            <div className="relative shrink-0 size-6 text-icon-neutral-white">
              <MailIcon />
            </div>
            <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-white">
              메일
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-bg-neutral-level1 flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-y-auto pb-10 relative self-stretch">
        {/* Header with Search */}
        <div className="border border-border-neutral-level1 border-solid flex items-center justify-between px-6 py-4 relative shrink-0 w-full">
          <Search placeholder="검색어를 입력해주세요." />
          <div className="flex gap-[10px] items-start overflow-clip relative shrink-0">
            <Button variant="normal">Admin</Button>
            <Button variant="primary">Tutorial</Button>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="flex flex-col items-start justify-center pt-5 px-6 relative shrink-0 w-full">
          <div className="bg-bg-neutral-base flex flex-col gap-6 items-start p-5 relative rounded-radius-large shrink-0 w-full">
            <p className="font-pretendard text-typo-heading-xlarge leading-[1.5] not-italic relative shrink-0 text-text-neutral-base">
              Checkout
            </p>
            <div className="border-border-neutral-active border-solid border-t flex flex-col gap-4 items-start pt-6 relative shrink-0 w-full">
              {/* 이름 */}
              <div className="flex gap-2 h-8 items-center relative shrink-0 w-full">
                <div className="flex h-8 items-center relative shrink-0 w-[120px]">
                  <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-base">
                    이름
                  </p>
                </div>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="텍스트를 입력해주세요."
                  className="flex-1"
                />
              </div>

              {/* 주소 */}
              <div className="flex gap-2 h-8 items-center relative shrink-0 w-full">
                <div className="flex h-8 items-center relative shrink-0 w-[120px]">
                  <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-base">
                    주소
                  </p>
                </div>
                <Select
                  value={addressSelect}
                  onChange={(e) => setAddressSelect(e.target.value)}
                  options={[
                    { value: "", label: "셀렉트" },
                    { value: "서울", label: "서울" },
                    { value: "부산", label: "부산" },
                    { value: "인천", label: "인천" },
                  ]}
                  className="w-[120px]"
                />
                <Input
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  placeholder="텍스트를 입력해주세요."
                  className="flex-1"
                />
              </div>

              {/* 회원유형 */}
              <div className="flex gap-2 h-8 items-center relative shrink-0 w-full">
                <div className="flex h-8 items-center relative shrink-0 w-[120px]">
                  <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-base">
                    회원유형
                  </p>
                </div>
                <Checkbox
                  label="신규회원"
                  checked={memberType.includes("신규회원")}
                  onChange={(checked) => handleMemberTypeChange("신규회원", checked)}
                />
                <Checkbox
                  label="기존회원"
                  checked={memberType.includes("기존회원")}
                  onChange={(checked) => handleMemberTypeChange("기존회원", checked)}
                />
                <Checkbox
                  label="관리자"
                  checked={memberType.includes("관리자")}
                  onChange={(checked) => handleMemberTypeChange("관리자", checked)}
                />
              </div>

              {/* 연락처 */}
              <div className="flex gap-2 h-8 items-center relative shrink-0 w-full">
                <div className="flex h-8 items-center relative shrink-0 w-[120px]">
                  <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-base">
                    연락처
                  </p>
                </div>
                <Input
                  value={phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                  placeholder="텍스트를 입력해주세요."
                  className="w-[120px]"
                />
                <p className="font-pretendard text-typo-body-medium-regular leading-[1.6] not-italic overflow-hidden relative shrink-0 text-text-neutral-base text-ellipsis">
                  -
                </p>
                <Input
                  value={phone2}
                  onChange={(e) => setPhone2(e.target.value)}
                  placeholder="텍스트를 입력해주세요."
                  className="w-[120px]"
                />
                <p className="font-pretendard text-typo-body-medium-regular leading-[1.6] not-italic overflow-hidden relative shrink-0 text-text-neutral-base text-ellipsis">
                  -
                </p>
                <Input
                  value={phone3}
                  onChange={(e) => setPhone3(e.target.value)}
                  placeholder="텍스트를 입력해주세요."
                  className="w-[120px]"
                />
              </div>

              {/* 가입경로 */}
              <div className="flex gap-2 h-8 items-center relative shrink-0 w-full">
                <div className="flex h-8 items-center relative shrink-0 w-[120px]">
                  <p className="font-pretendard text-typo-body-medium-bold leading-[1.6] not-italic relative shrink-0 text-text-neutral-base">
                    가입경로
                  </p>
                </div>
                <Select
                  value={joinPath}
                  onChange={(e) => setJoinPath(e.target.value)}
                  options={[
                    { value: "인터넷", label: "인터넷" },
                    { value: "지인소개", label: "지인소개" },
                    { value: "광고", label: "광고" },
                    { value: "기타", label: "기타" },
                  ]}
                  className="w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 items-center justify-center pt-5 px-6 relative shrink-0 w-full">
          <Button variant="primary">저장</Button>
          <Button variant="normal">취소</Button>
        </div>
      </div>
    </div>
  );
}
