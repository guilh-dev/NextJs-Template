import { useMenu } from "@/hooks";

import Button from "./button-menu";
import ThemeToggle from "./toggletheme-menu"
import LocaleSwitcher from "./localeswicher-menu";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { MenuItem } from "./interfaces-menu";


export default function ExpandedSidebar({ items, t }: { items: MenuItem[], t: string[] }) {
  const { setExpanded } = useMenu();

  return (
    <>
        <button 
            onClick={() => setExpanded(false)}
            className="flex w-full items-center gap-4 rounded-md px-4 py-2.5 text-sm font-medium transition
                text-slate-12 hover:bg-slate-10/60 dark:hover:bg-slate-1/80"
        >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Menu</span>
        </button>
        <div className="w-full mt-4 flex flex-col gap-2">
            {items.map((item) => {
                return (
                    <Button key={item.label} expanded={true} icon={item.icon} href={item.href} label={item.label}/>
                );
            })}
            <ThemeToggle label={t[0] ?? 'Switch Theme'} expanded={true}/>
            <LocaleSwitcher label={t[1] ?? 'Language'} expanded={true}/>
        </div>
    </>
  );
}