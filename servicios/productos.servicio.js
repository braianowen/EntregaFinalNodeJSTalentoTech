import {
  traerTodosLosProductos,
  traerProductoPorId,
  agregarProducto,
  eliminarProducto
} from '../modelos/producto.modelo.js';

export const obtenerTodosLosProductos = async () => {
  return await traerTodosLosProductos();
};

export const obtenerProductoPorIdServicio = async (id) => {
  return await traerProductoPorId(id);
};

export const crearProductoServicio = async (datos) => {
  return await agregarProducto(datos);
};

export const eliminarProductoServicio = async (id) => {
  return await eliminarProducto(id);
}; 