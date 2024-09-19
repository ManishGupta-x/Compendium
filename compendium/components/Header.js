import React, { useEffect, useState } from 'react'

const Header = ({ currentSection }) => {
    const [headerText, setHeaderText] = useState('Welcome');

    useEffect(() => {
        switch (currentSection) {
            case 'hero':
                setHeaderText('Welcome');
                break;
            case 'timeline':
                setHeaderText('Timeline');
                break;
            default:
                setHeaderText('Portfolio');
        }
    }, [currentSection]);

    return (
        <div className="fixed top-0 left-0 right-0 mx-auto z-[100] w-52 h-14 p-3 cursor-text bg-black rounded-b-md hover:bg-[#0a0a00] border border-t-0 border-yellow-500/30 transition-all duration-300 ease-in-out transform hover:scale-105 font-['Comfortaa'] shadow-md hover:shadow-lg overflow-hidden">
            <div className="relative z-10 text-[#ffd700] font-bold flex justify-center font-Rowdies uppercase text-xl">
                {headerText}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd9007c] to-transparent opacity-30 animate-shine"></div>
        </div>
    );
}

export default Header;