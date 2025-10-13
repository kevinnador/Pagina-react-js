const TarjetaProyecto = ({ titulo, descripcion, textoboton }) => {
    const manejarClic = () => {
        console.log(`Botón "${textoboton}" clickeado en el proyecto "${titulo}"`);
    }
    return (
        <div>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <button onClick={manejarClic} style={{ backgroundColor: "blue", color: "white" }}>{textoboton}</button>
        </div>
    );
};
export default TarjetaProyecto;