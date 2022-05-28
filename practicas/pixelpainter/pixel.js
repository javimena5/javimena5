'use strict'
var altoWeb = window.innerHeight;
let altoLienzo = altoWeb * 0.80;
let tamLienzo = altoLienzo;
let pixelesLienzo = 25;
let tamPixel = altoLienzo/pixelesLienzo;
var intModo;
let stringModo = "click"
console.log(tamPixel + "  " + tamLienzo)
Principal();

function descargar(){
    var element = $(".general"); // global variable
var getCanvas; // global variable
$('document').ready(function(){
  html2canvas(element, {
    onrendered: function (canvas) {
      $("#previewImage").append(canvas);
      getCanvas = canvas;
    }
  });
});
    
    var imgageUrl = getCanvas.toDataURL("image/png");
    newTab?.document.write(
        `<!DOCTYPE html><head><title>Document preview</title></head><body><img src="${imgUrl}" width="100px" height="100px" ></body></html>`);
    const newTab = window.open();
    newTab?.document.close();
   //Te quiero Javi 
}
function borrar(){
    document.querySelectorAll(".cuadrado").forEach(element => element.style.background = "white");
    console.log("borrando")
    
}

function modo(){
    // check if mousedown then mouseover, mouseup then click
    let cuadrados = document.querySelectorAll(".cuadrado")
    cuadrados.forEach(element =>
        element.addEventListener(stringModo, function( event ) {
            event.target.style.background = color.value;
        }, true));
}

function creaLienzo(){
    let cadena = "";
    cadena += "<div class=\"lienzo\">";
    let i=0; let j=0;
    let capa = document.querySelector(".general");
    while(i<pixelesLienzo){
        cadena += "<div class=\"fila\">";
        j=0;
        while(j<pixelesLienzo){
            cadena += "<div class=\"cuadrado\" style=\"height:"+tamPixel+"px; width:"+tamPixel+"px;"+"\"></div>";
            j=j+1;
        }
        cadena += "</div>";
        i=i+1;
    }
    cadena += "</div>";
    cadena += "<div class=\"medidas\">"+pixelesLienzo+"x"+pixelesLienzo+"</div>";
    capa.innerHTML = cadena;   
}

function Principal(){
    creaLienzo();
    modo();
    //pintar(stringModo); 
    let entradaTam =  document.getElementById("tam");

    entradaTam.addEventListener("change", 
        function myfunc() { 
            if (entradaTam.value > 150) pixelesLienzo = 150;
            else if(entradaTam.value <= 1) pixelesLienzo = 2;
            else pixelesLienzo = entradaTam.value;
            tamPixel = altoLienzo/pixelesLienzo;
            creaLienzo();
            modo();
        }
    );
}










