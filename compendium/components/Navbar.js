import React, { useState, useEffect } from 'react';
import { FaCode, FaGithub, FaFileAlt, FaEnvelope, FaLinkedin, FaProjectDiagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (activeLink) {
            const timer = setTimeout(() => {
                setActiveLink('');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [activeLink]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const navLinks = [
        { href: 'https://github.com/ManishGupta-x', label: 'GitHub', icon: FaGithub },
        { href: 'https://drive.google.com/file/d/1CKW9Xv75D1OJqtqYtZCzSdCx79kpuYoO/view?usp=sharing', label: 'Resume', icon: FaFileAlt },
        { href: '/projects', label: 'Projects', icon: FaProjectDiagram },
        { href: '#contact', label: 'Contact', icon: FaEnvelope },
        { href: 'https://linkedin.com/in/manish-gupta-8861ba224', label: 'LinkedIn', icon: FaLinkedin },
    ];

    return (
        <nav className={`fixed ${isMobile ? 'bottom-4 left-1/2 transform -translate-x-1/2' : 'top-4 right-4'} z-50 p-4 shadow-[0_8px_32px_0_rgba(216,215,141,0.1)] backdrop-blur-[8px] rounded-2xl border border-[rgba(255,255,255,0.18)] font-Signika pulse-bg`}>
            <div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} items-center ${isMobile ? 'space-x-4' : 'space-y-6'}`}>
                <button onClick={scrollToTop} className="text-2xl font-bold text-white hover:text-amber-400 transition-colors duration-300">
                    <FaCode className="transform hover:rotate-180 transition-transform duration-500" />
                </button>
                <ul className={`flex ${isMobile ? 'flex-row space-x-4' : 'flex-col space-y-4'}`}>
                    {navLinks.map((link, index) => (
                        <li key={link.href} className="relative group">
                            <a
                                href={link.href}
                                target={link.href.startsWith('http') ? "_blank" : "_self"}
                                rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
                                className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ${activeLink === link.href
                                    ? 'bg-amber-500 text-black'
                                    : 'bg-[rgba(255,255,255,0.1)] text-white hover:bg-amber-400 hover:text-black'
                                    } transition-all duration-300 group`}
                                onClick={() => setActiveLink(link.href)}
                            >
                                <link.icon className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            {!isMobile && (
                                <span className="absolute right-full mr-2 py-1 px-2 bg-amber-500 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {link.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;