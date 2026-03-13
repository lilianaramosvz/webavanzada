export async function buscarPelicula(
  nombreUsuario,
  titulo,
  anio,
  tipo,
  genero,
) {
  const response = await fetch("http://localhost:8080/api/movies/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombreUsuario,
      titulo,
      anio,
      tipo,
      genero,
    }),
  });

  if (!response.ok) {
    throw new Error("Error en la petición al backend");
  }

  const data = await response.json();

  // el backend devuelve: { mensaje, resultados }
  if (data.resultados && data.resultados.length > 0) {
    return data.resultados[0];
  }

  throw new Error("No se encontraron resultados");
}
