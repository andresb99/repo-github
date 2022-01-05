let cantidadnueva1 = document.getElementById("cantidadarbolito")
let cantidadnueva = document.getElementById("cantidadcelerio")

//funcion del celerio para modificar el resultado de la factura bieeen
function cambiarCantidad(){
    let htmlContentToAppend = "";
    let cantidadnueva = document.getElementById("cantidadcelerio")
   
 
        console.log(cantidadnueva.value)
        document.getElementById("cantidaddeunidadesdos").innerHTML = htmlContentToAppend;
         
        document.getElementById("preciodos").innerHTML = "<h5> $ "+articles.articles[1].currency +"  " + articles.articles[1].unitCost*cantidadnueva.value +" <h5>";

    }
   
   //articles.articles[0].currency
    
 function cambiarCantidad1(){
    let htmlContentToAppend = "";
    let cantidadnueva1 = document.getElementById("cantidadarbolito")
    
        
        document.getElementById("cantidaddeunidadesuno").innerHTML = htmlContentToAppend;
         
        
        document.getElementById("preciouno").innerHTML = "<h5> $ "+articles.articles[0].currency +"  " + articles.articles[0].unitCost*cantidadnueva1.value +" <h5>";

   }
   

   function resultado(){


    document.getElementById("sumadeprecios").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("sumadeprecios").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value 
   }

   function resultado2(){

    let radio = document.submissionform.inputenvio.value;

    if(radio == 15){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value + (articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value)*0.15;
    }
    if(radio == 7){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value + (articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value)*0.07;
    }
    if(radio == 5){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value + (articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value)*0.05;
    }

    if(!radio){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + articles.articles[1].unitCost*40*cantidadnueva.value;
    }
    
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

            let preciototal = document.getElementById("preciototal")


            articulo1.innerHTML =  "<h3>"+articles.articles[0].name+" </h3>" ;
            precio1.innerHTML = '<h5> $ '+articles.articles[0].currency +' '+ articles.articles[0].unitCost*2 +' <h5>';

            articulo2.innerHTML =  "<h3>"+articles.articles[1].name+" </h3>" ;
            precio2.innerHTML = "<h5> $ "+articles.articles[1].currency +"  " + articles.articles[1].unitCost +" <h5>";


            preciototal.innerHTML = articles.articles[0].currency+ " ";
            preciototal.innerHTML +=  articles.articles[0].unitCost*2 + articles.articles[1].unitCost*40;
           
            
            
            
            
            resultado.innerHTML = articles.articles[0].currency+ " ";
            resultado.innerHTML +=  articles.articles[0].unitCost*2 + articles.articles[1].unitCost*40;
            
   
    });

});





