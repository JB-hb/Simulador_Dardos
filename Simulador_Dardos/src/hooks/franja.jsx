//Clase del objeto franja el cual almacena todas las franjas de la diana
//y cuantos puntos vale

export const useFranja= (puntos, anguloMaximo, anguloMinimo) => {

	const puntos = puntos
	const anguloMaximo = anguloMaximo
	const anguloMinimo = anguloMinimo

	const isFranja = (angulo) => {
		if(angulo >= this.anguloMinimo && angulo <= this.anguloMaximo){
			return true
		}else{
			return false
		}
	}

	const getPuntos = () => {
		return this.puntos
	}

	return {isFranja, getPuntos}
}
