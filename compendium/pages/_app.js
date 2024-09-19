import React from 'react';
import "@/styles/globals.css";
import MobileAlert from '@/components/MobileAlert';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MobileAlert />
      <Component {...pageProps} />
    </>
  );
}