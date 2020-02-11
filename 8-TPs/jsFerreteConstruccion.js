/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
// Largo Ancho Radio
function Rectangulo () 
{
    // Declarar variables
    var largo;
    var ancho;
    var rectangulo;

    // Obtencion de datos
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    // Operación
    rectangulo = ((largo + ancho) * 2) * 3;

    alert(rectangulo);
}
function Circulo () 
{
	
}
function Materiales () 
{
	
}