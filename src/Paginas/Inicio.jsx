
import BarraBusqueda from "../components/BarraBusqueda";
import CarruselDepartamentos from "../components/Carrusel";
import Granos from "../components/Granos";
import ColeccionCapsulas from "../components/Capsulas";
const Inicio = () => {
    return (
    <div className="pt-0"> 
        <CarruselDepartamentos />
        <BarraBusqueda />
        <Granos />
        <ColeccionCapsulas />
    </div>
    );
};

export default Inicio;