import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = ({ pcs, onAddToWishlist, wishlist }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Navbar wishlistCount={wishlist.length} />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-5xl font-extrabold text-white text-center mb-12">
                    Discover Your Dream PC
                </h1>
                <div className="grid-two-columns">
                    {pcs.map((pc) => (
                        <div
                            key={pc.id}
                            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={pc.image}
                                alt={pc.name}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-2xl font-bold text-white mb-2">{pc.name}</h2>
                            <p className="text-gray-400 mb-4">{pc.description}</p>
                            <p className="text-lg font-bold text-green-400 mb-4">Price: ${pc.price}</p>
                            <div className="button-container flex justify-between items-center gap-4">
                                <button
                                    className="view-details-btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                                    onClick={() => navigate(`/pc/${pc.id}`)}
                                >
                                    View Details
                                </button>
                                <button
                                    className={`wishlist-btn px-4 py-2 rounded-md ${
                                        wishlist.some((item) => item.id === pc.id)
                                            ? 'bg-red-500 text-white hover:bg-red-600'
                                            : 'bg-green-500 text-white hover:bg-green-600'
                                    }`}
                                    onClick={() => onAddToWishlist(pc)}
                                >
                                    {wishlist.some((item) => item.id === pc.id)
                                        ? 'Remove from Wishlist'
                                        : 'Add to Wishlist'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;