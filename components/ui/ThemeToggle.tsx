"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    // const [isDark, setIsDark] = useState(false);

    // useEffect(() => {
    //     const html = document.documentElement;


    //     if (isDark) {
    //         html.classList.add("dark");
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         html.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //     }
    // }, [isDark]);
    const [isDark, setIsDark] = useState<boolean | null>(null);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        setIsDark(theme === "dark");
    }, []);

    useEffect(() => {
        if (isDark === null) return;

        const html = document.documentElement;

        if (isDark) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    if (isDark === null) return null;

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="px-3 py-2 rounded font-medium transition
                    bg-gray-200 text-gray-800
                    dark:bg-gray-700 dark:text-gray-100
                    hover:bg-gray-300 dark:hover:bg-gray-600"
        >
            {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}
