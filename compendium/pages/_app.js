import { useState, useEffect } from 'react';
import "@/styles/globals.css";
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function App({ Component, pageProps }) {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowWarning(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {showWarning && (
        <Alert className="mb-4">
          <AlertDescription>
            For the best experience, please use a desktop or wide screen device.
          </AlertDescription>
        </Alert>
      )}
      <Component {...pageProps} />
    </>
  );
}