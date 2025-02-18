export default class Cliente {
  private nombre: string;
  private fechaNacimiento: Date;
  private email: string = "";
  private contrasena: string = "";
  private peliculaFavorita: string;
  private generosFavoritos: string[];

  constructor(nombre: string, fechaNacimiento: Date, email: string, contrasena: string, peliculaFavorita: string, generosFavoritos: string[]) {
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
      this.setEmail(email);
      this.setContrasena(contrasena);
      this.peliculaFavorita = peliculaFavorita;
      this.generosFavoritos = generosFavoritos;
  }

  public getNombre(): string {
      return this.nombre;
  }

  public getFechaNacimiento(): Date {
      return this.fechaNacimiento;
  }

  public getEmail(): string {
      return this.email;
  }

  public getContrasena(): string {
      return this.contrasena;
  }

  public getPeliculaFavorita(): string {
      return this.peliculaFavorita;
  }

  public getGenerosFavoritos(): string[] {
      return this.generosFavoritos;
  }

  public setEmail(email: string): void {
      if (this.isValidEmail(email)) {
          this.email = email;
      } else {
          throw new Error("Correo electrónico no válido");
      }
  }

  public setContrasena(contrasena: string): void {
      if (this.isValidContrasena(contrasena)) {
          this.contrasena = contrasena;
      } else {
          throw new Error("La contraseña debe contener mayúsculas, minúsculas, números y al menos 8 caracteres");
      }
  }

  private isValidEmail(email: string): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private isValidContrasena(contrasena: string): boolean {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena);
  }
}
