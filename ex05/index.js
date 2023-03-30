const rodarDado = document.getElementById("rodarDado");

const handlerodarDadoClick = () => {
    let resultado = Math.floor(Math.random () * 6) + 1;
    document.getElementById("resultado").innerHTML = resultado;
}

rodarDado.onclick = handlerodarDadoClick;