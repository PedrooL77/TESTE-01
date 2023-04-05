document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , shownome );

document.getElementById( "btn-soma" ).addEventListener( "click" , showresultado1);

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

function showresultado1()
{
    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    document.getElementById( "resultado1").innerHTML = parseFloat("num1") + parseFloat("num2");
}