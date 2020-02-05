/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var valorAumento;
    var total;

    sueldo = parseFloat(document.getElementById("sueldo").value);

    valorAumento = parseFloat(sueldo / 10);

    total = parseFloat(sueldo + valorAumento);

    document.getElementById("resultado").value = total;
}
