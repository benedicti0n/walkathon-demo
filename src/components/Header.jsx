import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import "./style.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-5'>
                            <a href="#">
                                <img className="w-16 h-16" src={isScrolled ? "/iemlogo.png" : "/iemwhite.png"} alt="iem logo" />
                            </a>
                            <a href="#">
                                <img className="w-16 h-16" src={isScrolled ? "/uemlogo.png" : "/uemwhite.png"} alt="iem logo" />
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                {!isOpen ? (
                                    <Menu className={isScrolled ? 'text-black' : 'text-[#82b440]'} />
                                ) : (
                                    <X className={isScrolled ? 'text-black' : 'text-[#82b440]'} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={`${isOpen ? 'block' : 'hidden'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 fontstyle">
                            <a href="#" className={`px-3 py-2 mx-3 mt-2 ${isScrolled ? 'text-black' : 'text-black'} hover:text-[#82b440] font-semibold`}>Home</a>
                            <a href="#" className={`px-3 py-2 mx-3 mt-2 ${isScrolled ? 'text-black' : 'text-black'} hover:text-[#82b440] font-semibold`}>About</a>
                            <a href="#" className={`px-3 py-2 mx-3 mt-2 ${isScrolled ? 'text-black' : 'text-black'} hover:text-[#82b440] font-semibold`}>Gallery</a>
                            <a href="#" className={`px-3 py-2 mx-3 mt-2 ${isScrolled ? 'text-black' : 'text-black'} hover:text-[#82b440] font-semibold`}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
