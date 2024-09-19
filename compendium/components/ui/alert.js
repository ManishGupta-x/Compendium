import React from 'react';

const Alert = ({ children, className, ...props }) => {
    const baseClasses = "border border-gold-500 bg-black text-gold-300 p-4 rounded-md shadow-lg";
    const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

    return (
        <div className={combinedClasses} {...props}>
            {children}
        </div>
    );
};

const AlertDescription = ({ children, className, ...props }) => {
    const baseClasses = "text-gold-100 text-sm md:text-base";
    const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

    return (
        <p className={combinedClasses} {...props}>
            {children}
        </p>
    );
};

export { Alert, AlertDescription };