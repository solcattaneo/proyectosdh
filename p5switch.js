/* function tengoClases(dia) {
	switch (dia) {
    	case "lunes" :
		case "miércoles" : 
		case "viernes" :
			console.log("tenés clases")
			break;
		default:	
			console.log("no tenés clases")
	}
}
tengoClases("sábado"); */

function noParesDeContarImparesHasta(numero){
    let impares = 0
    for (let i = 1; i<= numero; i+=2){
        impares = impares + 1;
    }
    return (impares)
}
console.log (noParesDeContarImparesHasta(3))