/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declarando variables
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);
    resultado = precioUno + precioDos + precioTres;

    alert("La suma de los tres precios es: " + resultado);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);
    resultado = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio de los tres productos es: " + resultado);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var total;
    var iva;
    var resultado;

    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);
    total = precioUno + precioDos + precioTres;
    iva = total * 0.21;
    resultado = total + iva;
    alert("El precio final (más IVA 21%) es: " + resultado);
}