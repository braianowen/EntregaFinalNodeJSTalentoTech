import {
  obtenerTodosLosProductos,
  obtenerProductoPorIdServicio,
  crearProductoServicio,
  eliminarProductoServicio
} from '../servicios/productos.servicio.js';

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await obtenerTodosLosProductos();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ mensaje: 'Error al obtener los productos' });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await obtenerProductoPorIdServicio(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el producto' });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = await crearProductoServicio(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    await eliminarProductoServicio(req.params.id);
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el producto' });
  }
}; 