import { useState } from "react";

import Productos from "../Productos";
import Carrito from "../Carrito";

const Inicio = () => {

    const [carrito, setCarrito]= useState([])

    const agregarProducto = (producto)=>{
        setCarrito([...carrito, producto]);

    }
    const eliminarProducto= (indiceAEliminar) => {
        setCarrito(carrito.filter((_, id) => id !== indiceAEliminar))
    }
    

return (
    <div>
        <Productos agregarAlCarrito={agregarProducto}/>
        <Carrito 
                productoEnCarrito={carrito}
                eliminarDelCarrito={eliminarProducto}
        />
    </div>
);
}

export default Inicio;
