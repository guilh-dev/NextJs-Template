import { useMenu } from "@/hooks";

import MenuTooltip from "./tooltip-menu";
import ThemeToggle from "./toggletheme-menu"
import LocaleSwitcher from "./localeswicher-menu";
import Button from "./button-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { MenuItem } from "./interfaces-menu";

export default function CollapsedSidebar({ items, t }: { items: MenuItem[], t: string[] }) {
    const { setExpanded } = useMenu();

    return (
        <>
            <MenuTooltip label="Menu">
                <button 
                    onClick={() => setExpanded(true)}
                    className="flex w-10 items-center gap-4 rounded-md px-2.5 py-2.5 text-sm font-medium transition
                        text-slate-12 hover:bg-slate-10/60 dark:hover:bg-slate-1/80"
                    >
                    <HamburgerMenuIcon className="w-5 h-5" />
                </button>
            </MenuTooltip>
            <div className="mt-4 flex flex-1 flex-col gap-2">
                {items.map((item) => {
                    return (
                        <MenuTooltip key={item.label} label={item.label}>
                            <Button icon={item.icon} href={item.href} label={item.label}/>
                        </MenuTooltip>
                    );
                })}
                <MenuTooltip label={t[0] ?? "Switch Theme"}>
                    <ThemeToggle label={t[0] ?? 'Switch Theme'} />
                </MenuTooltip>
                <MenuTooltip label={t[1] ?? "Language"}>
                    <LocaleSwitcher label={t[1] ?? 'Language'} />
                </MenuTooltip>

            </div>
        </>
    );
}