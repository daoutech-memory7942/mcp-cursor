import {
  SmartHomeIcon,
  FolderIcon,
  LayoutGridIcon,
  ChartBarIcon,
  MailIcon,
} from "../dashboard/icons";

// Image URLs from Figma
const imgTypeSizeM40X40 = "https://www.figma.com/api/mcp/asset/2083fe84-de09-4286-8fe5-47ba13bdcdf1";
const imgEllipse1990 = "https://www.figma.com/api/mcp/asset/29abfbbc-4cc1-43f3-abb7-c0b5488ddfc7";
const imgLogo1 = "https://www.figma.com/api/mcp/asset/66fdb374-6596-4f7a-bfaa-fd06a886f7be";
const imgLogo2 = "https://www.figma.com/api/mcp/asset/8344a15f-f343-4f78-b027-c1b21826fb1b";

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

export function Sidebar() {
  return (
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
  );
}
