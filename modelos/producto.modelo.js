import { db } from '../configuracion/firebase.js';
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';

const NOMBRE_COLECCION = 'productos';

// Trae todos los productos de la base de datos
export const traerTodosLosProductos = async () => {
  let productos = [];
  try {
    const referencia = collection(db, NOMBRE_COLECCION);
    const resultado = await getDocs(referencia);
    resultado.forEach((documento) => {
      productos.push({ id: documento.id, ...documento.data() });
    });
  } catch (error) {
    console.log('Error al traer productos:', error);
  }
  return productos;
};

// Trae un producto por su ID
export const traerProductoPorId = async (id) => {
  try {
    const referencia = doc(db, NOMBRE_COLECCION, id);
    const documento = await getDoc(referencia);
    if (!documento.exists()) return null;
    return { id: documento.id, ...documento.data() };
  } catch (error) {
    console.log('Error al buscar producto por ID:', error);
    return null;
  }
};

// Agrega un producto nuevo
export const agregarProducto = async (datos) => {
  try {
    const referencia = collection(db, NOMBRE_COLECCION);
    const docRef = await addDoc(referencia, datos);
    const nuevoDoc = await getDoc(docRef);
    return { id: nuevoDoc.id, ...nuevoDoc.data() };
  } catch (error) {
    console.log('Error al agregar producto:', error);
    return null;
  }
};

// Elimina un producto por su ID
export const eliminarProducto = async (id) => {
  try {
    const referencia = doc(db, NOMBRE_COLECCION, id);
    await deleteDoc(referencia);
  } catch (error) {
    console.log('Error al eliminar producto:', error);
  }
}; 