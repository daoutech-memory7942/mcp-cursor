import { Link } from "react-router-dom";

export default function ComponentPage() {
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

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <p className="font-pretendard text-typo-body-medium-regular text-text-neutral-description">
          No components available yet.
        </p>
      </section>
    </div>
  );
}
