 // Función para alternar la visibilidad de los botones "Opciones"
      function toggleOpciones() {
        const opcionesMd = document.getElementById("opcionesMd");
        opcionesMd.classList.toggle("d-none"); // Alterna la visibilidad de los botones
      }

      document.addEventListener("DOMContentLoaded", function () {
        const navbarContent = document.getElementById("navbarContent");
        const opcionesMd = document.getElementById("opcionesMd");

        // Evento para cerrar los botones cuando el menú hamburguesa se colapsa
        navbarContent.addEventListener("hidden.bs.collapse", function () {
          opcionesMd.classList.add("d-none"); // Oculta los botones cuando se cierra el menú
        });
      });
  