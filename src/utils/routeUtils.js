import { renderApp } from '../App'; // Import renderApp explicitly

// List of initial PCs
export const initialPCs = [
    {
        id: '1',
        name: 'Nebula Fusion',
        description: 'A high-performance gaming PC with stunning RGB lighting.',
        price: 2499,
        category: 'Gaming',
        image: 'https://placehold.co/400x300/EEE/31343C?text=Nebula+Fusion',
        parts: [
            { name: 'CPU', model: 'Intel Core i9-13900K' },
            { name: 'GPU', model: 'NVIDIA GeForce RTX 4090' },
            { name: 'RAM', model: '32GB DDR5' },
            { name: 'Storage', model: '2TB NVMe SSD' },
        ],
    },
    {
        id: '2',
        name: 'Silent Sentinel',
        description: 'A quiet and powerful workstation for content creation.',
        price: 2199,
        category: 'Workstation',
        image: 'https://placehold.co/400x300/EEE/31343C?text=Silent+Sentinel',
        parts: [
            { name: 'CPU', model: 'AMD Ryzen 9 7950X' },
            { name: 'GPU', model: 'NVIDIA GeForce RTX 4070' },
            { name: 'RAM', model: '64GB DDR5' },
            { name: 'Storage', model: '1TB NVMe SSD' },
        ],
    },
    {
        id: '3',
        name: 'Compact Comet',
        description: 'A small form factor PC perfect for tight spaces.',
        price: 1799,
        category: 'Compact',
        image: 'https://placehold.co/400x300/EEE/31343C?text=Compact+Comet&font=Montserrat',
        parts: [
            { name: 'CPU', model: 'Intel Core i7-13700K' },
            { name: 'GPU', model: 'NVIDIA GeForce RTX 4060' },
            { name: 'RAM', model: '16GB DDR5' },
            { name: 'Storage', model: '1TB NVMe SSD' },
        ],
    },
    {
        id: '4',
        name: 'Aurora Dream',
        description: 'A beautiful PC build with addressable RGB and a white theme.',
        price: 2799,
        category: 'Gaming',
        image: 'https://placehold.co/400x300/EEE/31343C?text=Aurora+Dream&font=Montserrat',
        parts: [
            { name: 'CPU', model: 'AMD Ryzen 9 7900X' },
            { name: 'GPU', model: 'AMD Radeon RX 7900 XTX' },
            { name: 'RAM', model: '32GB DDR5' },
            { name: 'Storage', model: '2TB NVMe SSD' },
        ],
    },
];

// Variables to track the current route and selected PC
export let route = '/';
export let selectedPC = null;

// Function to handle navigation and update the route
export const handleNavLink = (newRoute) => {
    route = newRoute; // Update the current route

    // If navigating to a PC details page, find the selected PC
    if (newRoute.startsWith('/pc/')) {
        const id = newRoute.split('/pc/')[1];
        selectedPC = initialPCs.find((pc) => pc.id === id) || null;
    } else {
        selectedPC = null; // Reset selected PC for non-PC routes
    }

    renderApp(); // Call the renderApp function to re-render the app
    window.history.pushState({}, '', newRoute); // Update the browser's URL
};