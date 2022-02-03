import Link from "../src/components/Link";

export default function Page404(){
    return(
        <>
            <h1>Erro 404! :(</h1>
            <h2>Está página não existe!</h2>
            <Link href="/">Voltar para home</Link>
        </>
    );
}