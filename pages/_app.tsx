// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/ThemeContext';
import Head from 'next/head';
import { ClerkProvider, ClerkLoaded } from "@clerk/nextjs";

// Assuming you have your Clerk frontend API loaded as an environment variable
const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi} {...pageProps}>
      <ClerkLoaded>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

export default MyApp;
