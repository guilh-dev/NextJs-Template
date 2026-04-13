'use client'

import { useMenu } from "@/hooks";
import { useTranslations } from 'next-intl';

import { MenuItem } from "./interfaces-menu";
import CollapsedSidebar from "./collapsed-menu";
import ExpandedSidebar from "./expanded-menu";

import {
  HomeIcon,
  MobileIcon,
  ArchiveIcon,
  Pencil2Icon,
  DashboardIcon,
  FileTextIcon,
  PersonIcon,
  ExclamationTriangleIcon
} from "@radix-ui/react-icons";


// SidebarMenu principal
export default function SidebarMenu() {
  const { expanded } = useMenu();

  const t = useTranslations('Menu');

  const items : MenuItem[] = [
    { label: t('home'), href: "/", icon: HomeIcon },
    { label: t("android"), href: "/#", icon: MobileIcon },
    { label: t("cloud"), href: "/#", icon: ArchiveIcon },
    { label: t("edit"), href: "/#", icon: Pencil2Icon },
    { label: t("dashboard"), href: "/#", icon: DashboardIcon },
    { label: t("documents"), href: "/#", icon: FileTextIcon },
    { label: t("account"), href: "/#", icon: PersonIcon },
    { label: t("errors"), href: "/#", icon: ExclamationTriangleIcon },
  ];


  return (
    <nav className="fixed inset-y-0 left-4 flex items-center z-10 pointer-events-none">
      <div className="flex items-start gap-4 p-4 pointer-events-auto">
        <aside 
          className={`
            flex h-142 flex-col items-center rounded-xl bg-slate-2 border-2 border-slate-12 px-2 py-3  
            shadow-lg shadow-gray-500 transition-all duration-500 ease-in-out dark:bg-slate-3 dark:border-0 dark:shadow-slate-1
            ${expanded ? "w-64" : "w-16"} 
          `}
        >
            {expanded 
              ? <ExpandedSidebar items={items} t={[t('theme'), t('lang')]} /> 
              : <CollapsedSidebar items={items} t={[t('theme'), t('lang')]} />
            }
        </aside>
      </div>
    </nav>
  );
}