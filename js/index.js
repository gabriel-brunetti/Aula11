// Alterando o background-color da nav
let navegacao = document.querySelector("nav");
navegacao.style.backgroundColor = 'blue';

// Alterando a cor padrão da fonte do body
// let corpo = document.body;
let corpo = document.querySelector('body');
corpo.style.color = '#999999';

// Aumentar o tamanho da fonte do header e corrigir altura da linha
let cabecalho = document.querySelector('header');
cabecalho.style.fontSize = '6rem';
cabecalho.style.lineHeight = '6rem';

// Alterando a cor dos links do menu
let menu = document.getElementById('menu');
let links = menu.querySelectorAll('a'); 
for (let i=0;i<links.length;i++){

    let linkDaVez = links[i];
    linkDaVez.style.color = "white";

    // sem usar a variável link da vez;
    // links[i].style.color = "white"
}

// Altere a cor do background da section de classe calls
let secao = document.querySelector('.calls');
secao.style.backgroundColor = '#ffff00';

// Altere a cor dos ícones do bloco de chamada para roxo claro.
let icones = secao.querySelectorAll('.material-icons');
for (let i = 0; i < icones.length; i++) {
    icones[i].style.color = "red";
}

// Adicione um item 'Contato' ao menu com href='#'

let novoItem = document.createElement('li'); // criando o novo item
let novoLink = document.createElement('a');
novoLink.setAttribute('href','#'); // <-- Adiciona o atributo href (que é para onde o link direciona)
novoLink.textContent = "Contato";
novoItem.appendChild(novoLink); // <-- Adicionando o link no li.
menu.appendChild(novoItem); // Adicionando o link 

// Remova o primeiro elemento section calls
let primeiroArticle = secao.querySelector('article');
secao.removeChild(primeiroArticle)


// remova o segundo elemento secion calls
let artigos = secao.querySelectorAll('article')
secao.removeChild (artigos[1]);


// Adicionar um novo article na section calls

// Criar um elemento style com regras próprias e adicioná-lo
// à head da página
// style deve equivaler ao elemento
// <style>
// 		body {
// 			font-family: 'Poppins',sans-serif;
// 		}
// </style>

// Crie um elemento style definindo uma regra para :hover mudar o bgc de um elemento
// aplique essa regra aos itens do menu
