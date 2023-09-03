//Clase del objeto franja el cual almacena todas las franjas de la diana
//y cuantos puntos vale

export class Franja{
	constructor(puntos, anguloMaximo, anguloMinimo){
		this.puntos = puntos
		this.anguloMaximo = anguloMaximo
		this.anguloMinimo = anguloMinimo
	}

	isFranja(angulo){
		if(angulo > this.anguloMinimo && angulo < this.anguloMaximo){
			return true
		}else{
			return false
		}
	}

	getPuntos(){
		return this.puntos
	}
}
