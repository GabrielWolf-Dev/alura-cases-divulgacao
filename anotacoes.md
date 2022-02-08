# Anotações do curso 📝

## Algumas anotações que achei importantes de deixar aqui para relembrar, seja pelo meus próprios resumos como resumos da Alura:

### Módulo 1:
O que é Next.js?
* Next.js é um framework baseado em React que pode entregar tanto conteúdo estático quanto gerado no servidor.

A criar um projeto Next.js
* Pode-se criar um projeto Next.js adicionando os pacotes do framework manualmente num projeto Node.js.

Componente Link
* Este componente permite a navegação SPA de aplicações Next.js.

### Módulo 2:

Como buildar um projeto Next.js
* O comando next build && next export gera os arquivos que serão utilizados no ambiente de produção.

SEO no Next.js
* O Next.js entrega o conteúdo da página diretamente, enquanto no Create React App ele é gerado após o carregamento. Como resultado o SEO é melhor.

create-next-app
* Essa ferramenta realiza o setup inicial por você, facilitando o início de uma aplicação Next.js.

### Módulo 3:
Estilização no Next.js
* Existem diversas maneiras de estilizar sua aplicação Next.js e você é livre para escolher a que mais lhe agrada.

Arquitetura de aplicação
* Podemos criar novas pastas para agrupar componentes com propósitos semelhantes.

Lidar com arquivos estáticos
* Conseguimos acessar os arquivos dentro da pasta public diretamente pela URL da aplicação.

### Módulo 4:
getStaticProps
* Essa função busca os dados durante o build. Ou seja, essa função é executada apenas uma vez.

getServerSideProps
* Essa função busca os dados do lado do servidor para cada requisição.

Ao modificar o título da página
* Com o componente <Head> conseguimos editar os metadados de cada página, como, por exemplo, o título.

----------------------------------------------------------------

### getStaricProps(SSG) e getServerSideProps(SSR):
<strong>getStaticProps:</strong>
<br>
* Roda <strong>SOMENTE</strong> no cuild time;
* Gera os dados diretamente no conteúdo HTML(De maneira estática, assim o conteúdo é carregado junto com outras coisas estáticas na página), a partir do script NEXT_DATA se vermos o código fonte no browser;
* Ótimo para já colocar o conteúdo principal da página ou do app, no caso do youtube o vídeo é uma das primeiras coisas carregadas, no FAQ os textos vindos da API com as perguntas e respostas.
* Deste modo, como é estático podemos hospedar no Github Pages por conta do build gerar todo o código estático com nenhuma interação com o front, não é atoa que se caso a API cair ou atualizar, a base de dados do microsserviço vai estar no build gerado, se quiser atualizar tem que gerar outro build com "report".
    
----------------------------------------------------------------
    
<strong>getServerSideProps</strong>
<br>
* Roda a cada acesso do usuário;
* Lado "server-side", ou seja, se algum dado dentro deste código mudar, ele é atualizado além do acesso do usuário;
* Então, diferente do StaticProps, é preciso de um servidor pra gerenciar este serviço back-end do Next.js para atualizar os dados e realmentre funcionar a função.
    
----------------------------------------------------------------
    
No geral sempre opte por páginas estáticas, somente utilize dinâmicas se precisar mesmo.
Pois há vários benefícios com páginas estáticas como "cachear" as páginas por conta de todo conteúdo estar contido dentro do HTML, maior segurança pois é bem mais difícil de um cracker conseguir acessar algo, performance, SEO, etc...
<br>
[Link para saber mais(Isso está diretamente ligado com a JamStack)](https://jamstack.org/why-jamstack/)

### Módulo 5:
O que é o next.config.js
* Neste arquivo, podemos modificar algumas configurações, como, por exemplo, redirects e adição do trailing slash no final da URL automaticamente.

Como fazer o deploy do seu projeto Next.js
* A criadora do framework (Vercel) oferece uma plataforma de hosting de forma gratuita e integrada ao GitHub.

Benefícios de hospedar na Vercel
* A plataforma oferece fácil integração com plataformas de versionamento de código, assim como HTTPs e domínios customizados.

## Um pouco sobre a evolução Front-End para entender o que o Next soluciona:

O Next renderiza o conteúdo via servidor(um serviço em Node) independente de ser SSR ou SSG, mas o SSR(Server Side Rendering) renderizado no framework é totalmente diferente do que tinhamos antigamente no SSR com PHP, Java, Node, C#, etc...
<br>
O SSR com Back-end tradicional nós temos a junção de Front com Back no mesmo ecossistema e o seu conteúdo, junto com toda interação com chamadas(Js) é preparado no servidor para renderizar no cliente. Esse modelo é ruim quando temos múltiplos clientes como Mobile, Desktop, Web, etc... Por isso surge os microsserviços(API's) com Banco de dados que são retornados por um arquivo de texto(JSON) e que todo cliente pode consumir, assim surgi os modelos de SPA e SSR renderizado no lado do front com Next e outras ferramentas semelhantes.
<br>
Entretanto somente o modelo SPA, como o conteúdo HTML é renderizado via Js e o conteúdo(HTML) é preparado pelo browser quando termina de rodar o React.js/Vue.js/Angular, etc. Pode-se observar problemas de SEO por conta do browser não conseguir ler o HTML provido somente quando todo JavaScript for carregado, toda essa responsibilidade gerada no Js faz com que também fique mais pesado a aplicação para ser carregado sem estar com o cache no navegador.
<br>
Além de outros problemas de SPA, o SSR/SSG do Front com o Next, por exemplo, venho para resolver estes problemas e outros no back-end quando é renderizado o conteúdo no servidor e separa bem toda a aplicação, torna mais segura, organizada e outra série de benefícios...

<div style="width: 100%; text-align: center;">
    <img style="width: 800px;" src="https://github.com/GabrielWolf-Dev/alura-cases-divulgacao/blob/main/public/assets/notes/back-ssr.jpg?raw=true" alt="Back-End SSR" />
    <img style="width: 800px;" src="https://github.com/GabrielWolf-Dev/alura-cases-divulgacao/blob/main/public/assets/notes/spa.jpg?raw=true" alt="SPA Front" />
    <img style="width: 800px;" src="https://github.com/GabrielWolf-Dev/alura-cases-divulgacao/blob/main/public/assets/notes/next-ssr.jpg?raw=true" alt="Next SSR" />
</div>
