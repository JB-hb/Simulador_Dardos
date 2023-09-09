import { useState } from "react";
import { Diana } from "./hooks/diana.mjs";
import { Coordenadas } from "./hooks/coordenadas.mjs";
import { useCallback } from "react";

const diana = new Diana();
let puntuaciones = {};

// Inicializa las puntuaciones con 0
for (let i = 0; i <= 60; i++) {
  puntuaciones = { ...puntuaciones, [i]: 0 };
}

function App() {
  const [notificacion, setNotificacion] = useState({ message: "" });
  const [puntajeActual, setPuntajeActual] = useState(null);
  const [mostrarDardo, setMostrarDardo] = useState(false); // Estado para mostrar u ocultar el círculo del dardo
  const [coordenadas, setCoordenadas] = useState(new Coordenadas()); // Estado para almacenar las coordenadas del mouse
  const actualizarPuntos = useCallback(() => {
    const coord = new Coordenadas();
    const puntos = diana.getPuntos(coord);
    puntuaciones = { ...puntuaciones, [puntos]: puntuaciones[puntos] + 1 };
    setNotificacion({ message: `Has hecho: ${puntos} puntos` });
    setPuntajeActual(puntos);
    setCoordenadas(coord);
    // Mostrar el círculo del dardo durante un breve período de tiempo
    setMostrarDardo(true);
    setTimeout(() => {
      setMostrarDardo(false);
    }, 4000); // Cambia esto según la duración que desees para mostrar el círculo del dardo
  }, []);

  return (
    <div className="text-center m-8">
      <div style={{ position: "relative" }}>
        <img
          src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4572.png"
          alt=""
          className="mx-auto mb-8"
        />
        {mostrarDardo && (
          <div
            className="w-4 h-4 bg-blue-500 rounded-full border border-white"
            style={{
              position: "absolute",
              top: `${50 - coordenadas.getY()}%`,
              left: `${50 - coordenadas.getX()}%`,
            }}
          ></div>
        )}
      </div>
      <button
        onClick={actualizarPuntos}
        className="bg-gray-900 text-white px-8 py-2 rounded"
      >
        Tirar
      </button>
      <p>{notificacion.message}</p>
      <table className="min-w-full border border-gray-300 mt-8">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Puntajes</th>
            <th className="border border-gray-300 p-2">Nro de veces</th>
            <th className="border border-gray-300 p-2">Probabilidad</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(puntuaciones).map((puntaje, index) => (
            <tr
              key={index}
              className={puntaje == puntajeActual ? "bg-green-200" : ""}
            >
              <td className="border border-gray-300 p-2">{puntaje}</td>
              <td className="border border-gray-300 p-2">
                {puntuaciones[puntaje]}
              </td>
              <td className="border border-gray-300 p-2">
                {(puntuaciones[puntaje] * 100) / 10000}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
