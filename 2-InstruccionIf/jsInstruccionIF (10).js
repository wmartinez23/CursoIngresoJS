function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var randomNumber;

	randomNumber = Math.floor(Math.random() * 10) + 1;

	if(randomNumber >= 9){
		alert(randomNumber + ": " + "Excelente");
	} else if (randomNumber >= 4 && randomNumber <= 8){
		alert(randomNumber + ": " + "Aprobó");
	} else {
		alert(randomNumber + ": " + "Vamos, para la próxima se puede");
	}

}//FIN DE LA FUNCIÓN