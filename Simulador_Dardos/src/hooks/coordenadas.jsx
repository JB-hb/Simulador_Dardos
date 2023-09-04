//Clase que simulara las coordenadas de los dardos a partir de numeros 
//aleatorios

export const useCoordenadas = () => {

	const coordenadas = randomizar()

	const randomizar = () => {
		const cord = []
		for(let i = 0; i < 2; i++){
			const signo = parseInt(Math.random() * (1 - 0 + 1) + 0)
			if (signo === 1){
				cord.push((-1)*parseFloat(((Math.random()*(11 - 0) + 0)).toFixed(2)))
			}else{
				cord.push(parseFloat(((Math.random()*(11 - 0) + 0)).toFixed(2)))
			}
		}
		return cord
	}

	const getCoordenadas = () => {
		return this.coordenadas
	}

	const getX = () => {
		return this.coordenadas[0]
	}

	const getY = () => {
		return this.coordenadas[1]
	}

	return {getCoordenadas, getX, getY}
}
