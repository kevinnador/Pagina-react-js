import TarjetaProyecto from "./TarjetaProyecto";

const Tarjeta = () => {
    const proyectos = [{ titulo: "Plataforma de gestion", descripcion: "Una herramienta para optimizar la gestion de equipos", textoboton: "Explorar Proyectos" }];
    return (
        <div>
            {proyectos.map((proyecto, index) => (
                <TarjetaProyecto key={index} {...proyecto} />
            ))}
        </div>
    )
}
export default Tarjeta;