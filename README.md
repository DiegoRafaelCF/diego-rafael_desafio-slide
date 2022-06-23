# Desafio - Desenvolvimento de Layout (Slideworks)

## Proposta do desafio

Os objetivos do desafio consistiam no desenvolvimento de uma página web e o consumo de uma API de livros. O designe da página já estava estabelecido no figma e era constituído basicamente de:

-Um Header contendo um logotipo e uma barra de navegação.
-Uma Sessão contendo um conjunto de cards para exibir informações dos livros da API. 
-Um Footer contendo um logotipo e links para as redes sociais e para as documentações.

## Informações

-Linguagem utilizada: JavaScript

-Biblioteca utilizada: ReacJS

-Pacotes (externos) utilizados: react-router-dom | axios

-Editor utilizado: VSCode

-Aprendizado: gostei muito de fazer esse pequeno desafio pois pude colocar em prática muitos conhecimentos dentro de 'um só código'. Aqui pude treinar bastante as minhas habilidades em desenvolvimento front-end, principalmente com a biblioteca do ReactJS e seus pacotes. Junto a isso pude também rever e praticar alguns conceitos de consumo de API e responsividade.

-Dificuldades: tive pequenas dificuldades durante todo o projeto, mas todas foram super importantes para o meu processo de aprendizado. A única dificuldade que eu não consegui resolver neste desafio foi um menu mais responsivo e dinâmico para telas mobile. 

## Como o desafio foi desenvolvido

-Depois que o projeto foi criado com o 'create-react-app', foi feito uma limpeza de arquivos desnecessários para o desafio. E utilizando o canvas foi criado um designe para servir como favicon do site.

-A estrutura do arquivo foi toda pensada utilizando componentes, por causa disso foi criado uma página 'components' dentro de 'src' para guardar todos os componentes desenvolvidos e utilizados no projeto.

-Os componentes desenvolvidos foram: Header, Home, Card, Footer e Error404. Todos os componentes estão dentro de sua respectiva pasta, e foram nomeados de 'index.js' para facilitar as importações. 

-O componente Card ele recebe uma função externa 'formatDate' que serve para formatar a data recebida pela API. Outro detalhe é que ele recebe as informações do livro através de 'props' e por meio de 'destructuring' elas são organizadas dentro do Card.

-Error404 foi um componente desenvolvido para servir como destino para todos os links da página, exceto os links de rede social, pois esses apontam para as suas respectivas páginas na web.

-Entrando na parte de roteamento foi utilizado um pacote chamado 'react-router-dom. Nos componentes Header e Footer foi importado o 'Link' que tem a mesma função da tag 'a' no html padrão, ou seja, envelopar uma parte do código e apontar para um destilo.

-No componente Home foi importado os hooks 'useEffect', 'useState' e a api. Esses hooks estão servindo para auxiliar na manipulação da api e de suas informações. O 'useEffect' está rodando uma função que através de um query params (?_quantity=16) faz um get na api para receber suas informações. Essas informações são tratadas e passadas para o 'useState'. Por meio de um map é percorrido todo o array de objetos dentro do 'useState' e assim todos os cards da página são alimentados com os conteúdos dos livros.

-Também foi criada uma página dentro de 'src' para guardar a API e a função que formata a data.

-Dentro de App.js é montada a estrutura principal do site (Header => Home => Footer) e por meio de componentes do 'react-router-dom' é feita uma troca de rota do componente Home para o componente Error404, caso o usuário clique em algum link.

-Por fim, mas não menos importante, foi utilizado Media Queries para fazer uma leve responsividade na plataforma e o consumo da API de livros foi feita através do 'axios'.