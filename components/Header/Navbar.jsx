"use client";
import { useEffect } from "react";
import Search from "./Search";
import { theme } from "./theme";

function Navbar() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <nav className="flex bg-white dark:bg-gray-900">
      <Search />
      <button onClick={theme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;
