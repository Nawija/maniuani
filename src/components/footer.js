import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
    <div className="bg-[#FBE7E6] text-black w-full z-50 mt-16">
        <footer className=" mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                <div className="col-span-full lg:col-span-2">
                    <div className=" ml-4 mb-4 lg:-mt-2">
                        <Link
                            to="/"
                            className="flex-col hover:scale-105 transition-all duration-300 flex h-auto w-32 items-center justify-center"
                            aria-label="logo"
                        >
                            <StaticImage
                                quality={100}
                                className="h-full w-full rounded-full"
                                imgClassName="rounded-full"
                                placeholder="blurred"
                                src="../images/favicon.png"
                                alt="seovileo"
                            />
                        </Link>
                    </div>

                    <p className="mb-6  sm:pr-8">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintoc
                    </p>

                    <div className="flex">
                        <span class="inline-flex">
                            <Link
                                to="https://www.facebook.com/seovileo/"
                                class="text-yellow-500"
                            >
                                <svg
                                    aria-label="facebook"
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link
                                to="https://twitter.com/seovileo"
                                class="ml-4 text-yellow-500"
                            >
                                <svg
                                    aria-label="twitter"
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link
                                to="https://www.instagram.com/seovileo/"
                                class="ml-4 text-yellow-500"
                            >
                                <svg
                                    aria-label="instagram"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    ></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link
                                to="mailto:
seovileo@email.com"
                                class="ml-4 text-yellow-500"
                            >
                                <svg
                                    aria-label="czat"
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>

                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-red-800">
                        Szybkie Linki
                    </div>
                    <div className="h-[1.3px] w-6 bg-yellow-500 my-6" />

                    <nav className="flex flex-col gap-4">

                        <div>
                            <Link
                                to="/o-nas"
                                className=" transition duration-100 hoverLink linkFooter"
                            >
                                O Nas
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="/oferta"
                                className=" transition duration-100 hoverLink linkFooter"
                            >
                                Oferta
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/galeria"
                                className=" transition duration-100 hoverLink linkFooter"
                            >
                                Galeria
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/kontakt"
                                className=" transition duration-100 hoverLink linkFooter"
                            >
                                Kontakt
                            </Link>
                        </div>
                    </nav>
                </div>

                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-red-800">
                        Pomoc
                    </div>
                    <div className="h-[1.3px] w-6 bg-yellow-500 my-6" />

                    <nav className="flex flex-col gap-4">
                        <div>
                            <Link
                                to="/kontakt"
                                className=" transition duration-100 hoverLink linkFooter"
                            >
                                Kontakt
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="/kontakt"
                                className=" transition duration-100 hoverLink linkFooter"
                            >
                                Czat
                            </Link>
                        </div>
                    </nav>
                </div>

                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-red-800">
                        FAQ
                    </div>
                    <div className="h-[1.3px] w-6 bg-yellow-500 my-6" />

                    <nav className="flex flex-col gap-4">
                        <div>
                            <Link
                                to="/budowa"
                                className=" transition duration-100 hoverLink linkFooter"
                            >
                                Polityka prywatności
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="/budowa"
                                className=" transition duration-100 hoverLink linkFooter"
                            >
                                Cookies
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="border-t border-white w-3/4 mx-auto py-8 text-center text-sm ">
                © 2023 - Design by{" "}
                <Link className="text-gray-300" to="https://seovileo.pl/">
                    @Seovileo.pl
                </Link>{" "}
                / All rights reserved.
            </div>
        </footer>
    </div>
);

export default Footer;
