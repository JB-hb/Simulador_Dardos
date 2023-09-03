//Modulo que va a correr todas los modulos del programa

import {Diana} from './diana.mjs'
import {Coordenadas} from './coordenadas.mjs'

const diana = new Diana()
let puntuaciones = {}

for (let i = 0; i <= 60; i++){
	puntuaciones = {...puntuaciones, [i] : 0}
}

for (let i = 0; i < 10000; i++){
	const coord = new Coordenadas()
	const puntos = diana.getPuntos(coord)
	puntuaciones = {...puntuaciones, [puntos]:puntuaciones[puntos] + 1}
}

console.log(`10000 Lanzamientos`)
for(let i in puntuaciones){
	console.log(`${i} -> ${puntuaciones[i]} veces -> probabilidad: ${puntuaciones[i]*100/10000}%`)
}
