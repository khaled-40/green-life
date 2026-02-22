import React from "react";
import { Link } from "react-router";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Green Life
                        </h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Bringing nature closer to your home with premium indoor plants
                            and expert care guidance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    className="hover:text-green-400 transition duration-300"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-green-400 transition duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-green-400 transition duration-300"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Follow Us
                        </h3>

                        <div className="flex space-x-4">

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center 
                           rounded-full bg-gray-800 
                           hover:bg-green-600 
                           transition duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center 
                           rounded-full bg-gray-800 
                           hover:bg-green-600 
                           transition duration-300"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center 
                           rounded-full bg-gray-800 
                           hover:bg-green-600 
                           transition duration-300"
                            >
                                <FaPinterestP />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    © 2025 Green Life. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
