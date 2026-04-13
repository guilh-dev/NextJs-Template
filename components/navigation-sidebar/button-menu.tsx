import Link from 'next/link';
import { forwardRef } from 'react';
import { MenuItem } from "./interfaces-menu";
import { useActivePath } from '@/hooks';

const Button = forwardRef<HTMLAnchorElement, MenuItem>(
  ({ icon: Icon, label, href, expanded, ...props }, ref) => {

    const isActive = useActivePath();

    const active = isActive(href);

    return (
      <Link 
        {...props}
        ref={ref}
        href={href} 
        className={`flex items-center gap-4 rounded-md text-sm font-medium transition ${
          active
            ? "bg-slate-10/60 text-slate-12 dark:bg-slate-1/80"
            : "hover:bg-slate-10/60 text-slate-12 dark:hover:bg-slate-1/80"
        }
        ${
          expanded
            ? "w-full px-4 py-2.5"
            : "w-10 px-2.5 py-2.5"
        }
      `}
      >
        <Icon className="h-5 w-5 shrink-0" />
        
        <span className={`
          overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out
          ${expanded 
            ? "opacity-100 max-w-120" 
            : "opacity-0 max-w-0" 
          }
        `}>
          {label}
        </span>
      </Link>
    );
  }
);

Button.displayName = "Button";
export default Button;