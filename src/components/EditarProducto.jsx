import { useState, useEffect } from "react";
import Styles from "./EditarProducto.module.css";   

const EditarProducto = ({productoSeleccionado, onActualizar}) => {
  
  const [producto, setProducto] = useState(productoSeleccionado || {
    nombre: '',
    precio: '',
    imagen: '',
    descripcion: ''
  });

  const API = "https://690bf8e96ad3beba00f6bbf1.mockapi.io/Productos";

  useEffect(() => {
    if (productoSeleccionado)
      setProducto(productoSeleccionado);

  },[productoSeleccionado]);

  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

  const manejarSubmit = async (evento) => {
    evento.preventDefault();
    try {
      const respuesta = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) throw new Error("Error al actualizar el producto");

      const datos = await respuesta.json();
      onActualizar(datos);
      alert("Producto actualizado correctamente.");
      
    } catch (error) {
      console.error(error.message);
      alert("Hubo un error al actualizar producto.");
    }
  };

  return (
    <form onSubmit={manejarSubmit} className={Styles.formulario}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <br/>
        <input
          type="text"
          name="nombre"
          value={producto.nombre || ''}
          onChange={manejarChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <br/>
        <input
          type='number'
          name='precio'
          value={producto.precio || ''}
          onChange={manejarChange}
          required
          min='0'
          step='any'
        />
      </div>
      <div>
        <label>URL de Imagen:</label>
        <br/>
        <input
          type='text'
          name='imagen'
          value={producto.imagen}
          onChange={manejarChange}    
        />
      </div>
      <div>
        <label>Descripción:</label>
        <br/>
        <textarea
          name="descripcion"
          value={producto.descripcion || ''}
          onChange={manejarChange}
          required
        />
      </div>
      <button type="submit">Actualizar Producto</button>
    </form>
  );
}

export default EditarProducto;