/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
// Cantidad, Marca, precioDescuento
function CalcularPrecio () 
{
    // Declarar variables
     var precioLampara = 35;
     var cantidad;
     var precioTotal;
     var marca;
     var costoFinal;
     var impuesto;

    // Obtención de datos
    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    precioTotal = 35 * cantidad;

    // Operaciones
    switch (cantidad){
        case 6: //A
            costoFinal = precioTotal - ((precioTotal) * 0.50);
            break;    
        case 5: //B
            if(marca == "ArgentinaLuz"){
                costoFinal = precioTotal - ((precioTotal) * 0.40);
            } else if(marca != "ArgentinaLuz"){
                costoFinal = precioTotal - ((precioTotal) * 0.30);
            }
            break;
        case 4: //C
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                costoFinal = precioTotal - ((precioTotal) * 0.25);
            } else if(marca != "ArgentinaLuz" || marca != "FelipeLamparas"){
                costoFinal = precioTotal - ((precioTotal) * 0.20);
            }
            break;
        case 3: //D
            if(marca == "ArgentinaLuz"){
                costoFinal = precioTotal - ((precioTotal) * 0.15);
            } else if(marca == "FelipeLamparas"){
                costoFinal = precioTotal - ((precioTotal) * 0.10);
            } else {
                costoFinal = precioFinal - ((precioTotal) * 0.05);
            }
            break;
        default:
            costoFinal = precioTotal;
            break;
    }
    //E
    if(costoFinal >= 120){
        impuesto = (costoFinal) * 0.10;
        costoFinal = costoFinal + impuesto;
        alert("Usted pagó $" + impuesto + " de IIBB");
    }

    document.getElementById("precioDescuento").value = costoFinal;
}