// --- Menú responsive ---
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// --- Subir producto a galería ---
const form = document.getElementById("productoForm");
const galeria = document.getElementById("galeria-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("imagenProducto");
    const nombre = document.getElementById("nombreProducto").value;
    const descripcion = document.getElementById("descripcionProducto").value;

    if (fileInput.files.length === 0) {
        alert("Por favor selecciona una imagen");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

    productoDiv.innerHTML = `
        <img src="${e.target.result}" alt="${nombre}">
        <h4>${nombre}</h4>
        <p>${descripcion}</p>
    `;

    galeria.appendChild(productoDiv);
    };

    reader.readAsDataURL(file);
    form.reset();
});

