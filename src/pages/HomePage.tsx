import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-2xl w-full text-center">
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-24 w-24 hover:drop-shadow-lg transition-all"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-24 w-24 hover:drop-shadow-lg transition-all animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="font-pretendard text-typo-heading-xlarge text-text-neutral-base mb-8">
        Vite + React + Tailwind CSS
      </h1>

      <div className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            className="px-4 py-2 bg-bg-primary-base text-text-on-color rounded-medium hover:bg-bg-primary-hover transition-colors"
            onClick={() => setCount((c) => c + 1)}
          >
            Count: {count}
          </button>
          <Link
            to="/component"
            className="px-4 py-2 bg-bg-neutral-level1 text-text-neutral-base rounded-medium hover:bg-bg-neutral-level2 transition-colors"
          >
            View Components
          </Link>
        </div>

        <p className="font-pretendard text-typo-body-medium-regular text-text-neutral-description">
          Click the button to increment count
        </p>
        <p className="mt-4 text-text-neutral-description text-typo-body-small-regular">
          Edit{" "}
          <code className="bg-bg-neutral-level1 px-2 py-1 rounded-small">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="text-text-neutral-description text-typo-body-small-regular">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
