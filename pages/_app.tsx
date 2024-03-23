// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/ThemeContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ThemeProvider>

        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
  
export default MyApp;
