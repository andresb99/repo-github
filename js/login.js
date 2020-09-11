function validateForm() {
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    if (username == null || username == "") {
        alert("Por favor, ingrese el nombre de usuario o su correo electronico.");
        return false;
    }
    if (password == null || password == "") {
        alert("Por favor, ingrese la contraseña.")
        return false; 
    } localStorage.setItem('log', username);
      localStorage.setItem("pass" , password)

    

}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){



});
function mostrarContrasena(){
    var tipo = document.getElementById("inputPassword");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

