import { Search, Button } from "../index";

export function Header() {
  return (
    <div className="border border-border-neutral-level1 border-solid flex items-center justify-between px-6 py-4 relative shrink-0 w-full">
      <Search placeholder="검색어를 입력해주세요." />
      <div className="flex gap-[10px] items-start overflow-clip relative shrink-0">
        <Button variant="normal">Admin</Button>
        <Button variant="primary">Tutorial</Button>
      </div>
    </div>
  );
}
