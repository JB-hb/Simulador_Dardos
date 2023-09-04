//Clase que modelara la diana del juego de dardos en donde se retornara los
//puntos del lanzamiento

import {useFranja} from './franja.jsx'

export const Diana = () => {
	
	franjas = setFranjas()

	const setFranjas = () => {
		const puntos = [6,13,4,18,1,20,5,12,9,14,11,8,16,7,19,3,17,2,15,10]
		const franjas = []
		let angulo = 0
		for(let i in puntos){
			const franja = new Franja(puntos[i],angulo + 9, angulo - 9)
			franjas.push(franja)
			angulo += 18
		}
		return franjas
	}

	const getFranjas = () => {
		return franjas
	}

	const getSeccion = (coordenadas, hipotenusa) => {
		let angulo = 0
		if (coordenadas.getX() >= 0){
			if (coordenadas.getY() >= 0){
				angulo = ((Math.asin(coordenadas.getY()/hipotenusa))*(180/Math.PI)) - 9
			}else{
				if((Math.asin(coordenadas.getY()/hipotenusa))*(180/Math.PI) - 9 > -9){
					angulo = (Math.asin(coordenadas.getY()/hipotenusa))*(180/Math.PI)
				}else{
					angulo = 360 + ((Math.asin(coordenadas.getY()/hipotenusa))*(180/Math.PI)) - 9 
				}
			}
		}else{
			if(coordenadas.getY() >= 0){
				angulo = 180 - 9 - ((Math.asin(coordenadas.getY()/hipotenusa))*(180/Math.PI))
			}else{
				angulo = 180 - ((Math.asin(coordenadas.getY()/hipotenusa))*(180/Math.PI)) - 9
			}
		}
		for(let i in getFranjas()){
			if(getFranjas()[i].isFranja(angulo) === true){
				return getFranjas()[i]
			}
		}	
	}

	const getPuntos = (coordenadas) => {
		const distancia = Math.sqrt(Math.pow(coordenadas.getX(), 2) + Math.pow(coordenadas.getY(),2))
		if(distancia < 1 ){
			return 50
		}else if (distancia < 2 && distancia > 1){
			return 25
		}else if ((distancia < 6 && distancia > 2)||(distancia < 10 && distancia > 7)){
			const base = getSeccion(coordenadas, distancia)
			return base.getPuntos()		
		}else if (distancia > 6 && distancia < 7){
			const base = getSeccion(coordenadas, distancia)
			return base.getPuntos() * 3		
		}else if(distancia > 10 && distancia < 11){
			const base = getSeccion(coordenadas, distancia)
			return base.getPuntos() * 2		
		}else{
			return 0
		}
	}

	return {getPuntos, getSeccion}
}	
