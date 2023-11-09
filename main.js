class Producto {
    constructor (nombre, marca, precio, cantidad){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const productos = [];
productos.push(new Producto ("shampoo", "Toxic Shane Shampoo", 2150, 10));
productos.push(new Producto ("cera","Cera Líquida Toxic Shane", 2700, 10));
productos.push(new Producto ("paño","Paño Microfibra Laffitte", 4200, 10));
productos.push(new Producto ("esponja","Esponja De Microfibra", 2800, 15));
productos.push(new Producto ("cepillo","Cepillo Para Llantas", 6500, 5));

const buscador = document.getElementById("buscador");
const listaResultado = document.getElementById("listaResultado");
const sinResultado = document.getElementById ("sinResultado");

const verCarrito = document.getElementById("verCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");

let carrito = [];

const buscadorProducto = () => {
    const buscarProducto = buscador.value.toLowerCase();
    const filtradoProducto = productos.filter((item) => item.nombre.toLowerCase().startsWith(buscarProducto));

    listaResultado.innerHTML = "";

    if(filtradoProducto.length === 0){
        sinResultado.style.display = "block";
    } else{
        filtradoProducto.forEach((productos) => {
            let div = document.createElement("div");
            div.innerHTML = `
            <h2>Marca: ${productos.marca}</h2>
            <p>Nombre: ${productos.nombre}</p>
            <b>Precio: ${productos.precio} </b>
            `;
            listaResultado.append(div);

            let comprar = document.createElement("button");
            comprar.innerText = "Comprar"; 
            div.append(comprar);

            comprar.addEventListener("click",() =>{
                carrito.push({
                    nombre: productos.nombre,
                    marca: productos.marca,
                    precio: productos.precio,
                });
                console.log(carrito);
            });
        });
        sinResultado.style.display = "none";
    }
    if(buscador.value === "") {
        listaResultado.innerHTML = "";
    }
};

buscador.addEventListener("input", buscadorProducto);

verCarrito.addEventListener ("click", () =>{
    const carritoCompra = document.createElement("div");
    carritoCompra.innerHTML=`
    <h1> Carrito de compras </h1>
    `;
    contenidoCarrito.append(carritoCompra);

    carrito.forEach((productos) =>{
        let carritoContent = document.createElement ("div");
        carritoContent.innerHTML = `
            <h2>Marca: ${productos.marca}</h2>
            <p>Nombre: ${productos.nombre}</p>
            <b>Precio: ${productos.precio} </b>
    `;
    contenidoCarrito.append(carritoContent);
    }); 

    const total = carrito.reduce((acc, el) => acc + el.precio,0);

    const totalCompra = document.createElement ("div");
    totalCompra.innerHTML = `<h3>total a pagar: ${total} $</h3>`;
    contenidoCarrito.append(totalCompra);
});

localStorage.setItem ("articulos", JSON.stringify(productos));
let articulos = JSON.parse (localStorage.getItem("productos"));
