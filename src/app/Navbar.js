"use client";
import Link from "next/link";
import { MdViewHeadline } from "react-icons/md";
import React, { useState } from "react";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <div className="sticky top-0 opacity-9 bg-transparent">
        <nav className="opacity-9">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="" className="flex items-center">
              {/* <img src="" className="h-8 mr-3" alt="Flowbite Logo" /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Flowbite
              </span>
            </Link>
            <button
              className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden"
              onClick={() => {
                setMobile(!Mobile);
                console.log(Mobile);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <MdViewHeadline className="text-2xl" />
            </button>
            <div
              className={`${!Mobile ? "hidden" : "absolute"} left-0 p-2 right-0 md:flex md:w-auto top-[3rem] md:static`}
              id="navbar-default"
            >
              <ul className="bg-transparent font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 rounded  md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/About/"
                    className="block py-2 pl-3 pr-4  rounded  md:border-0  md:p-0 "
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contact/"
                    className="block py-2 pl-3 pr-4  rounded md:border-0  md:p-0  "
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
