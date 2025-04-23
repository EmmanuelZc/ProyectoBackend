import bcrypt from 'bcrypt';

export default class Seguridad {
  static async hash(contrasena) {
    return bcrypt.hash(contrasena, 10);
  }
//aaaaaaaaaaaaaaaaaaaaaaa
  static async compararContrasena(contrasena, hash) {
    return bcrypt.compare(contrasena, hash);
  }
}

