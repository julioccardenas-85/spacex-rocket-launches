"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 600);
  };

  return (
    <main
      onClick={handleClick}
      className={`
        h-screen w-screen flex items-center justify-center
        cursor-pointer select-none
        transition-opacity duration-700 ease-in-out
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg"
        alt="SpaceX Logo"
        className="
          w-2/3 max-w-xl
          animate-fade-in
          dark:invert
        "
      />
      <p className="absolute bottom-10 text-sm opacity-60">
        Click anywhere to enter
      </p>

    </main>
  );
}
