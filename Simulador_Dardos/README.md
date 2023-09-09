# Documentación de la Aplicación de Dardos

Esta documentación proporciona una descripción general del código de la aplicación de dardos, que permite simular el lanzamiento de dardos a una diana y realizar un seguimiento de las puntuaciones.

## Componentes Principales

### `App`

El componente `App` es el componente principal de la aplicación. Aquí se define la funcionalidad principal y la interfaz de usuario de la aplicación.

#### Estado

- `notificacion`: Un estado que almacena un objeto con un mensaje de notificación.
- `puntajeActual`: Un estado que almacena el puntaje actual del lanzamiento.
- `mostrarDardo`: Un estado booleano para mostrar u ocultar el círculo del dardo en la diana.
- `coordenadas`: Un estado que almacena las coordenadas del punto (dardo) en la diana.

#### Funciones

- `actualizarPuntos`: Una función de retorno de llamada que se ejecuta cuando se hace clic en el botón "Tirar". Calcula las puntuaciones, actualiza el estado y muestra el círculo del dardo en la diana.

### Estado Inicial

- `diana`: Una instancia de la clase `Diana` utilizada para calcular las puntuaciones.
- `puntuaciones`: Un objeto que almacena las puntuaciones con un puntaje como clave y el número de veces que se ha alcanzado ese puntaje como valor.

### Clases
- `Coordenadas`: Clase que simula las coordenadas de los dardos a partir de números aleatorios.

## Métodos:
- `randomizar()`: Genera coordenadas aleatorias X e Y dentro de los límites de la diana.
- `getCoordenadas()`: Devuelve las coordenadas como un arreglo.
- `getX()`: Devuelve la coordenada X.
- `getY()`: Devuelve la coordenada Y.

- `Diana`: Clase que modela la diana del juego de dardos y calcula los puntos del lanzamiento.

## Métodos:
- `setFranjas()`: Establece las franjas de la diana y sus respectivos puntos.
- `getFranjas()`: Devuelve las franjas de la diana.
- `getSeccion(coordenadas, hipotenusa)`: Calcula la sección de la diana en la que cae el dardo basado en las coordenadas.
- `getPuntos(coordenadas)`: Calcula los puntos del lanzamiento basado en las coordenadas del dardo y la distancia al centro de la diana.

- `Franja`: Clase que representa una franja en la diana y almacena cuántos puntos vale.

## Métodos:
- `isFranja(angulo)`: Verifica si un ángulo está dentro de los límites de la franja.
- `getPuntos()`: Devuelve la cantidad de puntos que vale la franja.

## Interfaz de Usuario

La interfaz de usuario se compone de los siguientes elementos:

- Una imagen de una diana de dardos.
- Un botón "Tirar" para realizar un lanzamiento.
- Una notificación que muestra el puntaje obtenido en el lanzamiento.
- Una tabla que muestra las puntuaciones acumuladas y la probabilidad de cada puntaje.

## Funcionamiento

1. Al hacer clic en el botón "Tirar", se generan coordenadas aleatorias dentro de los límites de la diana y se calcula el puntaje del lanzamiento utilizando la instancia de `Diana`.

2. El puntaje se actualiza en el estado y se muestra en la notificación.

3. Se muestra un círculo (representando el dardo) en la diana en las coordenadas calculadas.

4. Después de un breve período de tiempo (ajustable), el círculo desaparece y se puede realizar otro lanzamiento.

5. Se lleva un seguimiento de las puntuaciones acumuladas en la tabla.

## Personalización

Puedes personalizar la duración de la visualización del círculo del dardo y los estilos CSS según tus preferencias. pero calcula bien las dimensiones, sino dara error, no cambies la longitud de un ciclo ya que puede colapsar la aplicacion

---

