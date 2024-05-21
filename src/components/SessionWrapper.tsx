'use client'; 

import { SessionProvider } from 'next-auth/react';

/***
 * This component is to render the context provider 
 * in layout
 ** @{children} to show the data
 ** @{session} to keep the session the data
 ***/

const SessionWrapper = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionWrapper;
