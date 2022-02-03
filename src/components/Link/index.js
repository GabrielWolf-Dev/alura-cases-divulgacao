import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
    return(
        <NextLink href={href} passHref>
            <a {...props}>{children}</a>
        </NextLink>
    );
}

/*
        Anotações:

    ...props -- Transformar tudo em obj para a tag 'a', pois quando for passado algum "className, props de acessibilidade" já é passado com este destructing na tag.
*/