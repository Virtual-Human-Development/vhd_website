import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ClerkProvider, ClerkLoaded, useUser } from "@clerk/nextjs";
import { ThemeProvider } from '../context/ThemeContext';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

interface ExtendedUserResource {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  profile?: {
    isComplete?: boolean;
  };
}

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi} {...pageProps}>
      <ClerkLoaded>
        <MyComponent Component={Component} pageProps={pageProps} router={router} />
      </ClerkLoaded>
    </ClerkProvider>
  );
}

function MyComponent({ Component, pageProps, router }: AppProps) {
  const { isSignedIn, user } = useUser() as { isSignedIn: boolean, user: ExtendedUserResource | null };

  useEffect(() => {
    if (isSignedIn && !user?.profile?.isComplete) {
      router.push('/member_area');
    }
  }, [isSignedIn, user?.profile?.isComplete, router]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
