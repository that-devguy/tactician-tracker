"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import SummonerSearch from "@/app/components/SummonerSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faTrophy,
  faLayerGroup,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [mobileDatabaseDropdown, setMobileDatabaseDropdown] = useState(false);
  const [databaseDropdown, setDatabaseDropdown] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const currentRoute = usePathname();

  // Function for toggling navbar
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to close navbar
  const closeMenu = () => {
    setNav(false);
    setMobileDatabaseDropdown(false);
    setDatabaseDropdown(false);
  };

  const handleMobileDatabaseDropdown = () => {
    setMobileDatabaseDropdown(!mobileDatabaseDropdown);
  };

  const handleDatabaseDropdown = () => {
    setDatabaseDropdown(!databaseDropdown);
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
      setMobileDatabaseDropdown(false);
      setDatabaseDropdown(false);
    };

    // Function for updating scrollBackground
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
        setNav(false);
        setMobileDatabaseDropdown(false);
        setDatabaseDropdown(false);
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

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 z-[100] flex h-16 w-full flex-row items-center justify-between border-b-[0.5px] border-brand-bg2 bg-brand-bg px-2 md:px-6 lg:px-10"
    >
      <div className="navLogo-container flex items-center gap-5">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex gap-2 px-2 text-lg font-bold"
        >
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
        <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
      </div>
      <div
        onClick={handleNav}
        className={nav ? "z-50 flex p-2 md:hidden" : "hidden"}
      >
        <FontAwesomeIcon className="h-6 w-6" icon={faXmark} />
      </div>

      <div className="navLinks-container hidden h-full text-white/50 md:flex md:items-center">
        <Link
          href="/"
          onClick={closeMenu}
          className={`flex h-full items-center px-3 hover:text-white ${
            currentRoute === "/"
              ? "bg-gradient-to-t from-brand-secondary/50 from-5% via-brand-secondary/10 via-45% to-brand-bg to-90% text-white"
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/leaderboards"
          onClick={closeMenu}
          className={`flex h-full items-center px-3 hover:text-white ${
            currentRoute === "/leaderboards"
              ? "bg-gradient-to-t from-brand-secondary/50 from-5% via-brand-secondary/10 via-45% to-brand-bg to-90% text-white"
              : ""
          }`}
        >
          Leaderboards
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div
        ref={menuRef}
        className={
          nav
            ? "items-left absolute bottom-0 right-0 top-16 flex h-screen w-5/6 min-w-fit flex-grow flex-col justify-start gap-6 border-l border-brand-bg2 bg-brand-bg text-xl duration-300 ease-in md:hidden"
            : "items-left absolute bottom-0 right-[-100%] top-16 flex h-screen w-5/6 min-w-fit flex-grow flex-col justify-start gap-6 bg-brand-bg text-xl duration-300 ease-in md:hidden"
        }
      >
        <div className={nav ? "flex flex-col gap-2 py-5" : "hidden"}>
          <div className="flex h-10 px-5 lg:flex">
            <SummonerSearch />
          </div>
          <Link
            href="/"
            onClick={closeMenu}
            className={`flex h-10 items-center gap-4 px-5 ${
              currentRoute === "/"
                ? "bg-gradient-to-r from-brand-secondary/50 from-[1%] via-brand-secondary/10 via-15% to-brand-bg to-30% text-white"
                : ""
            }`}
          >
            <FontAwesomeIcon className="h-5 w-5" icon={faHouse} />
            Home
          </Link>
          <Link
            href="/leaderboards"
            onClick={closeMenu}
            className={`flex h-10 items-center gap-4 px-5 ${
              currentRoute === "/leaderboards"
                ? "bg-gradient-to-r from-brand-secondary/50 from-[1%] via-brand-secondary/10 via-20% to-brand-bg to-45% text-white"
                : ""
            }`}
          >
            <FontAwesomeIcon className="h-5 w-5" icon={faTrophy} />
            Leaderboards
          </Link>
        </div>
      </div>
    </nav>
  );
}
