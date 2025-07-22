import { db } from '../configuracion/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

const NOMBRE_COLECCION = 'usuarios';

// Busca un usuario por su correo
export const buscarUsuarioPorCorreo = async (correo) => {
  try {
    const referencia = collection(db, NOMBRE_COLECCION);
    const consulta = query(referencia, where('correo', '==', correo));
    const resultado = await getDocs(consulta);
    if (resultado.empty) return null;
    const documento = resultado.docs[0];
    return { id: documento.id, ...documento.data() };
  } catch (error) {
    console.log('Error al buscar usuario por correo:', error);
    return null;
  }
}; 