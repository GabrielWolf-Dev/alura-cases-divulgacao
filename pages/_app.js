import Head from "next/head";
import GLobalStyle from "../src/components/theme/globalStyle";

export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <GLobalStyle />
            <Component {...pageProps} />
        </>
    );
}