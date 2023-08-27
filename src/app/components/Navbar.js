"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SummonerSearch from "@/app/components/SummonerSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faRankingStar,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
      </div>
      <div
        onClick={handleNav}
        className={nav ? "z-50 flex p-2 md:hidden" : "hidden"}
      >
        <FontAwesomeIcon className="h-6 w-6" icon={faXmark} />
      </div>

      <div className="navLinks-container hidden gap-5 md:flex">
        <Link href="/">Home</Link>
        <Link href="/leaderboards">Leaderboards</Link>
        <p className="text-white/30 select-none">
          Database
        </p>
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
        <div className="flex flex-col gap-4 p-5">
          <div className="flex lg:flex">
            <SummonerSearch />
          </div>
          <Link href="/" className="flex items-center gap-4">
            <FontAwesomeIcon className="h-5 w-5" icon={faHouse} />
            Home
          </Link>
          <Link href="/leaderboards" className="flex items-center gap-4">
            <FontAwesomeIcon className="h-5 w-5" icon={faRankingStar} />
            Leaderboards
          </Link>
          <p className="flex items-center gap-4 text-white/30">
            <FontAwesomeIcon className="h-5 w-5" icon={faLayerGroup} />
            <p className="flex gap-2">
              Database
              <span className="flex h-4 items-center justify-center rounded-[.25rem] bg-brand-secondary px-2 text-[.6rem] font-black text-brand-bg md:h-5 md:rounded-md md:text-xs">
                COMING SOON
              </span>
            </p>
          </p>
        </div>
      </div>
    </nav>
  );
}
