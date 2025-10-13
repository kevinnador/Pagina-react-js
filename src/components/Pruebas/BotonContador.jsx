import { useState } from "react"


const BotonContador = () => {
    const [contador, setcontador] = useState(0)

    const manejarClick = (nuevoValor) => {
        setcontador(nuevoValor)
    }

    return(
        <div>
        <h3>{contador}</h3>
            <button onClick={() => manejarClick(contador + 1)}>Boton +</button>
            <button onClick={() => manejarClick(contador - 1)}>Boton -</button>
            <button onClick={() => manejarClick(0)}>Reset</button>
        </div>
    )
}
export default BotonContador    