"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, Attribute } from "next-themes";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    const attr : Attribute = "class"
    
    const themeprops = {
        attribute: attr,
        defaultTheme: "system",
        enableSystem: true,
        disableTransitionOnChange: true,
    }
    return <NextThemesProvider {...themeprops}>{children}</NextThemesProvider>;
}