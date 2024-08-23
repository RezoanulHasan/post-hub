"use client";
import "./scroll.css";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const navOptions = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/support">Support</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </>
  );

  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className=" progress-bar   "
      />

      <div className=" navbar fixed  z-100 top-0 bg-opacity-30 bg-base-100  shadow-sm    mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-2xl">
            <h3 className="text-lg font-semibold mb-4">
              {" "}
              Post<span className="text-teal-600 ">Hub</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-teal-600 p-4 mx-6 ">login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
