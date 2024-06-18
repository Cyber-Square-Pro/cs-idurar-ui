import React from "react";

/*
  Author: Reshma on June 7th, 2024
  Purpose: Renders a navigation layout.
  Props:
    - children: React.ReactNode - The main content to be displayed.
    - footer: React.ReactNode - The footer component to be displayed.
    - sidebar: React.ReactNode - The sidebar content to be displayed.
  Updated by: - Muhammed Adnan on June 13th, 2024 - Enhance Layout and Style
*/

export interface Route {
  name: string;
  image?: string;
  href: string;
  selectedIcon?: string;
}

type Props = {
  children: React.ReactNode;
  footer: React.ReactNode;
  sidebar: React.ReactNode;
};

const Navigation: React.FC<Props> = ({ children, footer, sidebar }) => {
  return (
    <div className="flex h-full w-screen overflow-hidden gap-2">
      <div className="relative h-full max-w-[400px] min-w-[300px] flex-shrink-0">
        <div className="absolute inset-0 flex flex-col border-r border-t border-b rounded-tr-lg bg-zinc-100">
          <div className="flex-grow overflow-auto">{sidebar}</div>
          <div className="mt-auto">{footer}</div>
        </div>
      </div>
      <div className="flex-grow w-full rounded-tl-lg overflow-auto border">{children}</div>
    </div>
  );
};

export default Navigation;
