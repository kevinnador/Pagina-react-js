import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // 🔥 Agregar producto con manejo de cantidad
    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
        const productoExistente = prevCarrito.find(
            (item) => item.id === producto.id
        );

        if (productoExistente) {
            // Si ya existe, aumentar cantidad
            return prevCarrito.map((item) =>
            item.id === producto.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            );
        }

        // Si NO existe, agregar con cantidad 1
        return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    // 🔥 Cambiar cantidad
    const cambiarCantidad = (id, nuevaCantidad) => {
        if (nuevaCantidad < 1) return;
        setCarrito((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, cantidad: nuevaCantidad } : item
        )
        );
    };

    // 🔥 Eliminar producto
    const eliminarProducto = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    };

    // 🔥 Calcular total
    const total = carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    return (
        <CarritoContext.Provider
        value={{
            carrito,
            agregarAlCarrito,
            eliminarProducto,
            cambiarCantidad,
            total,
        }}
        >
        {children}
        </CarritoContext.Provider>
    );
};
