const inputItem = document.getElementById("inputItem");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const tabela = document.getElementById("tabela");
const lista = document.getElementById("lista");

let = listaItems = [];

const redesenhaLista = (lista, listaItems) => {
    lista.innerHTML = "";
    for (let index = 0; index < listaItems.length; ++index) {
        const item = listaItems[index];
        const tabela = document.createElement("tr");
        const descricao = document.createElement("td");
        const quantidade = document.createElement("td");
        const preco = document.createElement("td");
        descricao.appendChild(document.createTextNode(item.descricao));
        quantidade.appendChild(document.createTextNode(item.qtd));
        preco.appendChild(document.createTextNode(item.preco.toFixed(2)));
        tabela.appendChild(descricao);
        tabela.appendChild(quantidade);
        tabela.appendChild(preco);
        lista.appendChild(tabela);
    }
};

const handleBtAdicionarClick = () => {
    const descricao = inputItem.value;
    const qtd = parseInt(inputQuantidade.value);
    const preco = parseFloat(inputPreco.value);
    
    if(!descricao || isNaN(qtd) || isNaN(preco)) {
        alert("Necessário preencher todos os cantos!");
        return;
    }

    const item = {descricao, qtd, preco};
    listaItems.push(item);
    inputItem.value = "";
    inputQuantidade.value = "";
    inputPreco.value = "";
    inputItem.focus();
    redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
    listaItems = [];
    lista.innerHTML = "";
    inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;