import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { cn } from "@/lib/utils";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "#hero" },
        { label: "Skills", href: "#skills" },
        { label: "Experiences", href: "#experiences" },
        { label: "Projects", href: "#project" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="font-mono
               fixed w-[calc(100%-2rem)] sm:w-auto md:w-full z-50 top-4 left-1/2 -translate-x-1/2 max-w-5xl px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-gray-800/90 shadow-lg rounded-xl md:rounded-xl">
            <div className="flex justify-between items-center h-14 md:h-16">
                {/* Left: Logo / Brand */}
                <div className="flex-shrink-0 font-bold text-lg sm:text-xl md:text-2xl text-white">
                    <Typewriter
                        words={["Prasath"]}
                        cursor
                        cursorStyle="_"
                        typeSpeed={250}
                        deleteSpeed={200}
                        loop={true}
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-white hover:text-indigo-400 transition-colors duration-200 font-medium px-3 py-1 rounded-full"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col space-y-2 px-2 pb-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "block px-4 py-2 rounded-lg text-white hover:bg-indigo-500/20 transition-colors font-medium"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
