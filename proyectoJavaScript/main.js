function pedirDatos(){
    let nombre = prompt ("Por favor, ingrese su nombre");
    let saludo = "Hola";
    let saludoCompleto = saludo + " " + nombre;
    alert (`${saludoCompleto}, bienvenido a Detailing Vehicular`);
}
pedirDatos()
// while(nombre == Number ){
//     alert("Por favor, ingrese su nombre");
//     nombre = prompt ("Por favor, ingrese su nombre");
// }


function ingreseCelular(){
    let numeroTelefono = (prompt("Por favor, ingrese su numero de celular sin el 15, por ej. 65923031"));
    if  (numeroTelefono > 99999999) {
        alert ("Numero no valido");
    }
    else{
        alert("Selecciona el turno deseado");
    }    
    }

ingreseCelular()

function elegirTurno(){
    let horarioTurno = (prompt("Por favor indicanos el turno deseado: Turno 1. 08:00 Turno 2. 10:00 Turno 3. 12:00 Turno 4. 14:00"))

    switch (horarioTurno) {
        case "1":
            alert ("Turno 1: 8hs ")
            break;
        case "2":
            alert ("Turno 2: 10hs ")
            break;
        case "3":
            alert ("Turno 3: 12hs ")
            break;
        case "4":
            alert ("Turno 4: 14hs ")
            break;
        default:
            alert ("Opcion no valida")
    }
}
elegirTurno()