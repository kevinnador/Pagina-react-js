import { useContext } from "react";
import { BusquedaContext } from "../context/BusquedaContext";
import { useProductosContext } from "../context/ProductoContext";
import Productos from "./Productos";

const ResultadosBusqueda = () => {
    const { busqueda } = useContext(BusquedaContext);
    const { productos } = useProductosContext();

    if (!busqueda.trim()) return null;

    const filtrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div style={{ padding: "20px" }}>
        {filtrados.length === 0 ? (
            <p>No se encontraron productos.</p>
        ) : (
            <Productos lista={filtrados} />
        )}
        </div>
    );
};

export default ResultadosBusqueda;


