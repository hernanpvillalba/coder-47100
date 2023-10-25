function pedirDatos(){
    let nombre = prompt ("Por favor, ingrese su nombre");
    let saludo = "Hola";
    let saludoCompleto = saludo + " " + nombre;
    alert (`${saludoCompleto}, bienvenido a Detailing Vehicular`);
}
pedirDatos()


class Producto {
    constructor (nombre, marca, precio, cantidad){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const productos = [];
productos.push(new Producto ("shampoo", "toxic shane shampoo", 2150, 10));
productos.push(new Producto ("cera","cera líquida toxic shane", 2700, 10));
productos.push(new Producto ("paño","paño microfibra Laffitte", 4200, 10));
productos.push(new Producto ("esponja","esponja de microfibra", 2800, 15));
productos.push(new Producto ("cepillo","cepillo para llantas", 6500, 5));

let nombre = prompt ("Ingresa el producto que buscas: shampoo / cera / paño / esponja / cepillo").toLowerCase();
while (nombre != "shampoo" && nombre != "cera" && nombre != "paño" && nombre != "esponja" && nombre != "cepillo" ){
    alert ("No es un producto valido")
    nombre = prompt ("Ingresa el producto que buscas: shampoo / cera / paño / esponja / cepillo").toLowerCase();
}

const buscador = productos.find((item) => item.nombre === nombre);

if (buscador){
    alert(`
    Marca: ${buscador.marca}
    Precio: ${buscador.precio}
    Cantidad Disponible: ${buscador.cantidad} 
    `);
} 


let compra = prompt ("Queres comprarlo? si/no").toLowerCase()
if (compra == "no"){
    alert("Gracias, vuelva prontos");
} else if (compra == "si"){
    switch(productos){
        case "shampoo":
            break;
        case "cera":
            break;
        case "paño":
            break;
        case "esponja":
            break;
        case "cepillo":
            break;
        default:
            break;
    }
    let unidades = parseInt (prompt("Ingresa la cantidad deseada"));
    if( unidades > buscador.cantidad ) {
        alert ("No hay stock disponible");
    } else{
        alert ("Gracias por tu compra")
    }
}
