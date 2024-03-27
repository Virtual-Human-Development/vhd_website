// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/ThemeContext';
import Head from 'next/head';
import { ClerkProvider } from "@clerk/nextjs";


function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ClerkProvider {...pageProps}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      </ClerkProvider>
    );
  }
  
export default MyApp;
