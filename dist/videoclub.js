// Importa la clase cliente
import Cliente from "./Cliente.js";
// Array que contiene clientes
const clients = [
    new Cliente("Anna Zamora Rosales", new Date("1990-05-15"), "anna@example.com", "Password1", "Inception", ["Sci-Fi", "Thriller"]),
    new Cliente("Joan Miro Peñas", new Date("1985-08-20"), "joan@example.com", "Secure123", "The Matrix", ["Action", "Sci-Fi"]),
    new Cliente("Maria Roma Sanchez", new Date("1992-11-10"), "maria@example.com", "Test1234", "Titanic", ["Romance", "Drama"]),
];
// Obtener los clientes guardados en el localStorage o crear uno vacío si no hay
const clientesGuardados = JSON.parse(localStorage.getItem("clientes") || "[]");
// Verificar qué datos se recuperan
console.log("Clientes recuperados de localStorage:", clientesGuardados);
// Mostrar los clientes guardados o los predeterminados al cargar la página
function mostrarClients() {
    const clientList = document.getElementById("clientList");
    // Limpiar la lista de clientes antes de agregar los nuevos
    clientList.innerHTML = "";
    // Recrear las instancias de Cliente a partir de los datos guardados
    const clientesG = clientesGuardados.map((clienteData) => {
        return new Cliente(clienteData.nombre, new Date(clienteData.fechaNacimiento), clienteData.email, clienteData.contrasena, clienteData.peliculaFavorita, clienteData.generosFavoritos);
    });
    // Combina los clientes predeterminados con los guardados en localStorage
    const todosLosClientes = [...clients, ...clientesG];
    // Recorremos la lista combinada de clientes
    todosLosClientes.forEach(client => {
        try {
            // Verificamos si el email es válido antes de mostrarlo
            if (isValidEmail(client.getEmail())) {
                // Creamos un nuevo elemento de lista (li)
                const li = document.createElement("li");
                // Mostramos el nombre y el email
                li.textContent = `${client.getNombre()}: ${client.getEmail()}`;
                // Añadimos el nuevo elemento a la lista
                clientList.appendChild(li);
            }
        }
        catch (error) {
            // Si hay algún error, lo mostramos en consola
            console.error(error);
        }
    });
}
// Arrays para películas y videojuegos
const movies = [];
const games = [];
// Función flecha para validar emails
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// Función para añadir películas o videojuegos
function afegirProducte(productName, platform) {
    const input = document.getElementById("itemInput");
    const value = productName ? `${productName}${platform ? `,${platform}` : ""}` : input.value.trim();
    input.value = ""; // Limpiar el input después de agregar
    if (value.includes(",")) {
        const [gameName, gamePlatform] = value.split(",").map(v => v.trim());
        if (gameName && gamePlatform) {
            games.push(`${gameName} (${gamePlatform})`);
        }
    }
    else if (value) {
        movies.push(value);
    }
}
// Función para escribir en la tabla HTML
function escriureTaula(titol, objectes, objectes2) {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    const table = document.createElement("table");
    const header = document.createElement("tr");
    header.innerHTML = objectes2 ? "<th>Pel·lícules</th><th>Videojocs</th>" : `<th>${titol}</th>`;
    table.appendChild(header);
    const maxLength = Math.max(objectes.length, objectes2 ? objectes2.length : 0);
    for (let i = 0; i < maxLength; i++) {
        const row = document.createElement("tr");
        row.innerHTML = objectes2 ? `<td>${objectes[i] || ""}</td><td>${objectes2[i] || ""}</td>` : `<td>${objectes[i]}</td>`;
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}
// Función para mostrar los datos al hacer clic
function mostrarDades(tipus) {
    switch (tipus) {
        case "Pel·licules":
            escriureTaula(tipus, movies);
            break;
        case "Videojocs":
            escriureTaula(tipus, games);
            break;
        default:
            escriureTaula("Contingut", movies, games);
            break;
    }
}
// Funció per a redirigir al formulari
export function anarFormulari() {
    window.location.href = 'formulari.html';
}
//Funció per mostrar les respostes quan arriben per GET
function mostrarRespostesGET() {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    // Si hay datos en la URL, procesarlos
    if (urlParams.has("nom") && urlParams.has("dataNaixement") && urlParams.has("email") && urlParams.has("contrasena")) {
        const nombre = urlParams.get("nom");
        const fechaNacimiento = new Date(urlParams.get("dataNaixement"));
        const email = urlParams.get("email");
        const contrasena = urlParams.get("contrasena");
        const peliculaFavorita = urlParams.get("pelicula");
        const generosFavoritos = [];
        // Obtener todos los valores de "genere"
        const generos = urlParams.getAll("genere");
        //Se añaden los generos a la lista generos
        generos.forEach(genero => {
            if (genero === "ciencia-ficcio")
                generosFavoritos.push("Ciència-ficció");
            if (genero === "animacio")
                generosFavoritos.push("Animació");
            if (genero === "drama")
                generosFavoritos.push("Drama");
            if (genero === "terror")
                generosFavoritos.push("Terror");
            if (genero === "comedia")
                generosFavoritos.push("Comèdia");
            if (genero === "aventura")
                generosFavoritos.push("Aventura");
            if (genero === "accio")
                generosFavoritos.push("Acció");
            if (genero === "romantic")
                generosFavoritos.push("Romàntic");
        });
        // Crear un nuevo objeto Cliente
        const nuevoCliente = new Cliente(nombre, fechaNacimiento, email, contrasena, peliculaFavorita, generosFavoritos);
        // Añadir el nuevo cliente a la lista
        clientesGuardados.push(nuevoCliente);
        // Guardar la lista actualizada en el localStorage
        localStorage.setItem("clientes", JSON.stringify(clientesGuardados));
        // Se muestra en consola
        console.log("Cliente guardado correctamente", nuevoCliente);
        // Limpiar la URL (sin recargar la página)
        const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({}, document.title, cleanUrl);
        // Muestra la lista de clientes
        mostrarClients();
    }
}
// Funció per a carregar dades a l'inici
function carregarDades() {
    afegirProducte("Final Fantasy X", "PS2");
    afegirProducte("Pesadilla en Elm Street");
    mostrarClients();
    mostrarRespostesGET();
}
// Fer accessibles les funcions a l'entorn global
window.afegirProducte = afegirProducte;
window.mostrarDades = mostrarDades;
window.carregarDades = carregarDades;
window.anarFormulari = anarFormulari;
window.mostrarRespostesGET = mostrarRespostesGET;
// Limpiar el Local Storage
// localStorage.clear();
//# sourceMappingURL=videoclub.js.map