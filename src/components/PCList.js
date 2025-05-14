import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { handleNavLink } from '../utils/routeUtils';

const Button = ({ variant, className, onClick, children }) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
);
const Card = ({ className, children }) => <div className={className}>{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const CardDescription = ({ children }) => <p>{children}</p>;
const CardHeader = ({ children }) => <div>{children}</div>;
const CardTitle = ({ className, children }) => <h1 className={className}>{children}</h1>;
const Badge = ({ variant, className, children }) => <span className={className}>{children}</span>;

// Animation Variants
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const PCList = ({ pcs, onAddToWishlist, wishlist }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
                {pcs.map((pc) => {
                    const isInWishlist = wishlist.some((item) => item.id === pc.id);
                    return (
                        <motion.div
                            key={pc.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            layout
                        >
                            <Card
                                className="bg-gray-800 hover:bg-gray-700 transition-colors border-gray-700
                                            shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                            >
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-white">{pc.name}</CardTitle>
                                    <CardDescription className="text-gray-400">{pc.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="relative">
                                        <img
                                            src={pc.image}
                                            alt={pc.name}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <Badge
                                            variant="secondary"
                                            className="absolute top-2 left-2 bg-blue-500/90 text-white border-none"
                                        >
                                            {pc.category}
                                        </Badge>
                                    </div>
                                    <p className="text-lg font-bold text-white mb-4">Price: ${pc.price}</p>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            className="w-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 border-blue-500/50"
                                            onClick={() => handleNavLink(`/pc/${pc.id}`)}
                                        >
                                            View Details
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className={`w-full ${isInWishlist
                                                ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300 border-red-500/50"
                                                : "bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
                                                }`}
                                            onClick={() => onAddToWishlist(pc)}
                                        >
                                            <Heart
                                                className={`w-5 h-5 mr-2 ${isInWishlist ? "text-red-400 fill-red-400" : "text-white"}`}
                                            />
                                            {isInWishlist ? 'Remove' : 'Add'}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default PCList;