function mostrar()
{
    //elPrecioFinal
    var precio;
    var descuento;

    precio = parseInt(prompt("Ingrese precio:"));
    descuento = parseInt(prompt("Ingrese porcentaje de descuento:"));

    document.getElementById("elPrecioFinal").value = (precio * descuento) /100;
}
