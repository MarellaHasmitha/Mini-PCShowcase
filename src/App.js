import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WishlistPage from './pages/WishlistPage';
import PCDetails from './pages/PCDetails';
import { initialPCs } from './utils/routeUtils';

const App = () => {
    const [wishlist, setWishlist] = useState([]);

    // Load wishlist from localStorage on initial render
    useEffect(() => {
        const storedWishlist = localStorage.getItem('pcBuilderWishlist');
        if (storedWishlist) {
            try {
                setWishlist(JSON.parse(storedWishlist));
            } catch (error) {
                console.error("Failed to parse wishlist from localStorage", error);
                localStorage.removeItem('pcBuilderWishlist');
            }
        }
    }, []);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('pcBuilderWishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    // Function to handle adding/removing items from the wishlist
    const handleAddToWishlist = (pc) => {
        if (!wishlist.find(item => item.id === pc.id)) {
            setWishlist([...wishlist, pc]);
        } else {
            setWishlist(wishlist.filter(item => item.id !== pc.id));
        }
    };

    // Function to remove an item from the wishlist
    const handleRemoveFromWishlist = (pcId) => {
        setWishlist(wishlist.filter(item => item.id !== pcId));
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            pcs={initialPCs}
                            onAddToWishlist={handleAddToWishlist}
                            wishlist={wishlist}
                        />
                    }
                />
                <Route
                    path="/wishlist"
                    element={
                        <WishlistPage
                            wishlist={wishlist}
                            onRemoveFromWishlist={handleRemoveFromWishlist}
                        />
                    }
                />
                 <Route
                    path="/pc/:id"
                    element={<PCDetails />}
                />
                <Route
                    path="/pc/:id"
                    element={
                        <PCDetails
                            onAddToWishlist={handleAddToWishlist}
                            wishlistCount={wishlist.length}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

const renderApp = () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
    }
};

export { renderApp };
export default App;