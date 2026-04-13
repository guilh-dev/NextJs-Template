'use client';

import * as Tooltip from '@radix-ui/react-tooltip';

interface MenuTooltip {
    children: React.ReactNode;
    label: string; 
}

export default function MenuTooltip({ children, label }: MenuTooltip) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        {children}
      </Tooltip.Trigger>
      
      <Tooltip.Portal>
        <Tooltip.Content
          side="right"
          
          className="z-50  rounded-md bg-zinc-400 dark:bg-zinc-900 px-3 py-1.5 text-xs text-black dark:text-white shadow-md animate-in fade-in zoom-in duration-200"
        >
          {label}
          <Tooltip.Arrow className="fill-zinc-400 dark:fill-zinc-900" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}