function validation(){
    
  
  if(!document.querySelector('input[name="inputenvio"]:checked')){
        alert("Por favor seleccione un metodo de envio, gracias")    
    }

    else if(cantidadnueva.value == 0 && cantidadnueva1.value == 0 || articles.articles[0].unitCost + articles.articles[1].unitCost==0 ){
      alert("Por favor seleccione uan cantidad no nula de productos.")
    }
     
    else{let  modal=document.getElementById("modal")
    modal.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">Ingrese sus datos</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form name="nombreform">
            <div class="form-group">

              <p>
                <label class=" text-muted" for="nombres">Nombres: </label>
                <input style="margin-bottom: 10px;" class="form-control" type="text" name="nombre" id="nombrevalidation" placeholder="ingrese su nombre completo">
                <label class=" text-muted" for="apellidos">Apellidos: </label>
                <input style="margin-bottom: 10px;" class="form-control" type="text"  name="Apellidos" id="apellidosvalidation" placeholder="ingrese sus apellidos">
                <label class=" text-muted" for="cedula">C.I : </label>
                <input style="margin-bottom: 10px;" class="form-control" type="text" name="cedula" id="civalidation" placeholder="ingrese su numero de cedula (sin puntos ni guiones)">
                <label class=" text-muted" for="direccion">Dirección: </label>
                <input class="form-control" type="text"  name="direccion" id="directionvalidation" placeholder="ingrese su dirección">
              </p>

              <h5 class="modal-title" id="exampleModalLabel">Seleccione un metodo de pago</h5>
              <input type="radio" id="creditcard" name="metododepago" value="creditcard">
              <label for="creditcard">Tarjeta de credito</label><br>
              <label for="tarjeta" class="text-muted">Numero de tarjeta</label><input type="number" name="tarjeta" style="width: 100%; margin-bottom:10px;" class="form-control" id="nrotarjeta" placeholder="ingrese su numero de tarjeta"> <label class="text-muted" for="vencimiento">Fecha de vencimiento(MM/AA)</label><input type="month" id="vencimientotarjeta" name="vencimiento" style="width: 100%; margin-bottom:10px;"  class="form-control" placeholder="MM/AA"><label class="text-muted" for="securitycode">Codigo de seguridad</label><input type="number" name="securitycode" style="width: 100%; margin-bottom:10px;"  class="form-control" id="securitycodecard" placeholder="ingrese su codigo de seguridad">
              <input type="radio" id="transferenciabancaria"  name="metododepago" value="transferenciabancaria">
              <label for="transferenciabancaria">Transferencia bancaria</label><br>
              <p><label for="numerodecuenta">Numero de Cuenta: </label></p> <input type="number" name="numerodecuenta" id="numerodecuenta" class="form-control" style="width:100%;" placeholder="ingrese su numero de cuenta">
            </div>
            
            <div class="form-group">
              <p id="optionchange"></p>
            </div>
           
          </form>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
          <button type="button" onclick="modalValidation(), modalValidationDos()" class="btn btn-primary" >FINALIZAR COMPRA</button>
        </div>
      </div>
    </div>
  </div>`  
      //tomo el id tarjeta y cuenta bancaria, y con el evento "change" desactivo los campos del radio no marcado
      document.getElementById("creditcard").addEventListener("change",function(){
        document.getElementById("nrotarjeta").disabled =false;
        document.getElementById("vencimientotarjeta").disabled =false;
        document.getElementById("securitycodecard").disabled =false;
    
        document.getElementById("numerodecuenta").disabled =true;
        document.getElementById("numerodecuenta").value =null;
    });
    document.getElementById("transferenciabancaria").addEventListener("change",function(){
        document.getElementById("nrotarjeta").disabled =true;
        document.getElementById("vencimientotarjeta").disabled =true;
        document.getElementById("securitycodecard").disabled =true;
    
        document.getElementById("numerodecuenta").disabled =false;
        document.getElementById("nrotarjeta").value =null;
        document.getElementById("vencimientotarjeta").value =null;
        document.getElementById("securitycodecard").value =null;
    });  
}
}

function modalValidation(){
    
    let nombre = document.getElementById("nombrevalidation").value
    let apellidos = document.getElementById("apellidosvalidation").value
    let ci = document.getElementById("civalidation").value
    let direccion = document.getElementById("directionvalidation").value
    



    if(!nombre && !apellidos && !ci && !direccion){
        alert("Por favor rellene los campos solicitados")
    }
    else if(!document.querySelector('input[name="metododepago"]:checked')){
        alert("Por favor seleccione un metodo de pago")
    }
    else{    
    let accountnumber = document.getElementById("numerodecuenta").value
    let numerotarjeta = document.getElementById("nrotarjeta").value
    let vencimientocard = document.getElementById("vencimientotarjeta").value
    let securitycode = document.getElementById("securitycodecard").value
    

    if(numerotarjeta && vencimientocard && securitycode){
        alert("Compra realizada con exito! gracias por elegirnos.")
        window.location.href="index.html";
    }
    else if(accountnumber){
        alert('Compra realizada con exito! gracias por elegirnos.')
        window.location.href="index.html";
    }

    else{
    alert("Rellene los campos requeridos")
    
}}
    
    



}
  

function borrarArbolito(){
    
    let bloque1 = document.getElementById("articleone");
    bloque1.innerHTML = '' ;
    articles.articles[0].unitCost=0;
    bloque1.style.borderBottom="none"
    
    let radio = document.submissionform.inputenvio.value;

    document.getElementById("sumadeprecios").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("sumadeprecios").innerHTML +=  articles.articles[1].unitCost*40*cantidadnueva.value;

    if(radio == 15){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[1].unitCost*40*cantidadnueva.value + (articles.articles[1].unitCost*40*cantidadnueva.value)*0.15;
    }
    if(radio == 7){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[1].unitCost*40*cantidadnueva.value + (articles.articles[1].unitCost*40*cantidadnueva.value)*0.07;
    }
    if(radio == 5){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[1].unitCost*40*cantidadnueva.value + (articles.articles[1].unitCost*40*cantidadnueva.value)*0.05;
    }

    if(!radio){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML +=  articles.articles[1].unitCost*40*cantidadnueva.value;
    }
}

function borrarAuto(){

  let bloque2 = document.getElementById("articletwo");

    bloque2.innerHTML = ``
    articles.articles[1].unitCost=0;
    bloque2.style.borderBottom="none"
    

    let radio = document.submissionform.inputenvio.value;

    document.getElementById("sumadeprecios").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("sumadeprecios").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value;
    
    
    if(radio == 15){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + (articles.articles[0].unitCost*cantidadnueva1.value)*0.15;
    }
    if(radio == 7){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + (articles.articles[0].unitCost*cantidadnueva1.value)*0.07;
    }
    if(radio == 5){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value + (articles.articles[0].unitCost*cantidadnueva1.value)*0.05;
    }

    if(!radio){
      document.getElementById("preciototal").innerHTML = articles.articles[0].currency+" ";
    document.getElementById("preciototal").innerHTML += articles.articles[0].unitCost*cantidadnueva1.value;
    }

  
}




