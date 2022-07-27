let op;
let suma = 0;
let nombre;
let lista = "Productos seleccionados:"
function ingresarNombre(){
    nombre = prompt("Ingresa tu nombre: ");
    alert("Hola " + nombre + " bienvenido");
}
function mostrarCarrito(){
    alert(nombre + ", este es tu carrito \n" + lista + "\n" + "El total de tus productos es: " + suma);
}

ingresarNombre();
do{
    let num = Number(prompt('Elige un producto por su número: 1.Monitor 2.Mouse 3.Teclado 4.Impresora 5.Cámara fotográfica'));
    switch(num){
        case 1:
            op = Number(prompt("Seleccionaste Monitor, el precio es de $3,800 MXN. Escibe 1 para agregar al carrito o 2 para salir del producto"));
            if(op == 1){
                suma = suma + 3800;
                lista = lista + " Monitor,"
                break;
            }
            else{
                break;
            }
        case 2:
            op = Number(prompt("Seleccionaste Mouse, el precio es de $620 MXN. Escibe 1 para agregar al carrito o 2 para salir del producto"));
            if(op == 1){
                suma = suma + 620;
                lista = lista + " Mouse,"
                break;
            }
            else{
                break;
            }
        case 3:
            op = Number(prompt("Seleccionaste Teclado, el precio es de $1800 MXN. Escibe 1 para agregar al carrito o 2 para salir del producto"));
            if(op == 1){
                suma = suma + 1800;
                lista = lista + " Teclado,"
                break;
            }
            else{
                break;
            }
        case 4:
            op = Number(prompt("Seleccionaste Impresora, el precio es de $4200 MXN. Escibe 1 para agregar al carrito o 2 para salir del producto"));
            if(op == 1){
                suma = suma + 4200;
                lista = lista + " Impresora,"
                break;
            }
            else{
                break;
            }
        case 5:
            op = Number(prompt("Seleccionaste Cámara Fotográfica, el precio es de $7159 MXN. Escibe 1 para agregar al carrito o 2 para salir del producto"));
            if(op == 1){
                suma = suma + 7159;
                lista = lista + " Cámara Fotográfica,"
                break;
            }
            else{
                break;
            }
        default:
            alert('El producto seleccionado no está disponible');
            break;
    }
    op = Number(prompt('Quieres revisar otro producto? 1.SI 2.NO'));
}while (op == 1);
 mostrarCarrito();