import React from "react";
import Footer from "../src/components/generic/Footer";

/* Components */
import Link from "../src/components/Link";

export default function FaqPage(){
    return(
        <React.Fragment>
            <h1>Página do FAQ</h1>
            <Link href="/">Voltar para home page</Link>

            <Footer />
        </React.Fragment>
    );
}