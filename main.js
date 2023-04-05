document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , shownome )

document.getElementById( "num1" ).addEventListener( "click" ,shownumber)

document.getElementById( "num2" ).addEventListener( "click" ,shownumber)

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function shownome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é:" + usuario
    document.getElementById( "nome" ).value = "";
}

function shownumber()
{
    let numero = document.getElementById( "number" ).value;
    document.getElementById( "resultado1").innerHTML = "Somar" + numero
    document.getElementById( "number").value = ""
}

function shownumber()
{
    let numero = document.getElementById( "number" ).value;
    document.getElementById( "resultado1").innerHTML = "Somar" + numero
    document.getElementById( "number").value = ""
}