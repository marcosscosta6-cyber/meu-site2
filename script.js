
function button1 () {
    let problema = prompt("Digite um problema que você quer resolver:");
problema = problema.toLowerCase();
resultado = "Para resolver o problema " + problema +" tente quebrá-lo em 3 partes menores. O que você pode fazer primeiro?";
 document.getElementById("resultado").innerHTML = resultado;
}

function button2 () {
    let problema = prompt("Digite um problema que você quer resolver:");
    problema = problema.toLowerCase();
    resultado = "Para resolver o problema " + problema +" tente indentificar padrões ou similaridades com problemas que você já resolveu antes.";
     document.getElementById("resultado").innerHTML = resultado;
}

function button3 () {
    let problema = prompt("Digite um problema que você quer resolver:");
    problema = problema.toLowerCase();
    resultado = "Para resolver o problema " + problema +" tente criar uma representação simplificada do problema, focando nos aspectos mais importantes.";
     document.getElementById("resultado").innerHTML = resultado;
}

function button4 () {
    let problema = prompt("Digite um problema que você quer resolver:");
    problema = problema.toLowerCase();
    resultado = "Para resolver o problema " + problema +" tente desenvolver um conjunto de instruções passo a passo para chegar à solução.";
     document.getElementById("resultado").innerHTML = resultado;
}
