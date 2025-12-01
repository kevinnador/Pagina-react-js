import { useContext } from "react";
import { BusquedaContext } from "../context/BusquedaContext";
import { useProductosContext } from "../context/ProductoContext";
import Productos from "./Productos";

const ResultadosBusqueda = () => {
    const { busqueda } = useContext(BusquedaContext);
    const { productos } = useProductosContext();

    const termino = busqueda.trim().toLowerCase();

    const filtrados =
        termino === ""
        ? productos
        : productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(termino)
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
