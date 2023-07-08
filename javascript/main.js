// alert ('bienvenido/a a padel compras, a continuacion te mostramos nuestros productos')

// class Producto {
//     constructor(nombre, precio, goma) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.goma = goma;
//     }
// }
// let producto1 = new Producto('raptor', 12340, 'eva');
// let producto2 = new Producto('style', 25360, 'foam');
// let producto3 = new Producto('dark', 15150, 'eva');
// let producto4 = new Producto('mirage', 28189, 'foam');
// let producto5 = new Producto('danger', 9785, 'eva');
// let producto6 = new Producto('delta', 19328, 'foam');

// const productos = [producto1, producto2, producto3, producto4, producto5, producto6];

// productos.map(producto => { alert(`nombre: ${producto.nombre} \n precio: ${producto.precio} \n goma: ${producto.goma}`) });

// alert('te mostramos la lista de productos')
//     let todosLosProductos = productos.map(
//         (producto) => `pala: ${producto.nombre} , goma: ${producto.goma},  precio:  ${producto.precio}`
//     );
//     alert(todosLosProductos.join("\n"))

// let mostrarProductos = alert('mediante la consola, tendras acceso a la lista de productos en todo momento');
// console.log(productos)

// let busquedaDeProducto = parseInt(prompt('contamos con un servicio de busqueda si desea utilizarlo, solo escribe 1- para encontrar un producto por su nombre; 2- para buscar palas por precio inferior; 3- para encontrar un producto por su goma o 4- para continuar su compra '))

// if (busquedaDeProducto === 1) {

//     let productoElegidoPorNombre = prompt('ingresa el producto que quieras buscar')
//     console.log(productos.find((producto) => producto.nombre === productoElegidoPorNombre));

// } else if (busquedaDeProducto === 2) {

//     let productoElegidoPorPrecio = parseInt(prompt('Ingresa el precio aproximado que buscas, te mostramos las opciones de precio mas bajas'));
//     let productoMasBajo = productos.filter((producto) => producto.precio < productoElegidoPorPrecio);
//      console.log(productoMasBajo);

// } else if (busquedaDeProducto === 3) {

//     let productoElegidoPorGoma = prompt('elegi el nombre de la goma que quieras buscar')
//     console.log(productos.filter((producto) => producto.goma === productoElegidoPorGoma))

// } else if (busquedaDeProducto === 4) {
//     alert('de acuerdo, continuemos con la compra')

// } else {
//     alert('lo sentimos, lo ingresado no es valido, continuemos a la compra')
// }
// const carrito = [];

// let entrada = '';

// while (entrada.toLowerCase() !== 'salir') {
//     entrada = prompt('Ingrese el nombre del producto que desea agregar al carrito (escriba "salir" para terminar):');

//     if (entrada.toLowerCase() === 'salir') {
//         alert('a continuacion, por consola, te mostramos los productos seleccionados, gracias por visitarnos');
//         continue
//     }

//     let productoSeleccionado = productos.find(producto => producto.nombre === entrada);

//     if (productoSeleccionado) {
//         console.log(`Precio del producto "${productoSeleccionado.nombre}": ${productoSeleccionado.precio}`);

//         let unidades = parseInt(prompt(`Ingrese la cantidad de "${productoSeleccionado.nombre}" que desea agregar al carrito:`));

//         carrito.push({
//             nombre: productoSeleccionado.nombre,
//             precio: productoSeleccionado.precio,
//             unidades: unidades
//         });
//         console.log('Producto agregado al carrito.');
//     } else {
//         console.log('El producto ingresado no existe.');
//     }
// }

// console.log(carrito);

// carrito.forEach((carritoFinal) => {
//     console.log(`producto: ${carritoFinal.nombre}, las unidades que te llevas son ${carritoFinal.unidades} y el total a pagar es de ${carritoFinal.unidades * carritoFinal.precio} `)
// })
// const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0)
// console.log(`el total a pagar por tu compra es de ${total}`)
