import { useState } from 'react'
import Button from './components/Button'
import type { ButtonType, ButtonState } from './components/Button'
import Toggle from './components/Toggle'
import type { ToggleState } from './components/Toggle'
import Input from './components/Input'
import type { InputState } from './components/Input'
import Select from './components/Select'
import type { SelectState } from './components/Select'
import Checkbox from './components/Checkbox'
import type { CheckboxState } from './components/Checkbox'
import Radio from './components/Radio'
import type { RadioState } from './components/Radio'
import Search from './components/Search'
import type { SearchState } from './components/Search'
import Dropdown from './components/Dropdown'
import type { DropdownOption } from './components/Dropdown'
import Toast from './components/Toast'
import type { ToastType } from './components/Toast'

function App() {
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    'normal-off': false,
    'normal-on': true,
    'disabled-off': false,
    'disabled-on': true,
  });

  const [inputValue, setInputValue] = useState('');
  const [inputState, setInputState] = useState<InputState>('normal');
  const [selectValue, setSelectValue] = useState<string>('');
  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({
    'interactive-1': false,
    'interactive-2': true,
  });
  const [radioValue, setRadioValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  
  const defaultDropdownOptions: DropdownOption[] = [
    { id: '1', label: '고객사명', checked: true },
    { id: '2', label: '업무 유형', checked: true },
    { id: '3', label: '담당자', checked: false },
    { id: '4', label: '등록일', checked: false },
    { id: '5', label: '종료일', checked: false },
  ];

  const buttonTypes: ButtonType[] = ['primary', 'secondary', 'normal', 'ghost'];
  const buttonStates: ButtonState[] = ['normal', 'hover'];
  const toggleStatesList: ToggleState[] = ['normal', 'disabled'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Button Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Button Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {buttonTypes.map((type) => (
                <div key={type} className="space-y-4">
                  <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                    {type}
                  </h2>
                  {buttonStates.map((state) => (
                    <div key={state} className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 w-16 capitalize">
                        {state}:
                      </span>
                      <Button
                        type={type}
                        state={state}
                        onClick={() => console.log(`Clicked ${type} ${state} button`)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples (with hover effects)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button type="primary" onClick={() => alert('Primary button clicked!')}>
                  Primary Button
                </Button>
                <Button type="secondary" onClick={() => alert('Secondary button clicked!')}>
                  Secondary Button
                </Button>
                <Button type="normal" onClick={() => alert('Normal button clicked!')}>
                  Normal Button
                </Button>
                <Button type="ghost" onClick={() => alert('Ghost button clicked!')}>
                  Ghost Button
                </Button>
                <Button type="primary" disabled>
                  Disabled Button
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Toggle Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="space-y-6">
              {toggleStatesList.map((state) => (
                <div key={state} className="space-y-4">
                  <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                    {state}
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 w-20">Off:</span>
                      <Toggle
                        label={true}
                        state={state}
                        toggle={toggleStates[`${state}-off`]}
                        onChange={(checked) => 
                          setToggleStates(prev => ({ ...prev, [`${state}-off`]: checked }))
                        }
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 w-20">On:</span>
                      <Toggle
                        label={true}
                        state={state}
                        toggle={toggleStates[`${state}-on`]}
                        onChange={(checked) => 
                          setToggleStates(prev => ({ ...prev, [`${state}-on`]: checked }))
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Toggle
                    label={true}
                    state="normal"
                    toggle={toggleStates['interactive-1'] || false}
                    onChange={(checked) => 
                      setToggleStates(prev => ({ ...prev, 'interactive-1': checked }))
                    }
                    labelText="Enable notifications"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Toggle
                    label={true}
                    state="normal"
                    toggle={toggleStates['interactive-2'] || true}
                    onChange={(checked) => 
                      setToggleStates(prev => ({ ...prev, 'interactive-2': checked }))
                    }
                    labelText="Dark mode"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Toggle
                    label={false}
                    state="normal"
                    toggle={toggleStates['interactive-3'] || false}
                    onChange={(checked) => 
                      setToggleStates(prev => ({ ...prev, 'interactive-3': checked }))
                    }
                  />
                  <span className="text-sm text-gray-600">Toggle without label</span>
                </div>
                <div className="flex items-center gap-4">
                  <Toggle
                    label={true}
                    state="disabled"
                    toggle={false}
                    labelText="Disabled toggle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Input Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Normal & Hover
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Normal:</span>
                    <Input
                      state="normal"
                      errorMsg={false}
                      placeholder="텍스트를 입력해주세요."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Hover:</span>
                    <Input
                      state="hover"
                      errorMsg={false}
                      placeholder="텍스트를 입력해주세요."
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Error States
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Error (no message):</span>
                    <Input
                      state="error"
                      errorMsg={false}
                      placeholder="텍스트를 입력해주세요."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Error (with message):</span>
                    <Input
                      state="error"
                      errorMsg={true}
                      placeholder="텍스트를 입력해주세요."
                      errorMessage="상황에 맞는 메시지를 넣어주세요."
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples
              </h3>
              <div className="space-y-4 max-w-md">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => console.log('Email:', e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Password (with error)
                  </label>
                  <Input
                    type="password"
                    state="error"
                    errorMsg={true}
                    placeholder="Enter your password"
                    errorMessage="Password must be at least 8 characters"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Disabled Input
                  </label>
                  <Input
                    placeholder="This input is disabled"
                    disabled={true}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Controlled Input (with validation)
                  </label>
                  <Input
                    value={inputValue}
                    state={inputState}
                    errorMsg={inputState === 'error'}
                    placeholder="Type something..."
                    errorMessage="This field is required"
                    onChange={(e) => {
                      const value = e.target.value;
                      setInputValue(value);
                      if (value.length === 0) {
                        setInputState('error');
                      } else {
                        setInputState('normal');
                      }
                    }}
                    onFocus={() => {
                      if (inputState === 'error' && inputValue.length > 0) {
                        setInputState('normal');
                      } else if (inputState === 'normal') {
                        setInputState('hover');
                      }
                    }}
                    onBlur={() => {
                      if (inputState === 'hover') {
                        setInputState('normal');
                      }
                      if (inputValue.length === 0) {
                        setInputState('error');
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Select Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Select Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  States
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Normal:</span>
                    <Select
                      state="normal"
                      placeholder="셀렉트"
                      options={[
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' },
                        { value: '3', label: 'Option 3' },
                      ]}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Hover:</span>
                    <Select
                      state="hover"
                      placeholder="셀렉트"
                      options={[
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' },
                        { value: '3', label: 'Option 3' },
                      ]}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Disabled:</span>
                    <Select
                      state="normal"
                      placeholder="셀렉트"
                      disabled={true}
                      options={[
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' },
                      ]}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  With Selection
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Selected:</span>
                    <Select
                      state="normal"
                      placeholder="셀렉트"
                      value="2"
                      options={[
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' },
                        { value: '3', label: 'Option 3' },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples
              </h3>
              <div className="space-y-4 max-w-md">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Choose a country
                  </label>
                  <Select
                    placeholder="Select a country"
                    value={selectValue}
                    onChange={(value) => {
                      setSelectValue(value);
                      console.log('Selected:', value);
                    }}
                    options={[
                      { value: 'kr', label: 'South Korea' },
                      { value: 'us', label: 'United States' },
                      { value: 'jp', label: 'Japan' },
                      { value: 'cn', label: 'China' },
                      { value: 'uk', label: 'United Kingdom' },
                    ]}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Choose a language
                  </label>
                  <Select
                    placeholder="Select a language"
                    options={[
                      { value: 'ko', label: '한국어' },
                      { value: 'en', label: 'English' },
                      { value: 'ja', label: '日本語' },
                      { value: 'zh', label: '中文' },
                    ]}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Disabled Select
                  </label>
                  <Select
                    placeholder="This select is disabled"
                    disabled={true}
                    options={[
                      { value: '1', label: 'Option 1' },
                      { value: '2', label: 'Option 2' },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Checkbox Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Normal States
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Normal (unchecked):</span>
                    <Checkbox
                      state="normal"
                      disabled={false}
                      checked={false}
                      labelText="체크박스"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Hover (unchecked):</span>
                    <Checkbox
                      state="hover"
                      disabled={false}
                      checked={false}
                      labelText="체크박스"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Checked:</span>
                    <Checkbox
                      state="check"
                      disabled={false}
                      checked={true}
                      labelText="체크박스"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Disabled States
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Disabled (unchecked):</span>
                    <Checkbox
                      state="normal"
                      disabled={true}
                      checked={false}
                      labelText="체크박스"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Disabled (checked):</span>
                    <Checkbox
                      state="check"
                      disabled={true}
                      checked={true}
                      labelText="체크박스"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples
              </h3>
              <div className="space-y-4 max-w-md">
                <div className="flex flex-col gap-4">
                  <Checkbox
                    checked={checkboxStates['interactive-1'] || false}
                    onChange={(checked) => {
                      setCheckboxStates(prev => ({ ...prev, 'interactive-1': checked }));
                      console.log('Checkbox 1:', checked);
                    }}
                    labelText="Accept terms and conditions"
                  />
                  <Checkbox
                    checked={checkboxStates['interactive-2'] || true}
                    onChange={(checked) => {
                      setCheckboxStates(prev => ({ ...prev, 'interactive-2': checked }));
                      console.log('Checkbox 2:', checked);
                    }}
                    labelText="Subscribe to newsletter"
                  />
                  <Checkbox
                    checked={false}
                    disabled={true}
                    labelText="This option is disabled"
                  />
                  <Checkbox
                    checked={true}
                    disabled={true}
                    labelText="This checked option is disabled"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Radio Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Radio Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Normal States
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Normal (unchecked):</span>
                    <Radio
                      state="normal"
                      disabled={false}
                      checked={false}
                      labelText="라디오버튼"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Hover (unchecked):</span>
                    <Radio
                      state="hover"
                      disabled={false}
                      checked={false}
                      labelText="라디오버튼"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Checked:</span>
                    <Radio
                      state="check"
                      disabled={false}
                      checked={true}
                      labelText="라디오버튼"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Disabled States
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Disabled (unchecked):</span>
                    <Radio
                      state="normal"
                      disabled={true}
                      checked={false}
                      labelText="라디오버튼"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Disabled (checked):</span>
                    <Radio
                      state="check"
                      disabled={true}
                      checked={true}
                      labelText="라디오버튼"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples
              </h3>
              <div className="space-y-4 max-w-md">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 mb-2">
                    Choose a payment method:
                  </label>
                  <div className="space-y-2">
                    <Radio
                      name="payment"
                      value="credit"
                      checked={radioValue === 'credit'}
                      onChange={(checked) => {
                        if (checked) setRadioValue('credit');
                        console.log('Selected payment:', 'credit');
                      }}
                      labelText="Credit Card"
                    />
                    <Radio
                      name="payment"
                      value="debit"
                      checked={radioValue === 'debit'}
                      onChange={(checked) => {
                        if (checked) setRadioValue('debit');
                        console.log('Selected payment:', 'debit');
                      }}
                      labelText="Debit Card"
                    />
                    <Radio
                      name="payment"
                      value="paypal"
                      checked={radioValue === 'paypal'}
                      onChange={(checked) => {
                        if (checked) setRadioValue('paypal');
                        console.log('Selected payment:', 'paypal');
                      }}
                      labelText="PayPal"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 mb-2">
                    Choose a size (disabled group):
                  </label>
                  <div className="space-y-2">
                    <Radio
                      name="size"
                      value="small"
                      checked={false}
                      disabled={true}
                      labelText="Small"
                    />
                    <Radio
                      name="size"
                      value="medium"
                      checked={true}
                      disabled={true}
                      labelText="Medium"
                    />
                    <Radio
                      name="size"
                      value="large"
                      checked={false}
                      disabled={true}
                      labelText="Large"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Search Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  States
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Normal:</span>
                    <Search
                      state="normal"
                      placeholder="검색어를 입력해주세요."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Hover:</span>
                    <Search
                      state="hover"
                      placeholder="검색어를 입력해주세요."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Disabled:</span>
                    <Search
                      state="normal"
                      placeholder="검색어를 입력해주세요."
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  With Value
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">With text:</span>
                    <Search
                      state="normal"
                      value="검색어 예시"
                      placeholder="검색어를 입력해주세요."
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples
              </h3>
              <div className="space-y-4 max-w-md">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Search products
                  </label>
                  <Search
                    placeholder="Search for products..."
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      console.log('Search input:', e.target.value);
                    }}
                    onSearch={(value) => {
                      alert(`Searching for: ${value}`);
                    }}
                  />
                  {searchValue && (
                    <p className="text-xs text-gray-500">
                      Press Enter to search or type to filter
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Search users (disabled)
                  </label>
                  <Search
                    placeholder="This search is disabled"
                    disabled={true}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Custom placeholder
                  </label>
                  <Search
                    placeholder="Type to search..."
                    onSearch={(value) => {
                      console.log('Searched:', value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Dropdown Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Default Dropdown
                </h2>
                <div className="flex flex-col gap-2">
                  <Dropdown
                    options={defaultDropdownOptions}
                    searchPlaceholder="검색어를 입력해주세요."
                    onSelectionChange={(selectedIds) => {
                      console.log('Selected IDs:', selectedIds);
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Custom Options
                </h2>
                <div className="flex flex-col gap-2">
                  <Dropdown
                    options={[
                      { id: '1', label: 'Option 1', checked: false },
                      { id: '2', label: 'Option 2', checked: true },
                      { id: '3', label: 'Option 3', checked: false },
                      { id: '4', label: 'Option 4', checked: true },
                    ]}
                    searchPlaceholder="Search options..."
                    onSelectionChange={(selectedIds) => {
                      console.log('Selected IDs:', selectedIds);
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples
              </h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Filter by category
                  </label>
                  <Dropdown
                    options={[
                      { id: 'cat1', label: 'Electronics', checked: false },
                      { id: 'cat2', label: 'Clothing', checked: true },
                      { id: 'cat3', label: 'Books', checked: false },
                      { id: 'cat4', label: 'Home & Garden', checked: true },
                      { id: 'cat5', label: 'Sports', checked: false },
                    ]}
                    searchPlaceholder="Search categories..."
                    onSelectionChange={(selectedIds) => {
                      console.log('Selected categories:', selectedIds);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Select columns to display
                  </label>
                  <Dropdown
                    options={[
                      { id: 'col1', label: 'Name', checked: true },
                      { id: 'col2', label: 'Email', checked: true },
                      { id: 'col3', label: 'Phone', checked: false },
                      { id: 'col4', label: 'Address', checked: false },
                      { id: 'col5', label: 'Status', checked: true },
                    ]}
                    searchPlaceholder="Search columns..."
                    onSelectionChange={(selectedIds) => {
                      console.log('Selected columns:', selectedIds);
                    }}
                    width="240px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Component Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Toast Component Variants
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Success Toast
                </h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Default message:</span>
                    <Toast type="success" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Custom message:</span>
                    <Toast
                      type="success"
                      message="Operation completed successfully!"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 capitalize mb-2">
                  Error Toast
                </h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Default message:</span>
                    <Toast type="fail" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">Custom message:</span>
                    <Toast
                      type="fail"
                      message="An error occurred. Please try again."
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Interactive Examples
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <Button
                    type="primary"
                    onClick={() => {
                      // In a real app, you'd show this toast using a toast manager
                      console.log('Show success toast');
                    }}
                  >
                    Show Success Toast
                  </Button>
                  <Button
                    type="secondary"
                    onClick={() => {
                      console.log('Show error toast');
                    }}
                  >
                    Show Error Toast
                  </Button>
                </div>
                <div className="space-y-2">
                  <Toast
                    type="success"
                    message="Your changes have been saved successfully!"
                  />
                  <Toast
                    type="fail"
                    message="Failed to save. Please check your connection and try again."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
