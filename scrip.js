function pagesuma(){

        window.open("pagesuma.html","_self");
}
function pag_principal(){

        window.open("index.html","_self");
}

function comprobar(){

let nr1 = parseInt(document.getElementById("num1").value);
let nr2 = parseInt(document.getElementById("num2").value);
let sumando = (nr1+nr2);

let monto = parseInt(document.getElementById("rpta").value);

if(parseInt(monto) == parseInt(sumando)){

        document.getElementById("rptas").innerHTML = "👍CORRECTO";
        document.getElementById("rpts").innerHTML = "Muy bien";
}else{
        
        document.getElementById("rptas").innerHTML = "😟INCORRECTO";
        document.getElementById("rpts").innerHTML = "La respuesta correcta es = "+sumando;

}
}

function pageresta(){

        window.open("pageresta.html","_self");
}


function comprobar1(){

let nr11 = parseInt(document.getElementById("num11").value);
let nr21 = parseInt(document.getElementById("num21").value);
let restando = (nr11-nr21);

let monto1 = parseInt(document.getElementById("rpta1").value);

if(parseInt(monto1) == parseInt(restando)){     

        document.getElementById("rptas1").innerHTML = "👍CORRECTO";
        document.getElementById("rpts1").innerHTML = "Muy bien";

}else{
        
        document.getElementById("rptas1").innerHTML = "😟INCORRECTO";
        document.getElementById("rpts1").innerHTML = "La respuesta correcta es = "+restando;

}}

function pagedivision(){

        window.open("pagedivision.html","_self");
}


function comprobar3(){

let nr3 = parseInt(document.getElementById("num3").value);
let nr13 = parseInt(document.getElementById("num13").value);
let division = (nr3/nr13);

let monto3 = parseInt(document.getElementById("rpta34").value);

if(parseInt(monto3) == parseInt(division)){

        document.getElementById("rptas32").innerHTML = "👍CORRECTO";
        document.getElementById("rpts33").innerHTML = "Muy bien";

}else{
        
        document.getElementById("rptas32").innerHTML = "😟INCORRECTO";
        document.getElementById("rpts33").innerHTML = "La respuesta correcta es = "+division;

}
}

function pageproducto(){

        window.open("pagemultiplicacion.html","_self");
}


function comprobar2(){

let nr111 = parseInt(document.getElementById("num111").value);
let nr211 = parseInt(document.getElementById("num211").value);
let multiplicacion = (nr111*nr211);

let monto2 = parseInt(document.getElementById("rpta11").value);

if(parseInt(monto2) == parseInt(multiplicacion)){

        document.getElementById("rptas11").innerHTML = "👍CORRECTO";
        document.getElementById("rpts11").innerHTML = "Muy bien";

}else{
        
        document.getElementById("rptas11").innerHTML = "😟INCORRECTO";
        document.getElementById("rpts11").innerHTML = "La respuesta correcta es = "+multiplicacion;

}
}