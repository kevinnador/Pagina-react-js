

const GaleriaIntereses = () => {
    const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];
    return (
        <div>
            {intereses.map((interes, index) => (
                <BotonColor key={index} interes={interes} />
                
            ))}
        </div>
    )

}
export default GaleriaIntereses;