import { createContext, useState } from "react";

const ProductoContext = createContext();

export const ProductoProvider = ({children}) => {

    const [productos, setProductos] = useState([]);
    
    const agregarProducto = (producto)=>{
        setProductos([...productos, producto]);

    }
    return (
        <ProductoContext.Provider
        value={{
                productos,
                agregarProducto
            }}
        >
            {children}
        </ProductoContext.Provider>
    )
}