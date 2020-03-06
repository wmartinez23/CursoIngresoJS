function mostrar()
{
    var altura = 0;
    var sexo = "";
    var sumaAlturas = 0;
    var alturaBaja = 250;
    var promedioAltura;
    var sexoBajo;
    var cantidadMujeres = 0;

    for(var i = 0; i < 5 ; i++){
        altura = parseInt(prompt("Ingrese altura en Centimetros (0/250): "));
        while(altura <= 0 || altura > 250){
            altura = prompt("Altura invalida. Ingrese altura en Centimetros (0/250): ");
        }
        sexo = prompt("Ingrese sexo (f/m): ");
        while(sexo != "f" && sexo != "m"){
            sexo = prompt("Sexo invalido. Ingrese sexo (f/m): ");
        }
        
        // A
        sumaAlturas = parseInt(sumaAlturas + altura);
        // END A

        // B
        if(altura < alturaBaja){
            alturaBaja = altura;
            sexoBajo = sexo;
        }
        // END B 

        // C
        
        if(sexo == "f" && altura > 190){
            cantidadMujeres++;
        }
        // END C
    }
    // Operacion A
    promedioAltura = sumaAlturas / 5;

    document.write("A) El promedio de las alturas totales es: " + promedioAltura + "<br/>" +
    "B) La altura más baja es: " + alturaBaja + " y su sexo es: " + sexoBajo + "<br/>" +
    "C) La cantidad de mujeres que su altura supere los 190cm es: " + cantidadMujeres);
}
