import { loginServicio } from '../servicios/auth.servicio.js';

export const login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const token = await loginServicio(correo, contraseña);
    if (!token) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }
    res.json({ token });
  } catch (error) {
    console.error('Error en el proceso de autenticación:', error);
    res.status(500).json({ mensaje: 'Error en el proceso de autenticación' });
  }
}; 