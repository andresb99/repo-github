const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
const ORDER_BY_PROD_COUNT_DES = "Cantidad";
const ORDER_BY_PROD_COUNT_VENDIDOS = "Vendidos";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.cost);
            let bCount = parseInt(b.cost);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    } 
    else if (criteria === ORDER_BY_PROD_COUNT_DES){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.cost);
                let bCount = parseInt(b.cost);
    
                if ( aCount > bCount ){ return 1; }
                if ( aCount < bCount ){ return -1; }
                return 0;
            }); 
    }
    else if (criteria === ORDER_BY_PROD_COUNT_VENDIDOS){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        }); 
}

    return result;
}

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){

            htmlContentToAppend += `
            
            <div class="col-md-3 ">
                    <div class="card-deck">
                        <div class="card mb-4" >
                            <div >
                            <a href="product-info.html"  class="list-group-item list-group-item-action">
                            <img class="card-img-top" src="` + product.imgSrc + `" alt="Card image cap">
                            <div class="card-body" >
                                <h5 class="card-title">`+ product.name + `</h5>
                                <p class="card-text">` + product.description + `</p>
                                <p class="card-text">`+ "Vendidos:" + product.soldCount + `</p>
                                <h3 class="text-muted"><b>` + "USD" + product.cost + `</b></h3>
                            </div>
                            </a>
                            </div>
                        </div>
                    </div>
                
            </div>
            `
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    //Muestro las categorías ordenadas
    showProductsList();
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT);
    });
    document.getElementById("sortByCantidad").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT_DES);
    });
    document.getElementById("sortByRelevancia").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT_VENDIDOS);
    });



    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductsList();
    });
    document.getElementById("buscar").addEventListener("keyup", filtrar)
});



const formulario = document.querySelector("#buscar")

const filtrar = ()=>{
    //console.log(formulario.value);
    RESULTADO_DE_BUSQUEDA = "";
    const texto = formulario.value.toLowerCase()
    for(let product of currentProductsArray){
        let nombre = product.name.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            RESULTADO_DE_BUSQUEDA += `
            <div class="col-md-3" >
                    <div class="card-deck">
                        <div class="card mb-4 shadow-sm">
                            <div class="card-img-top">
                            <a href="product-info.html" class="list-group-item list-group-item-action">
                            <img class="card-img-top" src="` + product.imgSrc + `" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">`+ product.name + `</h5>
                                <p class="card-text">` + product.description + `</p>
                                <p class="card-text">`+ "Vendidos:" + product.soldCount + `</p>
                                <h3 class="text-muted"><b>` + "USD" + product.cost + `</b></h3>
                            </div>
                            <a>
                            </div>
                        </div>
                    </div>
                
            </div>
            `
        }

        document.getElementById("cat-list-container").innerHTML = RESULTADO_DE_BUSQUEDA;
    }
    
}
