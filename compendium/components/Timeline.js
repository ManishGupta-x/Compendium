import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assuming you've saved the content array in a separate file
import { timelineContent } from '@/lib/content';

export default function TimelineComponent() {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });

        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));
    return (
        <div className="min-h-screen py-12 sm:py-24 pb-28 px-4 sm:px-6 lg:px-8" >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 sm:mb-16 text-center font-Cinzel" data-aos="fade-down">
                    My Programming Journey
                </h2>

                <div className="relative pt-8">
                    {/* Timeline */}
                    <div className="hidden sm:block absolute left-1/2 top-32 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-yellow-400 via-yellow-200 to-white"></div>

                    {/* Year markers */}
                    <div className="flex justify-between mb-8 sm:mb-16 relative z-10 overflow-x-auto sm:overflow-x-visible">
                        {['2018', '2019', '2020', '2021', '2022', '2023', '2024'].map((year, index) => (
                            <div
                                key={year}
                                className="text-xs sm:text-sm md:text-base font-semibold text-yellow-200 font-anta cursor-pointer hover:text-yellow-500 whitespace-nowrap px-2 sm:px-0"
                                style={{ minWidth: '60px', textAlign: 'center' }}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                onClick={() => {
                                    const el = document.getElementById(year) || document.getElementById('2022-23');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {year}
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <ul className="max-w-3xl mx-auto w-full space-y-8 sm:space-y-16">
                        {timelineContent.map((card, index) => (
                            <motion.li
                                id={card.header}
                                layoutId={`card-${card.title}-${id}`}
                                key={`card-${card.title}-${id}`}
                                className={`bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl overflow-hidden shadow-lg hover:bg-slate-950 cursor-pointer transition-all duration-300 ease-in-out ${index % 2 === 0 ? 'sm:mr-[5%] md:mr-[50%]' : 'sm:ml-[5%] md:ml-[50%]'}`}
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            >
                                <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                    <motion.div layoutId={`image-${card.title}-${id}`} className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                                        <div className="absolute inset-0 bg-black rounded-full"></div>
                                        <Image
                                            width={128}
                                            height={128}
                                            src={card.icon}
                                            alt={card.title}
                                            className="absolute inset-0 w-full h-full object-contain p-2 rounded-full"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-100/20 to-white/10 animate-pulse"></div>
                                    </motion.div>
                                    <div className="flex-grow text-center sm:text-left">
                                        <motion.h3
                                            layoutId={`title-${card.title}-${id}`}
                                            className="font-bold text-lg sm:text-xl md:text-2xl text-yellow-50 mb-2 font-Signika"
                                        >
                                            {card.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${card.header}-${id}`}
                                            className="text-white font-Gothic mb-4 text-sm sm:text-base"
                                        >
                                            {card.header}
                                        </motion.p>
                                        <motion.button
                                            layoutId={`button-${card.title}-${id}`}
                                            onClick={() => setActive(card)}
                                            className="inline-block px-4 py-2 text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md hover:from-yellow-300 hover:to-yellow-100 transition-all duration-300 ease-in-out transform hover:scale-105 font-Comfortaa shadow-md hover:shadow-lg text-nowrap"
                                        >
                                            Reveal the Journey
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>

            <AnimatePresence>
                {active && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm h-full w-full z-10"
                        />
                        <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                            <motion.button
                                key={`button-${active.title}-${id}`}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                className="flex absolute top-4 right-4 sm:right-28 items-center justify-center bg-yellow-400/10 backdrop-blur-md rounded-full h-10 w-10"
                                onClick={() => setActive(null)}
                            >
                                <CloseIcon />
                            </motion.button>
                            <motion.div
                                layoutId={`card-${active.title}-${id}`}
                                className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[600px] h-[90%] md:h-fit md:max-h-[90%] flex flex-col bg-black/95 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/30"
                            >
                                <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-48 sm:h-64 md:h-80">
                                    <Image
                                        priority
                                        layout="fill"
                                        src={active.icon}
                                        alt={active.title}
                                        className="object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
                                </motion.div>

                                <div className="p-4 sm:p-6 md:p-8">
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="font-bold text-xl sm:text-2xl md:text-3xl text-yellow-300 mb-2 font-Signika"
                                    >
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.header}-${id}`}
                                        className="text-white mb-4 font-Gothic text-sm sm:text-base"
                                    >
                                        {active.header}
                                    </motion.p>
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    className="text-gray-300 text-xs sm:text-sm md:text-base max-h-40 sm:max-h-60 md:max-h-80 overflow-auto pr-4 font-Namdhinggo"
                                    style={{
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: '#FCD34D #1F2937'
                                    }}
                                >
                                    {active.para}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    </>
                )}
        </AnimatePresence>
        </div >
    );
}

const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-yellow-300"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

