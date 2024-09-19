import React from 'react';
import { motion } from 'framer-motion';
import Name from '@/components/ptf/Name';
import SignalCircle from '@/components/ui/SignalCircle';

const ProfileInfo = () => (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center md:block">
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
            <img
                src="https://imgur.com/9pmRNKL.png"
                alt="background"
                className="w-16 h-16 md:w-24 md:h-24 animate-pulse"
            />
        </div>
        <motion.div
            className='absolute bottom-52  md:bottom-10 md:left-10 md:transform-none'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <div className='flex gap-2 md:gap-3 items-center'>
                <img
                    src="https://res.cloudinary.com/dlvgklxdz/image/upload/v1726677705/WhatsApp_Image_2024-09-18_at_22.06.36_0396e672_xkzutv.jpg"
                    alt="profile"
                    className="w-10 h-10 md:w-12 md:h-12"
                />
                <div className="p-2 md:p-3 cursor-text bg-black rounded-md hover:bg-[#0a0a00] border border-yellow-500/30 transition-all duration-300 ease-in-out transform hover:scale-105 font-['Comfortaa'] shadow-md hover:shadow-lg relative overflow-hidden">
                    <div className="relative z-10 text-[#ffd700] font-bold text-sm md:text-base">
                        Full Stack Developer
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd9007c] to-transparent opacity-30 animate-shine"></div>
                </div>
                <img
                    src="https://imgur.com/bntj1WU.png"
                    alt="background"
                    className="w-8 h-8 md:w-10 md:h-10"
                />
            </div>
        </motion.div>
        <div className='absolute top-[27%] md:top-60 md:left-16 ' data-aos="fade-up" data-aos-delay="500">
            <Name />
        </div>
        <div className="hidden md:block absolute  md:top-24 md:right-[10%]" data-aos="fade-in" data-aos-delay="700">
            <SignalCircle />
        </div>
    </div>
);

export default ProfileInfo;