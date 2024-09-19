import React from 'react';
import classNames from 'classnames';

export const Alert = ({ children, className, ...props }) => {
    return (
        <div
            className={classNames(
                "border border-gold-500 bg-black text-gold-300 p-4 rounded-md shadow-lg",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export const AlertDescription = ({ children, className, ...props }) => {
    return (
        <p
            className={classNames(
                "text-gold-100 text-sm md:text-base",
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
};
