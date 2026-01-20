import { useState } from "react";
import { Button, Input, Select, Checkbox } from "../components";
import { Layout } from "../components/layout/Layout";

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
    <Layout
      footer={
        <>
          <Button variant="primary">저장</Button>
          <Button variant="normal">취소</Button>
        </>
      }
    >
      {/* Checkout Form */}
      <div className="bg-bg-neutral-base flex flex-col gap-6 items-start p-5 relative rounded-large shrink-0 w-full">
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
    </Layout>
  );
}
