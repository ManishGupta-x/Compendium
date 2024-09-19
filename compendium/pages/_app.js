import React from 'react';
import { CookiesProvider } from 'react-cookie';
import "@/styles/globals.css";
import MobileAlert from '@/components/ui/MobileAlert';

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <MobileAlert />
      <Component {...pageProps} />
    </CookiesProvider>
  );
}