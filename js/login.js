// function loguear() {
//     let user = document.getElementById("usuario").value;
//     let pass = document.getElementById("clave").value;

//     if (user === "1078266168" && pass === "1234") {window.location ="index.html"}
//     else{
//         alert("Usuario o contraseña incorrecta")
//     }
// }

function loguear() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;

    const usuarios = {
        "1078266168": "123",
        "12186270": "456",
        "26442279": "789"
    }

    if (usuarios[user] && usuarios[user]===pass) {window.location ="index.html"}
    else{
        alert("Usuario incorrecto")
    }
}