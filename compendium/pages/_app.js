import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AlertModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Modal content */}
          <div className="flex flex-col items-start p-5 border-b border-solid rounded-t border-gold-200 bg-black">
            <button
              className="absolute top-0 right-0 p-1 ml-auto text-3xl font-semibold leading-none text-gold-200 outline-none focus:outline-none"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            <div className="w-full text-gold-100">
              {children}
            </div>
          </div>
        </div>
      </div>
      {/* Background overlay */}
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>
  );
};

export default function App({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AlertModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="mb-4 text-2xl font-bold text-gold-300">Welcome!</h2>
        <p className="text-gold-100">
          For the best experience, please use a desktop or wide screen device.
        </p>
      </AlertModal>
      <Component {...pageProps} />
    </>
  );
}