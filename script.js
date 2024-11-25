// Seleccionar botones y elementos del DOM
const buttons = document.querySelectorAll("a");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const parrafo = document.getElementById("parrafo");
const img = document.getElementById("imagen");

// Cargar los datos del JSON
fetch("./ciudades.json")
  .then((res) => res.json())
  .then((data) => {
    // Asignar un evento único a cada botón
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Eliminar la clase activa de todos los botones
        buttons.forEach((btn) => {
          btn.classList.remove("active");
        });
        // Añadir la clase activa al botón actual
        button.classList.add("active");

        // Buscar la ciudad correspondiente en los datos
        const ciudadData = data.find(
          (ciudad) => ciudad.ciudad === button.innerText
        );

        // Si se encuentra la ciudad, actualizar el contenido
        if (ciudadData) {
          img.src = ciudadData.imagen || "no hay imagen";
          img.alt = ciudadData.ciudad;
          titulo.innerHTML = ciudadData.titulo || "Título no disponible";
          subtitulo.innerHTML =
            ciudadData.subtitulo || "Subtítulo no disponible";
          parrafo.innerHTML = ciudadData.parrafo || "Contenido no disponible";
        } else {
          console.error(
            "No se encontró información para la ciudad seleccionada."
          );
        }
      });
    });
  })
  .catch((err) => {
    console.error("Error al cargar o procesar los datos:", err.message);
  });
