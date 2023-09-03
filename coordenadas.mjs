//Clase que simulara las coordenadas de los dardos a partir de numeros 
//aleatorios

export class Coordenadas{
	constructor(){
		this.coordenadas = this.randomizar()
	}

	randomizar(){
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

	getCoordenadas(){
		return this.coordenadas
	}

	getX(){
		return this.coordenadas[0]
	}

	getY(){
		return this.coordenadas[1]
	}
}
