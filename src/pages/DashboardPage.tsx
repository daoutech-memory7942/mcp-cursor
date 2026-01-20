import { ChevronRightIcon, PhotoIcon } from "../components/dashboard/icons";
import { Layout } from "../components/layout/Layout";

type StatCardProps = {
  value: string;
  label: string;
};

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-bg-neutral-base flex flex-[1_0_0] flex-col min-h-px min-w-px overflow-clip relative rounded-radius-xlarge">
      <div className="flex gap-[var(--padding-5)] items-center overflow-clip px-5 py-6 relative shrink-0 w-full">
        <div className="bg-bg-neutral-level1 rounded-radius-medium shrink-0 size-12" />
        <div className="flex flex-[1_0_0] flex-col items-start justify-center leading-[1.5] min-h-px min-w-px not-italic relative text-text-neutral-base whitespace-pre-wrap">
          <p className="font-pretendard text-typo-heading-medium relative shrink-0 w-[192px]">{value}</p>
          <p className="font-pretendard text-typo-body-small-regular relative shrink-0 w-[192px]">{label}</p>
        </div>
      </div>
      <div className="border-border-neutral-level1 border-solid border-t flex items-center justify-between overflow-clip pl-5 pr-3 py-[10px] relative shrink-0 w-full">
        <p className="font-pretendard text-typo-body-small-regular leading-[1.5] not-italic relative shrink-0 text-text-neutral-base">
          See detail
        </p>
        <div className="overflow-clip relative shrink-0 size-4 text-icon-neutral-level1">
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}

type NewsCardProps = {
  title: string;
  content: string;
};

function NewsCard({ title, content }: NewsCardProps) {
  return (
    <div className="bg-bg-neutral-base flex flex-[1_0_0] flex-col h-[280px] items-start min-h-px min-w-px overflow-clip relative rounded-radius-xlarge">
      <div className="bg-bg-neutral-level1 flex items-center justify-center overflow-clip px-5 py-10 relative shrink-0 w-full">
        <div className="relative shrink-0 size-[52px] text-icon-neutral-disabled">
          <PhotoIcon />
        </div>
      </div>
      <div className="border-border-neutral-level1 border-solid border-t flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.5] min-h-px min-w-px not-italic overflow-clip pl-5 pr-3 py-[10px] relative text-text-neutral-base w-full">
        <p className="font-pretendard text-typo-heading-medium relative shrink-0">{title}</p>
        <p className="flex-[1_0_0] font-pretendard text-typo-body-small-regular min-h-px min-w-px overflow-hidden relative text-ellipsis w-full whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Layout>
      {/* Overview Stats */}
      <div className="flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
        <p className="font-pretendard text-typo-heading-medium leading-[1.5] not-italic relative shrink-0 text-text-neutral-base">
          Overview
        </p>
        <div className="flex gap-4 items-center relative shrink-0 w-full">
          <StatCard value="10" label="Total Documents" />
          <StatCard value="412" label="Total Mail" />
          <StatCard value="54" label="Total Apps" />
          <StatCard value="7" label="Total Board" />
        </div>
      </div>

      {/* Overview News */}
      <div className="flex flex-col gap-4 items-start justify-center pt-5 relative shrink-0 w-full mt-5">
        <p className="font-pretendard text-typo-heading-medium leading-[1.5] not-italic relative shrink-0 text-text-neutral-base">
          Overview
        </p>
        <div className="content-start flex flex-wrap gap-4 items-start relative shrink-0 w-full">
          <NewsCard
            title="Next Week"
            content="President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday."
          />
          <NewsCard
            title="Next Week"
            content="President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday."
          />
          <NewsCard
            title="A look back at 2025"
            content="President Lee Jae Myung came into office in June, filling the void left by former President Yoon Suk Yeol. The transition reshaped the political landscape. The conservative People Power Party saw its"
          />
          <NewsCard
            title="NIS refutes Coupang"
            content="South Korea's National Intelligence Service on Tuesday denied Coupang interim"
          />
        </div>
      </div>
    </Layout>
  );
}
