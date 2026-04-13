"use client";

import React, { createContext, useState, ReactNode } from 'react';

interface props {
    expanded: boolean;
    setExpanded: Dispatch<boolean>;
}

export const MenuContext = createContext<props | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <MenuContext.Provider value={{ expanded, setExpanded }}>
            {children}
        </MenuContext.Provider>
    );
}