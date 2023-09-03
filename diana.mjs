//Clase que modelara la diana del juego de dardos en donde se retornara los
//puntos del lanzamiento

import {Franja} from './franja.mjs'

export class Diana{
	constructor(){
		this.franjas = this.setFranjas()
	}

	setFranjas(){
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

	getFranjas(){
		return this.franjas
	}

	getSeccion(coordenadas, hipotenusa){
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
		for(let i in this.getFranjas()){
			if(this.getFranjas()[i].isFranja(angulo) === true){
				return this.getFranjas()[i]
			}
		}	
	}

	getPuntos(coordenadas){
		const distancia = Math.sqrt(Math.pow(coordenadas.getX(), 2) + Math.pow(coordenadas.getY(),2))
		if(distancia < 1 ){
			return 50
		}else if (distancia < 2 && distancia > 1){
			return 25
		}else if ((distancia < 6 && distancia > 2)||(distancia < 10 && distancia > 7)){
			const base = this.getSeccion(coordenadas, distancia)
			return base.getPuntos()		
		}else if (distancia > 6 && distancia < 7){
			const base = this.getSeccion(coordenadas, distancia)
			return base.getPuntos() * 3		
		}else if(distancia > 10 && distancia < 11){
			const base = this.getSeccion(coordenadas, distancia)
			return base.getPuntos() * 2		
		}else{
			return 0
		}
	}
}
