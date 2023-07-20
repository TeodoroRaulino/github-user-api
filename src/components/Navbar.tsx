import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import SpinnerLoading from "./SpinnerLoading";

export default function Navbar() {
  const [icon, setIcon] = useState(
    <FaSun className="text-2xl text-gray-800" />
  );

  const [showIcon, setShowIcon] = useState(true);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIcon(
      theme === "dark" ? (
        <FaMoon className="text-2xl text-gray-800" />
      ) : (
        <FaSun className="text-2xl text-gray-800" />
      )
    );
  }, [theme]);

  const handleThemeToggle = () => {
    setShowIcon(false);

    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setShowIcon(true);
    }, 500);
  };

  return (
    <div className="flex justify-between items-center h-20 bg-gray-800">
      <Link href="/" className="flex items-center px-10">
        <FaGithub className="text-5xl text-white" />
        <h1 className="text-3xl text-white text-center pl-2">GitHub Users</h1>
      </Link>
      <div className="flex justify-center items-center px-10">
        <button
          className={`flex justify-center items-center h-10 w-10 rounded-full bg-gray-100 transition-opacity duration-500 ease-in-out ${
            showIcon ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleThemeToggle}
        >
          {icon}
        </button>
      </div>
    </div>
  );
}
