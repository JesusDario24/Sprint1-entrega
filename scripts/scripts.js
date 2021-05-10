var cantidad = 0;
var descuento = 0;
var computador = 0;
var mensaje = "No tiene descuento";
var mensajeDos = "Tienes descuento del 15%";
var mensajeTres = "Tienes descuento del 25%";
var mensajeCuatro = "Tienes descuento del 35%"

function Calcular() {
    cantidad = document.getElementById('idCantidad').value;


    if (cantidad >= 2 && cantidad <= 4) {
        compra = cantidad * 820000;
        descuento = compra * 0.015;
        document.getElementById('idValorCompra').value = compra;
        document.getElementById('idDescuento').value = compra * 0.015;
        document.getElementById('idTotal').value = compra - descuento;
        document.querySelector('h4').innerHTML = mensajeDos;
    } else if (cantidad > 4 && cantidad <= 6) {
        compra = cantidad * 820000;
        descuento = compra * 0.025;
        document.getElementById('idValorCompra').value = compra;
        document.getElementById('idDescuento').value = descuento;
        document.getElementById('idTotal').value = compra - descuento;
        document.querySelector('h4').innerHTML = mensajeTres;
    } else if (cantidad > 6 && cantidad <= 12) {
        compra = cantidad * 820000;
        descuento = compra * 0.035;
        document.getElementById('idValorCompra').value = compra;
        document.getElementById('idDescuento').value = descuento;
        document.getElementById('idTotal').value = compra - descuento;
        document.querySelector('h4').innerHTML = mensajeCuatro;
    } else if (cantidad > 12) {
        compra = cantidad * 820000;
        document.getElementById('idValorCompra').value = compra;
        document.getElementById('idDescuento').value = 0;
        document.getElementById('idTotal').value = compra;

    } else {
        cantidad >= 1;
        compraUno = cantidad * 820000;
        document.getElementById('idValorCompra').value = compraUno;
        document.getElementById('idDescuento').value = 0;
        document.getElementById('idTotal').value = compraUno;

    }


}


