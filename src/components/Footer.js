const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-4 px-6 border-t border-gray-800">
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} PC Builder. All rights reserved.
            </div>
        </footer>
    );
};
export default Footer;