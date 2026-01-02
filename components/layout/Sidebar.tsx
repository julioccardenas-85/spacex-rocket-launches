"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-3 text-white bg-gray-900"
            >
                {open ? <X /> : <Menu />}
            </button>

            {/* Dark overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed inset-y-0 left-0 bg-gray-900 text-white w-64 p-6
                    transform transition-transform duration-300 ease-in-out z-30
                    flex flex-col
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 md:static
                    `}
            >
                {/* SpaceX logo */}
                <div className="mb-8 flex justify-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg"
                        alt="SpaceX Logo"
                        className="w-32"
                    />
                </div>

                <nav className="space-y-4">
                    <a className="block hover:text-gray-300 " href="/dashboard">Rocket Launches</a>
                </nav>

                <div className="mt-auto flex justify-center pb-4" ><ThemeToggle /></div>
            </aside>

        </>
    );
}
