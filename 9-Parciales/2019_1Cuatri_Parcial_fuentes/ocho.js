function mostrar()
{
    var numero;
    var letra; 
    var numerosPar = 0;
    var numerosImpar = 0;
    var numerosCero = 0;
    var acumuladorPositivos = 0;
    var promedio;
    var acumuladorNegativos = 0;
    var numeroMin = 100;
    var letraMin;
    var numeroMax = -100;
    var letraMax;
    var cantidadOperaciones = 0;
    var continuar;

    do{
        numero = parseInt(prompt("Ingrese un número (-100/100):"));
        while(numero < -100 || numero > 100 || isNaN(numero)){
            numero = prompt("Número invalido. Ingrese un número (-100/100):");
        }
        letra = prompt("Ingrese una letra:");
        while(!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))){ 
            letra = prompt("No es una letra. Ingrese una letra:");
        }
        // A & B
        if(numero % 2 == 0){
            numerosPar++;
        } else{
            numerosImpar++;
        }
        // END A & B

        // C 
        if(numero == 0){
            numerosCero++;
        }
        // END C

        // D & E
        if(numero > 0){
            acumuladorPositivos = parseInt(acumuladorPositivos + numero);
        } else {
            acumuladorNegativos = parseInt(acumuladorNegativos + numero);
        }
        // END D & E

        // F
        if(numero > numeroMax){
            numeroMax = numero;
            letraMax = letra;
        }
        if(numero < numeroMin){
            numeroMin = numero;
            letraMin = letra;
        }
        // END F
        
        cantidadOperaciones++;
        continuar = prompt("Desea continuar? (s/n): ");
    } while(continuar == "s");

    // Operación D
    promedio = parseInt(acumuladorPositivos / cantidadOperaciones);

    document.write("A) " + parseInt(numerosPar) + "<br>" + "B) " + numerosImpar + "<br>" + "C) " + numerosCero + "<br>" +
    "D) " + promedio + "<br>" + "E) " + acumuladorNegativos + "<br>" + "F) Máximo: " + numeroMax + 
    " " + letraMax + " y Minimo: " + numeroMin + " " + letraMin + "<br>");
}
