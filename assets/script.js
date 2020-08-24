function validacion(){

    //almacenaremos los datos en variables
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var telefono = document.getElementById("telefono").value;
    var contraseña = document.getElementById("pass").value;
    var caracteres = /\w+@\w+\.+[a-z]/; 
    var saludo = `Bienvenido ${nombre} ${apellidos}. Tu usuario es: ${usuario} y tu contraseña: ${contraseña}`;

    //validamos que ningun campo este vacio
    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    //validamos que el campo nombre no supere los 30 caracteres.
    else if (nombre.length >= 30){
        alert("El nombre es muy largo");
        return false;
    }
    //validamos que el apellidos no supere los 80 caracteres.
    else if (apellidos.length >= 80){
        alert("Apellidos muy largos");
        return false;
    }
    //validamos que el campo correo sea efectivamente un email.
    else if (!caracteres.test(correo)){
        alert("Correo no válido");
        return false;
    }
    //validamos que el campo correo no supere los 100 caracteres.
    else if (correo.length > 100){
        alert("Correo electrónico muy largo");
        return false;
    }
    //validamos que el campo usuario no supere los 20 caracteres.
    else if (usuario.length > 20){
        alert("Nombre de usuario muy largo");
        return false;
    }
    //validamos que el campo teléfono no supere los 15 caracteres.
    else if (telefono.length > 15){
        alert("Número de teléfono muy largo");
        return false;
    }
    //validamos que el campo teléfono acepte solo datos numéricos.
    else if(isNaN(telefono)){
        alert("Ingrese un número de teléfono válido");
        return false;
    }
    
    alert(saludo);
}