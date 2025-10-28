import { createContext } from "react";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito]= useState([])

    const agregarAlCarrito = (producto)=>{
        setCarrito([...carrito, producto]);
    }   
    const eliminarProducto= (indiceAEliminar) => {
        setCarrito(carrito.filter((_, id) => id !== indiceAEliminar))
    }
    return (
        <CarritoContext.Provider
        value={{
                carrito,
                agregarAlCarrito,
                eliminarProducto
            }}
        >
            {children}
        </CarritoContext.Provider>
    )

}
