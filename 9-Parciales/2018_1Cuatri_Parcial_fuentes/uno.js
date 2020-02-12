
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    
    ancho = parseInt(prompt("Ingrese ancho:"));
    largo = parseInt(prompt("Ingrese largo:"));

    perimetro = (ancho + largo) * 2;

    alert("El perímetro es " + perimetro);
}
