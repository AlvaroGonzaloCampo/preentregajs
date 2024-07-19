let moto1 = 8500000;
let moto2 = 9000000;
let moto3 = 9500000;
let moto4 = 10000000;
let voge550ds = "\nVoge 550ds";
let voge550dsx = "\nVoge 550dsx";
let voge650ds = "\nVoge 650ds";
let voge650dsx = "\nVoge 650dsx";
let cmoto1 = 0;
let cmoto2 = 0;
let cmoto3 = 0;
let cmoto4 = 0;
let carrito = 0;
let agregar = "";
let listacarrito = "";

function eleccion(moto) {
    console.log("El precio de la moto es de $" + moto + " millones");
    agregar = prompt("Te gustaría agregarla al carrito?\n Si \n No");
}

function sumar(moto) {
    carrito += moto;

    if (moto === moto1) {
        cmoto1++;
    }
    if (moto === moto2) {
        cmoto2++;
    }
    if (moto === moto3) {
        cmoto3++;
    }
    if (moto === moto4) {
        cmoto4++;
    }
}

function sumarcarrito() {
    listacarrito = "";

    if (cmoto1 > 0) {
        listacarrito += "\n" + cmoto1 + voge550ds;
    }
    if (cmoto2 > 0) {
        listacarrito +=  "\n" + cmoto2 + voge550dsx;
    }
    if (cmoto3 > 0) {
        listacarrito +=  "\n" + cmoto3 + voge650ds;
    }
    if (cmoto4 > 0) {
        listacarrito +=  "\n" + cmoto4 + voge650dsx;
    }
}

function carritof() {
    carrito += (cmoto1 * moto1) + (cmoto2 * moto2) + (cmoto3 * moto3) + (cmoto4 * moto4);
}

do {
    let opcion = parseInt(prompt("¿Qué moto le gustaría comprar?\n 1.Voge 550ds\n2.Voge 550dsx \n3.Voge 650ds\n4.Voge 650dsx\n5.Ver mi carrito \n6.Ninguna"));

    if (opcion === 1) {
        eleccion(moto1);
        if (agregar.toLowerCase() === "si") {
            sumar(moto1);
        }
    }
    if (opcion === 2) {
        eleccion(moto2);
        if (agregar.toLowerCase() === "si") {
            sumar(moto2);
        }
    }
    if (opcion === 3) {
        eleccion(moto3);
        if (agregar.toLowerCase() === "si") {
            sumar(moto3);
        }
    }
    if (opcion === 4) {
        eleccion(moto4);
        if (agregar.toLowerCase() === "si") {
            sumar(moto4);
        }
    }
    if (opcion === 5) {
        sumarcarrito();
        console.log("Tu carrito contiene lo siguiente:\n" + listacarrito + "\nEl total de tu carrito es de $" + carrito);
    }
    if (opcion === 6) {
        break;
    }

} while (true);