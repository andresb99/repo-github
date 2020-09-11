var product = {};
let comentarios ={};
var products = [];

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 1; i < array.length; i++){
        let imageSrc = array[i];
        
        htmlContentToAppend += `
        <div class="carousel-item">
                <img src="` + imageSrc + `" class="d-block w-100" alt="">
              </div>
        `
    }
    document.getElementById("productImage").innerHTML += htmlContentToAppend;
}


function showComentarios(array){

    let htmlContentToAppend = "";
   


    for(let i = 0; i < array.length; i++){
        let coment = array[i];
        htmlContentToAppend += `
            <div class="comentarios">
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                     <h4 class="text-muted">`+ coment.user +"  "+ `<span class="fa fa-star checked"></span> `.repeat(coment.score) +
                    `<span class="fa fa-star"></span> `.repeat(5-coment.score) +`</h4>
                    <small class="text-muted">` + coment.dateTime + `</small>
                </div>
                <div>
                    <p class="mb-1">` +coment.description+ `</p>
                    
                </div>
        
        </div>
            </div>    
        `

        document.getElementById("comentarios").innerHTML = htmlContentToAppend;
        
    }
}

function recomendados(){

    let htmlContentToAppend = "";
    let a =product.relatedProducts;
    for(let i = 0; i < a.length; i++){
        htmlContentToAppend += `
                <div class="card-group">
                    <div class="card-img-top" style="width: 25rem;">
                    <a href="product-info.html" class="list-group-item list-group-item-action">
                    <img class="card-img-top" src="` + products[a[i]].imgSrc + `" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">`+ products[a[i]].name +`</h5>
                        <p class="card-text">` + products[a[i]].description + `</p>
                        <h3 class="text-muted"><b>` +"US$ "+ products[a[i]].cost + `</b></h3>
                    </div>
                    <a>
                    </div>
                </div>
             
            `
             document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
    }
}
//Acá empieza el JS para las estrellas
var calificaciones = ["Muy mala", "Mala", "Buena", "Muy buena", "Excelente"];
var aux1 = document.querySelectorAll(".puntuaciones>a");
var calif = document.querySelector(".puntuaciones .calificacion");
for (const item of aux1) {
    item.addEventListener('mouseenter', cal);
}
function cal(e) {
    e.stopPropagation();
    var auxi = parseInt(e.target.id);
    var elementos = e.target.parentElement.querySelectorAll(".puntuaciones>a");

    //Quito la clase a todos, no hago un toggle por que cuando sea el cambio a un elemento superior me quitara los anteriores
    Array.from(elementos).forEach(e => e.classList.remove("seleccionado"));

    //fitlo por los que el atributo id sea menor a el actual y en el foreach le asigno la clase seleccionado
    Array.from(elementos).filter(item => { return parseInt(item.id) <= auxi })
        .forEach(e => e.classList.add("seleccionado"));

    //obtengo la calificación y la asigno.
    calif.innerHTML = `${calificaciones[auxi - 1]}`;
}
//acá termina el JS para las estrellas


function addComentario(){
    let f = new Date();
    let htmlContentToAppend = "";
    let comentarionuevo = document.getElementById("agregarComentario")
    
    if(comentarionuevo.value == 0 || 4-calificaciones.indexOf(calif.innerHTML) == 5 ){alert("Por favor, escriba un comentario y elija una puntuación antes de presionar enviar")}
    else{ 
    htmlContentToAppend += `<div class="comentarios">
    <div class="col">
    <div class="d-flex w-100 justify-content-between">
         <h4 class="text-muted">`+ localStorage.getItem("log") + `<span class="fa fa-star checked"></span> `.repeat(calificaciones.indexOf(calif.innerHTML)+1) +
         `<span class="fa fa-star"></span> `.repeat(4-calificaciones.indexOf(calif.innerHTML)) +  `</h4>
        <small class="text-muted">` + f.getFullYear() + `-` + f.getMonth() + `-` + f.getDate()+ ` ` + f.getHours()+ `:` + f.getMinutes() + `:` + f.getSeconds() +   `</small>
    </div>
    <div>
        <p class="mb-1">` + comentarionuevo.value + `</p>
        
    </div>

</div>
</div>    
`

        document.getElementById("comentarios").innerHTML += htmlContentToAppend;
         
    
    }
    
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productcategoryHTML = document.getElementById("productcategory");
            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productsoldCountHTML = document.getElementById("productsoldCount");
            let productcostHTML = document.getElementById("productcost");
            

            
            productcategoryHTML.innerHTML = product.category;
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productsoldCountHTML.innerHTML = product.soldCount;
            productcostHTML.innerHTML = product.currency + " " + product.cost;

            

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);

            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok")
                {
                    products = resultObj.data;
                    recomendados();
        
                 }
            });
            
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comentarios = resultObj.data;
            showComentarios(comentarios);

         }
    });
    


});