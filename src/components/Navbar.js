import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { handleNavLink } from '../utils/routeUtils';

const Navbar = ({ wishlistCount }) => {
    return (
        <nav className="bg-gray-900 text-white py-4 px-6 border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">PC Builder</h1>

                {/* Navigation Links */}
                <ul className="flex items-center gap-6 list-none"> {/* Added list-none to remove dots */}
                    {/* Home Link */}
                    <li>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavLink('/');
                            }}
                            style={{ paddingRight: '20px' }}
                            className="hover:text-gray-300 transition-colors"
                        >
                            Home
                        </a>
                    </li>

                    {/* Wishlist Link */}
                    <li>
                        <a
                            href="/wishlist"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavLink('/wishlist');
                            }}
                            className="hover:text-gray-300 transition-colors flex items-center gap-1"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Wishlist ({wishlistCount})
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;