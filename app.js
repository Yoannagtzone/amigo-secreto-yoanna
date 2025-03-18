let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");

    let nombre = amigoInput.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    amigos.push(nombre);
    amigoInput.value = ''; // Limpia el campo de entrada

    // ✅ ACTUALIZAR LA LISTA EN EL HTML
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

    amigos.forEach((nombre, index) => {
        let li = document.createElement('li'); // Crea un nuevo <li>
        li.textContent = nombre; // Asigna el nombre

        // 🔹 Agregar botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.onclick = function () {
            eliminarAmigo(index);
        };

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li); // Agrega el <li> a la lista en el HTML
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el amigo del array
    agregarAmigo(); // Vuelve a generar la lista actualizada
}

// ✅ FUNCIÓN PARA SORTEAR UN SOLO AMIGO CON ANIMACIÓN
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="loading">🔄 Sorteando...</li>`; // Animación de carga

    // ⏳ Simular espera antes de mostrar el resultado
    setTimeout(() => {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        resultado.innerHTML = `<li class="resultado-animado">🎉 ¡El amigo seleccionado es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
    }, 2000); // ⏳ Espera de 2 segundos
}

// ✅ Vincular eventos a los botones cuando cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});



    

       
 