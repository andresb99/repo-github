function profileForm() {
    var name = document.getElementById("profilename").value;
    var lastname = document.getElementById("profilelastname").value;
    var age = document.getElementById("profileage").value;
    var email = document.getElementById("profileemail").value;
    var phone = document.getElementById("profiletel").value;
    const userInfo = {
        "name" : name,
        "lastname" : lastname,
        "age": age,
        "email": email,
        "phone": phone,
    };

    let userInfoParsed = JSON.stringify(userInfo)
    localStorage.setItem('userinfo', userInfoParsed);
    console.log(localStorage.getItem("userinfo"))

    if (!name || !lastname || !age || !email || !phone) {
        alert("Por favor, complete todos los campos solicitados");
        return false;
    }
    

    }
    





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    let avatarSource = localStorage.getItem("avatarImage");

    if(avatarSource !== null){
        document.getElementById("avatarimage").src = avatarSource;
    }
    
    // cargar imagen de perfil
    const avatarInput = document.getElementById("avatarinput")
    const avatarImage = document.getElementById("avatarimage");

    avatarInput.onchange = (e) =>{
    let avatar = e.target.files[0];
    var fr = new FileReader();
    fr.onload = function () {
        document.getElementById("avatarimage").src = fr.result;
    }
    fr.readAsDataURL(avatar);
}


// Take action when the image has loaded
avatarImage.addEventListener("load", function () {
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    imgCanvas.width = avatarImage.width;
    imgCanvas.height = avatarImage.height;

    // Draw image into canvas element
    imgContext.drawImage(avatarImage, 0, 0, avatarImage.width, avatarImage.height);

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");

    // Save image into localStorage
    try {
        localStorage.setItem("avatarImage", imgAsDataURL);
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }
}, false); 


    var name = document.getElementById("profilename");
    var lastname = document.getElementById("profilelastname");
    var age = document.getElementById("profileage");
    var email = document.getElementById("profileemail");
    var phone = document.getElementById("profiletel");

    let userInfoName = JSON.parse(localStorage.getItem("userinfo")).name
    let userInfoLastName = JSON.parse(localStorage.getItem("userinfo")).lastname
    let userInfoAge = JSON.parse(localStorage.getItem("userinfo")).age
    let userInfoEmail = JSON.parse(localStorage.getItem("userinfo")).email
    let userInfoPhone = JSON.parse(localStorage.getItem("userinfo")).phone

    
    name.value = userInfoName;
    lastname.value = userInfoLastName;
    age.value = userInfoAge;
    email.value = userInfoEmail;
    phone.value = userInfoPhone;
});