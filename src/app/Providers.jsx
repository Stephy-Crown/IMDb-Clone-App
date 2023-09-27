"use client";
import { ThemeProvider } from "next-themes";

import React from "react";
// ThemeProvider uses context so it can be used as client side, it cannot be used as server side
export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
