import GLobalStyle from "../src/components/theme/globalStyle";

export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <GLobalStyle />
            <Component {...pageProps} />
        </>
    );
}