import React from 'react';

console.log("Card.js is running...");

const Card = ({ children }) => {
    return (
        <div className="border rounded-lg shadow-md bg-gray-800 p-4">
            {children}
        </div>
    );
};

export default Card;