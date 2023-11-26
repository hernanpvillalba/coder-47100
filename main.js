const productosVenta = document.getElementById("productosVenta");
const carritoCompra = document.getElementById("carritoCompra");
const compras = document.getElementById("compras");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () =>{
    const response = await fetch("productos.json");
    const data = await response.json();

    data.forEach ((item) => {
        let content = document.createElement("div");
        content.className = "shop";
        content.innerHTML = `
            <img src="${item.imagen}">
            <h3> ${item.nombre} </h3>
            <p>$ ${item.precio} </p>
        `;
        productosVenta.append(content);
    
        let comprar = document.createElement ("button");
        comprar.innerText = "Comprar";
        comprar.className = "boton-comprar"
    
        content.append(comprar);
    
        comprar.addEventListener("click",() =>{
            Swal.fire({
                title: "Agregado al Carrito",
                text: "Clickea en el auto para ver el total",
                icon: "success"
              });
            const repeat = carrito.some((repetirProducto) => repetirProducto.nombre === item.nombre);
            if (repeat === true){
                carrito.map((articulos) =>{
                    if(articulos.nombre === item.nombre){
                        articulos.cantidad++;
                    }
                });
            }else{
                carrito.push({
                nombre: item.nombre,
                precio: item.precio,
                imagen: item.imagen,
                cantidad: item.cantidad,
                });
                guardadoLocal();
            }
        });
    });
    
    const verCarrito = () =>{
        compras.innerHTML = "";
        compras.style.display = "flex";
        const carritoHeader = document.createElement ("div");
        carritoHeader.className = "carrito-header"
        carritoHeader.innerHTML = `
            <h2 class = "carrito-header-titulo"> Carrito </h2>
        `;
    
        compras.append(carritoHeader);
    
        const carritoBoton = document.createElement ("h2");
        carritoBoton.innerText = "X";
        carritoBoton.className = "carrito-boton-header";
    
        carritoBoton.addEventListener("click",() =>{
            compras.style.display = "none";
        });
    
        carritoHeader.append(carritoBoton);
    
        carrito.forEach((item) =>{
            let carritoContent = document.createElement ("div");
            carritoContent.className = "carrito-content"
            carritoContent.innerHTML = `
                <img src="${item.imagen}">
                <h3> ${item.nombre} </h3>
                <p>Precio:$${item.precio} </p>
                <p>Cantidad:${item.cantidad} </p>
                <p>Total:$${item.cantidad * item.precio} </p>
                `;
            compras.append(carritoContent);
    
            let eliminar  = document.createElement ("button");
            eliminar.innerText = "Eliminar";
            eliminar.className = "eliminar-producto";
            carritoContent.append(eliminar);
    
            eliminar.addEventListener("click", () =>{
                Swal.fire({
                    title: "Queres eliminar el producto?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Si",
                    cancelButtonText: "No",
                }).then ((result) =>{
                    if (result.isConfirmed){
                        Swal.fire({
                            title: "Eliminado",
                            icon: "success",
                            text: "Producto eliminado del carrito",
                        })
                        eliminarProducto();
                    }
                })
            });
        });

        const total = carrito.reduce((acc, pr) => acc + pr.precio * pr.cantidad, 0);
    
        const totalCompra = document.createElement ("div");
        totalCompra.className = "total-compra";
        totalCompra.innerHTML = `Total a Pagar:$${total}`;
        
        compras.append(totalCompra);
    };
    
    carritoCompra.addEventListener("click", verCarrito);
    
    const eliminarProducto = () =>{
        const foundNombre = carrito.find ((articulo) => articulo.nombre);
        carrito = carrito.filter((carritoNombre) =>{
            return carritoNombre !== foundNombre;
        });
    
        verCarrito();
        guardadoLocal();
    };
};

getProductos();

const guardadoLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};