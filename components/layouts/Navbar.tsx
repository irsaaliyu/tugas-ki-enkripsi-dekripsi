"use client";

import Image from "next/image";
import Button from "../core/Button";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed left-0 top-0 w-full h-[75px] flex items-center bg-white z-50">
      {/* Desktop Nav */}
      <div className="hidden container lg:flex justify-between items-center">
        <div className="relative w-[75px] h-[60px]">
          <Link href="/">
            <Image
              src="/image/MainIcon.png"
              alt="Keamanan Informasi"
              fill={true}
            />
          </Link>
        </div>
        <div className="flex justify-between items-center w-1/2 text-lg">
          <Link href="/">Home</Link>

          <div className="relative flex justify-center items-center gap-2 group h-[75px]">
            <Link href="/#enkripsi">
              <p>Enkripsi</p>
            </Link>
          </div>

          <div className="relative flex justify-center items-center gap-2 group h-[75px]">
            <Link href="/#about">
              <p>About</p>
            </Link>
            
          </div>

        </div>
        
      </div>
      {/* End Desktop Nav */}

      {/* Hamburger On Mobile  */}
      <div className="fixed flex justify-between items-center w-full h-[75px] lg:hidden border-b border-theme px-[25px] bg-white z-50">
        <div className="relative w-[75px] h-[60px]">
          <Link href="/">
            <Image src="/image/MainIcon.png" alt="logo" fill={true} />
          </Link>
        </div>
        {nav ? (
          <AiOutlineClose
            size={30}
            onClick={() => setNav(!nav)}
            className="text-theme"
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={() => setNav(!nav)}
            className="text-theme"
          />
        )}
      </div>
      {/* End Hamburger On Mobile  */}

      {/* Desktop Mobile */}
      <div
        className={
          nav
            ? "fixed lg:hidden top-[75px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
            : "fixed lg:hidden top-[-200%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
        }
      >
        <div className="w-full h-full px-[25px]">
          <ul
            className="space-y-5 text-lg my-6 px-1"
            onClick={() => setNav(!nav)}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/InformasiKesehatan">Enkripsi</Link>
            </li>
            <li>
              <Link href="/KalkulatorKesehatan">About US</Link>
            </li>
          </ul>
          <div className="w-full h-auto flex flex-col gap-4">

          </div>
        </div>
      </div>
      {/* End Desktop Mobile */}
    </nav>
  );
};

export default Navbar;
