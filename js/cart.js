let cantidadnueva1 = document.getElementById("cantidadarbolito")
let cantidadnueva = document.getElementById("cantidadcelerio")

//funcion del celerio para modificar el resultado de la factura bieeen
function cambiarCantidad(){
    let htmlContentToAppend = "";
    let cantidadnueva = document.getElementById("cantidadcelerio")
   
 
    htmlContentToAppend = `
  
        `+": "+ cantidadnueva.value + `
        
`
        console.log(cantidadnueva.value)
        document.getElementById("cantidaddeunidadesdos").innerHTML = htmlContentToAppend;
         
        document.getElementById("preciodos").innerHTML = "<h4> Precio: "+articles.articles[1].currency +"  " + articles.articles[1].unitCost*cantidadnueva.value +" <h4>";

    }
   
   //articles.articles[0].currency
    
 function cambiarCantidad1(){
    let htmlContentToAppend = "";
    let cantidadnueva1 = document.getElementById("cantidadarbolito")
    
 
    htmlContentToAppend = `
  
        `+": "+ cantidadnueva1.value + `
        
`
        
        document.getElementById("cantidaddeunidadesuno").innerHTML = htmlContentToAppend;
         
        
        document.getElementById("preciouno").innerHTML = "<h4> Precio: "+articles.articles[0].currency +"  " + articles.articles[0].unitCost*cantidadnueva1.value +" <h4>";

   }
   

   function resultado(){


    document.getElementById("sumadeprecios").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("sumadeprecios").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value 
   }

   function resultado2(){


    document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value + 300
   }
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO).then(function(resultObj){
        
        
        if (resultObj.status === "ok")
        {
            articles = resultObj.data;
           
        }


        
            let articulo1  = document.getElementById("articulouno");
            let precio1 = document.getElementById("preciouno");
            let articulo2  = document.getElementById("articulodos");
            let precio2 = document.getElementById("preciodos");
            let cantidad1 = document.getElementById("cantidaddeunidadesuno")
            let cantidad2 = document.getElementById("cantidaddeunidadesdos")  
            let resultado = document.getElementById("sumadeprecios")
            let precioenvio = document.getElementById("costodeenvio")
            let preciototal = document.getElementById("preciototal")


           
            preciototal.innerHTML = articles.articles[0].currency+ " ";
            preciototal.innerHTML +=  articles.articles[0].unitCost*2 + articles.articles[1].unitCost*40 + 300;
            precioenvio.innerHTML = "UYU " + 300;
            articulo1.innerHTML =  "<h3>"+articles.articles[0].name+" </h3>" ;
            precio1.innerHTML = "<h4> Precio: "+articles.articles[0].currency +"  " + articles.articles[0].unitCost*2 +" <h4>";
            articulo2.innerHTML =  "<h3>"+articles.articles[1].name+" </h3>" ;
            precio2.innerHTML = "<h4> Precio: "+articles.articles[1].currency +"  " + articles.articles[1].unitCost +" <h4>";
            cantidad1.innerHTML = ": " + articles.articles[0].count ;
            cantidad2.innerHTML = ": " + articles.articles[1].count ;
            resultado.innerHTML = articles.articles[0].currency+ " ";
            resultado.innerHTML +=  articles.articles[0].unitCost*2 + articles.articles[1].unitCost*40;
            
   
    });
});

