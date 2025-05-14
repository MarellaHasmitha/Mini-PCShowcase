import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WishlistPage = ({ wishlist, onRemoveFromWishlist }) => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Navbar wishlistCount={wishlist.length} />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-5xl font-extrabold text-white text-center mb-12">
                    Your Wishlist
                </h1>
                {wishlist.length === 0 ? (
                    <p className="text-lg text-gray-400 text-center">
                        Your wishlist is empty. Start adding your favorite PCs!
                    </p>
                ) : (
                    <div className="grid-two-columns">
                        {wishlist.map((pc) => (
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
                                <button
                                    className="wishlist-btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                                    onClick={() => onRemoveFromWishlist(pc.id)}
                                >
                                    Remove from Wishlist
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default WishlistPage;