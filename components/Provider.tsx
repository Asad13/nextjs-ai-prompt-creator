'use client';

import { SessionProvider } from 'next-auth/react';
import type { SessionProviderProps } from 'next-auth/react';

const Provider = ({ children, session }: Readonly<SessionProviderProps>) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
