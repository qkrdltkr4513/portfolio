import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    console;
    return <Component {...pageProps} />;
}

export default MyApp;
