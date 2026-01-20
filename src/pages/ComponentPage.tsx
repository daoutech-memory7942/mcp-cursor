import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Toggle, Input, Select, Checkbox, Radio, Search, Toast, useToast } from "../components";

export default function ComponentPage() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(true);
  const [radioValue, setRadioValue] = useState("option1");
  const [radioDisabledValue, setRadioDisabledValue] = useState("option1");
  const [searchValue, setSearchValue] = useState("");
  const { showToast } = useToast();

  return (
    <div className="max-w-4xl w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-pretendard text-typo-heading-xlarge text-text-neutral-base">
          Components
        </h1>
        <Link
          to="/"
          className="px-4 py-2 text-text-neutral-base hover:bg-bg-neutral-level1 rounded-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>

      {/* Button Component Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base mb-6">
          Button Component
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              Variants
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="normal">Normal Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>

          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              States
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Normal State</Button>
              <Button variant="primary" disabled>
                Disabled State
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              With Click Handler
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                onClick={() => alert("Primary button clicked!")}
              >
                Click Me
              </Button>
              <Button
                variant="secondary"
                onClick={() => alert("Secondary button clicked!")}
              >
                Click Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Component Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base mb-6">
          Toggle Component
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              States
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Toggle
                  label="토글버튼"
                  checked={toggle1}
                  onChange={setToggle1}
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Off (Normal)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Toggle
                  label="토글버튼"
                  checked={toggle2}
                  onChange={setToggle2}
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  On (Normal)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Toggle
                  label="토글버튼"
                  checked={toggle3}
                  onChange={setToggle3}
                  disabled
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Off (Disabled)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Toggle
                  label="토글버튼"
                  checked={toggle4}
                  onChange={setToggle4}
                  disabled
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  On (Disabled)
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              Without Label
            </h3>
            <div className="flex flex-wrap gap-4">
              <Toggle checked={toggle1} onChange={setToggle1} />
              <Toggle checked={toggle2} onChange={setToggle2} />
              <Toggle checked={toggle3} onChange={setToggle3} disabled />
              <Toggle checked={toggle4} onChange={setToggle4} disabled />
            </div>
          </div>
        </div>
      </section>

      {/* Input Component Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base mb-6">
          Input Component
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              States
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Normal State
                </label>
                <Input placeholder="텍스트를 입력해주세요." />
              </div>
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Controlled Input (Hover on focus)
                </label>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="텍스트를 입력해주세요."
                />
              </div>
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Error State
                </label>
                <Input
                  state="error"
                  errorMessage="상황에 맞는 메시지를 넣어주세요."
                  placeholder="텍스트를 입력해주세요."
                />
              </div>
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Disabled State
                </label>
                <Input
                  disabled
                  placeholder="텍스트를 입력해주세요."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Select Component Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base mb-6">
          Select Component
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              States
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Normal State
                </label>
                <Select>
                  <option value="">셀렉트</option>
                  <option value="option1">옵션 1</option>
                  <option value="option2">옵션 2</option>
                  <option value="option3">옵션 3</option>
                </Select>
              </div>
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  With Options Prop
                </label>
                <Select
                  options={[
                    { value: "", label: "셀렉트" },
                    { value: "option1", label: "옵션 1" },
                    { value: "option2", label: "옵션 2" },
                    { value: "option3", label: "옵션 3" },
                  ]}
                />
              </div>
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Disabled State
                </label>
                <Select disabled>
                  <option value="">셀렉트</option>
                  <option value="option1">옵션 1</option>
                  <option value="option2">옵션 2</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkbox Component Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base mb-6">
          Checkbox Component
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              States
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Checkbox
                  label="체크박스"
                  checked={checkbox1}
                  onChange={setCheckbox1}
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Unchecked (Normal)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Checkbox
                  label="체크박스"
                  checked={checkbox2}
                  onChange={setCheckbox2}
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Checked (Normal)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Checkbox
                  label="체크박스"
                  checked={checkbox3}
                  onChange={setCheckbox3}
                  disabled
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Unchecked (Disabled)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Checkbox
                  label="체크박스"
                  checked={checkbox4}
                  onChange={setCheckbox4}
                  disabled
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Checked (Disabled)
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              Without Label
            </h3>
            <div className="flex flex-wrap gap-4">
              <Checkbox checked={checkbox1} onChange={setCheckbox1} />
              <Checkbox checked={checkbox2} onChange={setCheckbox2} />
              <Checkbox checked={checkbox3} onChange={setCheckbox3} disabled />
              <Checkbox checked={checkbox4} onChange={setCheckbox4} disabled />
            </div>
          </div>
        </div>
      </section>

      {/* Radio Component Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base mb-6">
          Radio Component
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              States
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Radio
                  label="라디오버튼"
                  name="radio-group"
                  value="option1"
                  checked={radioValue === "option1"}
                  onChange={(checked) => checked && setRadioValue("option1")}
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Unchecked (Normal)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Radio
                  label="라디오버튼"
                  name="radio-group"
                  value="option2"
                  checked={radioValue === "option2"}
                  onChange={(checked) => checked && setRadioValue("option2")}
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Checked (Normal)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Radio
                  label="라디오버튼"
                  name="radio-disabled"
                  value="option1"
                  checked={radioDisabledValue === "option1"}
                  onChange={(checked) => checked && setRadioDisabledValue("option1")}
                  disabled
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Unchecked (Disabled)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Radio
                  label="라디오버튼"
                  name="radio-disabled"
                  value="option2"
                  checked={radioDisabledValue === "option2"}
                  onChange={(checked) => checked && setRadioDisabledValue("option2")}
                  disabled
                />
                <span className="text-typo-body-small-regular text-text-neutral-description">
                  Checked (Disabled)
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              Radio Group
            </h3>
            <div className="flex flex-col gap-3">
              <Radio
                label="옵션 1"
                name="radio-example"
                value="option1"
                checked={radioValue === "option1"}
                onChange={(checked) => checked && setRadioValue("option1")}
              />
              <Radio
                label="옵션 2"
                name="radio-example"
                value="option2"
                checked={radioValue === "option2"}
                onChange={(checked) => checked && setRadioValue("option2")}
              />
              <Radio
                label="옵션 3"
                name="radio-example"
                value="option3"
                checked={radioValue === "option3"}
                onChange={(checked) => checked && setRadioValue("option3")}
              />
            </div>
          </div>

          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              Without Label
            </h3>
            <div className="flex flex-wrap gap-4">
              <Radio
                name="radio-no-label"
                value="option1"
                checked={radioValue === "option1"}
                onChange={(checked) => checked && setRadioValue("option1")}
              />
              <Radio
                name="radio-no-label"
                value="option2"
                checked={radioValue === "option2"}
                onChange={(checked) => checked && setRadioValue("option2")}
              />
              <Radio
                name="radio-no-label-disabled"
                value="option1"
                checked={radioDisabledValue === "option1"}
                onChange={(checked) => checked && setRadioDisabledValue("option1")}
                disabled
              />
              <Radio
                name="radio-no-label-disabled"
                value="option2"
                checked={radioDisabledValue === "option2"}
                onChange={(checked) => checked && setRadioDisabledValue("option2")}
                disabled
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Component Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base mb-6">
          Search Component
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              States
            </h3>
            <div className="flex flex-col gap-4 max-w-md">
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Normal State
                </label>
                <Search placeholder="검색어를 입력해주세요." />
              </div>
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Controlled Input (Hover on focus)
                </label>
                <Search
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="검색어를 입력해주세요."
                />
              </div>
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Disabled State
                </label>
                <Search
                  disabled
                  placeholder="검색어를 입력해주세요."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Component Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base mb-6">
          Toast Component
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              Types
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Success Toast
                </label>
                <Toast
                  type="success"
                  message="게시글이 정상적으로 등록되었습니다."
                />
              </div>
              <div>
                <label className="block text-typo-body-small-regular text-text-neutral-description mb-2">
                  Fail Toast
                </label>
                <Toast
                  type="fail"
                  message="파일 업로드 용량을 초과하였습니다."
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-pretendard text-typo-body-medium-bold text-text-neutral-base mb-4">
              With Toast Hook
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                onClick={() => showToast("success", "게시글이 정상적으로 등록되었습니다.")}
              >
                Show Success Toast
              </Button>
              <Button
                variant="primary"
                onClick={() => showToast("fail", "파일 업로드 용량을 초과하였습니다.")}
              >
                Show Fail Toast
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
