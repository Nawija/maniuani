import React, { useState, useEffect } from "react";

import { BsFillCalendarHeartFill } from "react-icons/bs";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);
    const closeMenu = () => setMenu(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <header className="sticky w-full top-0 z-[99] bg-white ">
            <nav className="relative flex items-center justify-center ">
                <ul className="flex items-center justify-center space-x-12 font-semibold text-red-800">
                    <li className="list-none">
                        <Link
                            to="/"
                            className={`py-2 px-2 border-transparent border-b-2 hover:border-yellow-400 transition-colors duration-300 rounded hover:text-yellow-600 ${
                                navbar ? "text-sm" : "text-base"
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/"
                            className={`py-2 px-2 border-transparent border-b-2 hover:border-yellow-400 transition-colors duration-300 rounded hover:text-yellow-600 ${
                                navbar ? "text-sm" : "text-base"
                            }`}
                        >
                            Galeria
                        </Link>
                    </li>
                    <Link
                        to="/"
                        className="flex flex-col items-center justify-center"
                    >
                        <StaticImage
                            quality={100}
                            className={`mr-1 rounded-full transition-[width] ${
                                navbar ? "w-16" : "w-24"
                            }`}
                            src="../images/favicon.png"
                        />
                    </Link>
                    <li className="list-none">
                        <Link
                            to="/"
                            className={`py-2 px-2 border-transparent border-b-2 hover:border-yellow-400 transition-colors duration-300 rounded hover:text-yellow-600 ${
                                navbar ? "text-sm" : "text-base"
                            }`}
                        >
                            Cennik
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/"
                            className={`py-2 px-2 border-transparent border-b-2 hover:border-yellow-400 transition-colors duration-300 rounded hover:text-yellow-600 ${
                                navbar ? "text-sm" : "text-base"
                            }`}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>


            </nav>
            <button
                aria-label="Menu"
                onClick={handleMenu}
                className="lg:hidden p-2.5 transition-colors z-50"
            >
                <div
                    className={`w-5 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                        showMenu ? "translate-y-2 rotate-45" : ""
                    }`}
                />
                <div
                    className={`w-3 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                        showMenu ? "opacity-0" : ""
                    }`}
                />
                <div
                    className={`w-5 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                        showMenu ? "-translate-y-2 -rotate-45" : ""
                    }`}
                />
            </button>
        </header>
    );
};

export default Header;
