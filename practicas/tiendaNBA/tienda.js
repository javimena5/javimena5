'use strict'
function gestionarFicheroXML(xmlDoc)
{
    let camisetas = xmlDoc.querySelectorAll("camiseta")
    let capa = document.querySelector(".col")
    let cadena = ""
    let columnas = 0;

    for(let cam of camisetas)
    {
        columnas = columnas+1;
        if((columnas-1)%3 ==0) cadena += "<div class=\"row mt-2\">"
        cadena+= "<div class=\"col-lg-4 col-sm-12\"><div class=\"card m-4\" style=\"max-width: 25rem;\">"
        cadena+= "<img class=\"card-img-top\" src=\""+cam.querySelector("foto").textContent+"\">"
        cadena+= "<div class=\"card-body\">"
        cadena+= "<h5 class=\"card-title\">"+cam.querySelector("title").textContent+"</h5>"
        cadena+= "<p class=\"card-text\">"+cam.querySelector("desc").textContent+"</p>"
        cadena+= "<p class=\"card-text\"><small class=\"text-muted\">"+cam.querySelector("precio").textContent+"€</small></p>"
        cadena+= "<a href=\"#\" class=\"btn btn-danger btn-lg\">Al carrito</a>"
        cadena+="</div></div></div>"

        if(columnas%3==0) cadena += "</div>"
    }
    capa.innerHTML = cadena
}
function loadLDocA(fichero)
{
    let http = new XMLHttpRequest();
    http.open("GET",fichero,true);
    http.send();
    http.addEventListener('load', (event) => {
        if(http.status === 200) {
                gestionarFicheroXML(http.responseXML)
		}})
}

loadLDocA("./tienda.xml")