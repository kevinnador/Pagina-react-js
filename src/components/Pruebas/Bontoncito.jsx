import { useEffect, useState } from "react"

const Bontoncito = () => {
    const [clic, setClic] = useState(0)

    useEffect(()=>{
        document.title = `hisicte ${clic} clics`
    },[clic])

    return (
        <>
            <button onClick={()=> setClic(clic + 1)}>cliqueame {clic}</button>
        </>

        
    )

};

export default Bontoncito;