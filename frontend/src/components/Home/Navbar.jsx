import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiShoppingCart, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

const Navbar = () => {

    return (
        <div className="w-full">
            {/* Top Header */}
            <div className="border-b border-gray-600 py-2 px-4 sm:px-8 bg-[#2d2d2d]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className='flex gap-4 text-gray-300'>
                        <FaFacebook className="hover:text-white cursor-pointer transition-colors text-sm" />
                        <FaInstagram className="hover:text-white cursor-pointer transition-colors text-sm" />
                        <FaTwitter className="hover:text-white cursor-pointer transition-colors text-sm" />
                        <FaLinkedin className="hover:text-white cursor-pointer transition-colors text-sm" />
                    </div>
                    <div className='flex gap-6 text-sm text-gray-300'>
                        <button className="hover:text-white transition-colors">Contact</button>
                        <button className="hover:text-white transition-colors">FAQ</button>
                        <button className="hover:text-white transition-colors">Support</button>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="py-4 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Link to="/" className="text-2xl font-bold tracking-wider text-black">
                            SMOKEWEARS
                        </Link>
                    </div>

                    <div>
                        <SearchBar/>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 text-black">
                        <Link to="/men" className="hover:text-gray-600 transition-colors font-medium">
                            MEN
                        </Link>
                        <Link to="/women" className="hover:text-gray-600 transition-colors font-medium ">
                            WOMEN
                        </Link>
                        <Link to="/topwear" className="hover:text-gray-600 transition-colors font-medium ">
                            TOP-WEAR
                        </Link>
                        <Link to="/bottomwear" className="hover:text-gray-600 transition-colors font-medium ">
                            BOTTOM-WEAR
                        </Link>

                        <Link to="/cart">
                            <FiShoppingCart className="text-xl hover:text-gray-500 cursor-pointer transition-colors " />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
