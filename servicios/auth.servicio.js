import { buscarUsuarioPorCorreo } from '../modelos/usuario.modelo.js';
import jwt from 'jsonwebtoken';

export const loginServicio = async (correo, contraseña) => {
  const usuario = await buscarUsuarioPorCorreo(correo);
  if (!usuario || usuario.contraseña !== contraseña) {
    return null;
  }
  const token = jwt.sign({ id: usuario.id, correo: usuario.correo }, process.env.JWT_SECRETO, { expiresIn: '1h' });
  return token;
}; 