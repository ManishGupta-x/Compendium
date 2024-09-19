import React from 'react';
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopButton = ({ isAtBottom }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToPartialBottom = () => {
        const windowHeight = window.innerHeight;
        const currentPosition = window.scrollY;
        const targetPosition = currentPosition + windowHeight * 0.75;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-20 md:bottom-8 right-8 z-50">
            {isAtBottom ? (
                <FaCircleArrowUp
                    className="text-5xl text-yellow-500 cursor-pointer animate-bounce shadow-lg"
                    onClick={scrollToTop}
                />
            ) : (
                <FaCircleArrowDown
                    className="text-5xl text-yellow-500 cursor-pointer animate-bounce shadow-lg"
                    onClick={scrollToPartialBottom}
                />
            )}
        </div>
    );
};

export default ScrollToTopButton;