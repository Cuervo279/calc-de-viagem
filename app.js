let display = document.getElementById('display');
let combustivel = document.getElementById('combustivel');
let consumo = document.getElementById('consumo');
let distancia = document.getElementById('distancia');

function calc() {   
    result = (distancia.value / consumo.value) * combustivel.value;
    display.innerHTML = "Manooooooooooo tu vai gastar" + " R$ " + parseFloat(result).toFixed(2);
}