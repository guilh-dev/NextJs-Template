"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@radix-ui/react-icons"
import { forwardRef } from 'react'; 


const ThemeToggle = forwardRef<HTMLButtonElement, {label: string, expanded?: boolean}>(
    ({label, expanded, ...props}, ref) => {

        const { theme, setTheme } = useTheme();
        const [mounted, setMounted] = useState(false);

        // Prevents a hydration error (renders only on the client)
        useEffect(() => setMounted(true), []);
        return (
            <button
            ref={ref}
            {...props}
            onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
            className={`flex items-center gap-4 rounded-md text-sm font-medium transition
                hover:bg-slate-10/60 text-slate-12 dark:hover:bg-slate-1/80
                ${
                expanded
                    ? "w-full px-4 py-2.5"
                    : "w-10 px-2.5 py-2.5"
                }`}
            >
                <div className={`${mounted ? "opacity-100" : "opacity-0"}`}>
                    <SunIcon className="h-5 w-5 shrink-0"/>
                </div>

                <span className={`
                overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out
                ${expanded && mounted 
                    ? "opacity-100 max-w-120"
                    : "opacity-0 max-w-0"        
                }
                `}>
                {label}
                </span>
            </button>
        );
    }
)

ThemeToggle.displayName = "ThemeToggle";
export default ThemeToggle;