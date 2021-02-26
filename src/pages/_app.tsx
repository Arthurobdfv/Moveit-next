import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { Header } from "../components/Header";
import React from "react";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  console.log(process.env.SITE)
  console.log(process.env.GOOGLE_ID)
  console.log(process.env.GOOGLE_SECRET)
  console.log(process.env.VERCEL_URL)
  return (
    <div>
      <Provider options={{ site: process.env.VERCEL_URL }} session={session}>
        <Header />
        <ChallengesProvider>
          <Component {...pageProps} />
        </ChallengesProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
