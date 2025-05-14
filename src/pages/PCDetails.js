import React from 'react';
import { useParams } from 'react-router-dom';
import { initialPCs } from '../utils/routeUtils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PCDetails = ({ wishlistCount }) => {
    const { id } = useParams(); // `id` will be a string
    const pc = initialPCs.find((item) => item.id === id); // Compare as strings

    if (!pc) {
        return (
            <div className="bg-gray-900 min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-400">PC not found.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Navbar wishlistCount={wishlistCount} /> {/* Pass wishlistCount to Navbar */}
            <main className="pc-details container mx-auto px-4 py-8">
                <img
                    src={pc.image}
                    alt={pc.name}
                    className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h1 className="text-4xl font-bold text-white mb-4">{pc.name}</h1>
                <p className="text-gray-400 mb-4">{pc.description}</p>
                <p className="text-lg font-bold text-green-400 mb-4">Price: ${pc.price}</p>
                <h2 className="text-2xl font-bold text-white mb-4">Parts:</h2>
                <ul className="text-gray-400">
                    {pc.parts.map((part, index) => (
                        <li key={index}>
                            {part.name}: {part.model}
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default PCDetails;