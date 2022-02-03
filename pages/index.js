/* Components */
import Link from "../src/components/Link";

export default function HomePage(){
    return(
        <>
            <h1>Home page do site</h1>
            <Link href="/faq">Ir para o FAQ</Link>
        </>
    );
}

/* 
        Anotações:
        
    passHref -- aparecer o "href" na tag do navegador para compatibilidade comnavegadores + antigos(Mas isso depende da versão do Next.js)
*/