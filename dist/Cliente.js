export default class Cliente {
    constructor(nombre, fechaNacimiento, email, contrasena, peliculaFavorita, generosFavoritos) {
        this.email = "";
        this.contrasena = "";
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.setEmail(email);
        this.setContrasena(contrasena);
        this.peliculaFavorita = peliculaFavorita;
        this.generosFavoritos = generosFavoritos;
    }
    getNombre() {
        return this.nombre;
    }
    getFechaNacimiento() {
        return this.fechaNacimiento;
    }
    getEmail() {
        return this.email;
    }
    getContrasena() {
        return this.contrasena;
    }
    getPeliculaFavorita() {
        return this.peliculaFavorita;
    }
    getGenerosFavoritos() {
        return this.generosFavoritos;
    }
    setEmail(email) {
        if (this.isValidEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Correo electrónico no válido");
        }
    }
    setContrasena(contrasena) {
        if (this.isValidContrasena(contrasena)) {
            this.contrasena = contrasena;
        }
        else {
            throw new Error("La contraseña debe contener mayúsculas, minúsculas, números y al menos 8 caracteres");
        }
    }
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    isValidContrasena(contrasena) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena);
    }
}
//# sourceMappingURL=Cliente.js.map