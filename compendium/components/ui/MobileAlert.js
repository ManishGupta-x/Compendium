import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useCookies } from 'react-cookie';

const MobileAlert = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [cookies, setCookie] = useCookies(['hasSeenMobileAlert']);

    useEffect(() => {
        const checkAlertStatus = () => {
            if (!cookies.hasSeenMobileAlert && window.innerWidth < 1024) {
                setShowAlert(true);
                setCookie('hasSeenMobileAlert', 'true', { path: '/', maxAge: 30 * 24 * 60 * 60 }); // 30 days expiration
            }
        };

        checkAlertStatus();
    }, [cookies.hasSeenMobileAlert, setCookie]);

    if (!showAlert) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <Alert className="w-11/12 max-w-sm border-2 border-amber-500 bg-black text-amber-300">
                <AlertDescription className="mb-4 text-amber-500">
                    For the best experience, please use a desktop or wide screen device.
                </AlertDescription>
                <button
                    onClick={() => setShowAlert(false)}
                    className="bg-black text-amber-500 px-4 py-2 rounded-md hover:bg-amber-600 transition-colors font-semibold"
                >
                    OK
                </button>
            </Alert>
        </div>
    );
};

export default MobileAlert;