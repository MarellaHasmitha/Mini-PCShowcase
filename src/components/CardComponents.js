import React from 'react';

console.log("CardComponents.js is running...");

export const CardHeader = ({ children }) => (
    <div className="p-4 border-b border-gray-700">{children}</div>
);

export const CardTitle = ({ children }) => (
    <h3 className="text-xl font-bold text-white">{children}</h3>
);

export const CardDescription = ({ children }) => (
    <p className="text-gray-400">{children}</p>
);

export const CardContent = ({ children }) => (
    <div className="p-4">{children}</div>
);