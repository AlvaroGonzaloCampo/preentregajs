let moto1 = 8500000;
let moto2 = 9000000;
let moto3 = 9500000;
let moto4 = 10000000;
let voge550ds = "Voge 550ds";
let voge550dsx = "Voge 550dsx";
let voge650ds = "Voge 650ds";
let voge650dsx = "Voge 650dsx";
let cmoto1 = 0;
let cmoto2 = 0;
let cmoto3 = 0;
let cmoto4 = 0;
let carrito = 0;
let agregar = "";
let listacarrito = "";

function eleccion(moto, nombre) {
    console.log(`El precio de la moto ${nombre} es de $${moto} millones`);
    agregar = prompt("Te gustaría agregarla al carrito?\nSi\nNo").toLowerCase();
    if (agregar !== "si" && agregar !== "no") {
        console.log("Por favor, ingresa 'si' o 'no'");
        agregar = prompt("Te gustaría agregarla al carrito?\nSi\nNo").toLowerCase();
    }
}

function sumar(moto) {
    carrito += moto;

    switch (moto) {
        case moto1:
            cmoto1++;
            break;
        case moto2:
            cmoto2++;
            break;
        case moto3:
            cmoto3++;
            break;
        case moto4:
            cmoto4++;
            break;
    }
}

function sumarcarrito() {
    listacarrito = "";

    if (cmoto1 > 0) {
        listacarrito += `\n${cmoto1} ${voge550ds}`;
    }
    if (cmoto2 > 0) {
        listacarrito += `\n${cmoto2} ${voge550dsx}`;
    }
    if (cmoto3 > 0) {
        listacarrito += `\n${cmoto3} ${voge650ds}`;
    }
    if (cmoto4 > 0) {
        listacarrito += `\n${cmoto4} ${voge650dsx}`;
    }
}

function calcularTotal() {
    return (cmoto1 * moto1) + (cmoto2 * moto2) + (cmoto3 * moto3) + (cmoto4 * moto4);
}

do {
    let opcion = parseInt(prompt("¿Qué moto le gustaría comprar?\n1. Voge 550ds\n2. Voge 550dsx\n3. Voge 650ds\n4. Voge 650dsx\n5. Ver mi carrito\n6. Salir"));

    switch (opcion) {
        case 1:
            eleccion(moto1, voge550ds);
            if (agregar === "si") {
                sumar(moto1);
            }
            break;
        case 2:
            eleccion(moto2, voge550dsx);
            if (agregar === "si") {
                sumar(moto2);
            }
            break;
        case 3:
            eleccion(moto3, voge650ds);
            if (agregar === "si") {
                sumar(moto3);
            }
            break;
        case 4:
            eleccion(moto4, voge650dsx);
            if (agregar === "si") {
                sumar(moto4);
            }
            break;
        case 5:
            sumarcarrito();
            carrito = calcularTotal();
            console.log(`Tu carrito contiene lo siguiente:\n${listacarrito}\nEl total de tu carrito es de $${carrito}`);
            break;
        case 6:
            console.log("Gracias por tu compra. ¡Hasta luego!");
            break;
        default:
            console.log("Opción no válida. Por favor, elige una opción entre 1 y 6.");
    }

} while (opcion !== 6);