"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SummonerSearch from "@/app/components/SummonerSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  // Function for toggling navbar
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to close navbar
  const closeMenu = () => {
    setNav(false);
  };

  // Function to scroll to top
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Function for closing mobile dropdown menu when window is resized
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNav(false);
      }
    };

    // Function for closing mobile dropdown menu when clicking outside
    const handleClickOutside = (event) => {
      if (
        !menuRef.current ||
        !navbarRef.current ||
        menuRef.current.contains(event.target) ||
        navbarRef.current.contains(event.target)
      ) {
        return;
      }
      setNav(false);
    };

    // Function for updating scrollBackground
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
        setNav(false);
      } else {
        setScrollBackground(false);
      }
    };

    // Event listeners for menu functions
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const redirectToPath = (path) => {
    if (typeof window !== "undefined") {
      window.location.href = path;
    }
  };

  const urlCheck = (url) => {
    if (typeof window !== "undefined" && window.location.pathname === url) {
      return true;
    }
    return false;
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 z-[100] flex h-16 w-full flex-row items-center justify-between border-b-[0.5px] border-brand-bg2 bg-brand-bg px-2 py-5 md:px-6 lg:px-10"
    >
      <div className="navLogo-container flex items-center gap-5">
        <Link href="/" className="flex gap-2 px-2 text-lg font-bold">
          Tactician Tracker
          <span className="flex h-4 items-center justify-center rounded-[.25rem] bg-brand-secondary px-2 text-[.6rem] font-black text-brand-bg md:h-5 md:rounded-md md:text-xs">
            BETA
          </span>
        </Link>
        <div className="hidden lg:flex">
          <SummonerSearch />
        </div>
      </div>

      {/* Default navbar */}
      <div
        onClick={handleNav}
        className={nav ? "hidden" : "z-50 flex p-2 md:hidden"}
      >
        <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
      </div>
      <div
        onClick={handleNav}
        className={nav ? "z-50 flex p-2 md:hidden" : "hidden"}
      >
        <FontAwesomeIcon className="w-6 h-6" icon={faXmark} />
      </div>

      <div className="navLinks-container hidden gap-5 md:flex">
        <Link href="/">Home</Link>
        <Link href="/leaderboards">Leaderboards</Link>
        <Link href="/champions">Champions</Link>
        <Link href="/items">Items</Link>
      </div>

      {/* Mobile Navbar */}
      <div
        ref={menuRef}
        className={
          nav
            ? "absolute bg-brand-bg text-xl top-16 right-0 bottom-0 flex flex-grow flex-col gap-6 justify-start items-left w-1/2 h-screen ease-in duration-300 pt-24 pl-3 sm:hidden"
            : "absolute bg-brand-bg text-xl top-16 right-[-100%] bottom-0 flex flex-grow flex-col gap-6 justify-start items-left w-1/2 h-screen ease-in duration-300 pt-24 pl-3 sm:hidden"
        }
      >
        <div className="flex flex-col mt-8">
          <Link href="/">Home</Link>
          <Link href="/leaderboards">Leaderboards</Link>
          <Link href="/champions">Champions</Link>
          <Link href="/items">Items</Link>
        </div>
      </div>
    </nav>
  );
}
