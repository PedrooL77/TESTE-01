document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , shownome )

document.getElementById( "number" ).addEventListener( "click" , shownumber)

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function shownome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é:" + usuario;
    document.getElementById( "nome" ).value = "";
}

function shownumber()
{
    let numero = document.getElementById( "num1" ).value;
    let numero = document.getElementById( "num2" ).value;
    document.getElementById( "btn-soma").innerHTML = "num1" + "num2";
}