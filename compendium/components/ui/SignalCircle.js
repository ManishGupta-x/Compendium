import React from 'react';
import { DiNpm } from "react-icons/di";

const SignalCircle = () => {
    return (
        <div className="signal-container relative" data-aos="zoom-in" data-aos-delay="300">
            {/* Main circle */}
            <div className="main-circle"></div>
            {/* Constantly rotating circle */}
            <div className="rotating-circle"></div>
            {/* Pulsating signals */}
            <div className="pulsating-circle pulsating-circle-1"></div>
            <div className="pulsating-circle pulsating-circle-2"></div>
            <div className="pulsating-circle pulsating-circle-3"></div>
            {/* Icon in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
                <DiNpm className="hidden md:block text-yellow-200 text-9xl animate-rotate-x" />
            </div>
        </div>
    );
};

export default SignalCircle;