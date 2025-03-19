// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim(); // Elimina espacios en blanco al inicio y al final

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombresAmigos.push(nombre);
    nombreInput.value = "";
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    nombresAmigos.forEach(nombre => {
        const itemLista = document.createElement("li");
        itemLista.textContent = nombre;
        listaAmigos.appendChild(itemLista);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (nombresAmigos.length < 2) {
        alert("Necesitas al menos dos amigos para realizar el sorteo.");
        return;
    }

    const amigoSecreto = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)];
    mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `Tu amigo secreto es: ${amigo}`;
    resultadoLista.appendChild(itemResultado);
}