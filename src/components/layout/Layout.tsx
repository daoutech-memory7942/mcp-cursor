import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export interface LayoutProps {
  children: ReactNode;
  footer?: ReactNode;
}

export function Layout({ children, footer }: LayoutProps) {
  return (
    <div className="bg-bg-neutral-base flex items-start justify-start relative w-full h-screen overflow-hidden">
      <Sidebar />
      <div className="bg-bg-neutral-level1 flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-y-auto pb-10 relative self-stretch">
        <Header />
        <div className="flex flex-col items-start justify-center pt-5 px-6 relative shrink-0 w-full">
          {children}
        </div>
        {footer && (
          <div className="flex gap-2 items-center justify-center pt-5 px-6 relative shrink-0 w-full">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
