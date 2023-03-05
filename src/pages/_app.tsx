import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import "@/styles/globals.scss";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <SessionProvider
    session={pageProps.session}
    refetchInterval={5 * 60}
    refetchOnWindowFocus={true}
  >
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  </SessionProvider>
);

export default App;
