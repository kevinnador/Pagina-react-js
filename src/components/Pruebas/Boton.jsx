const Boton = ({ text, color, onClick }) => {
    return (
        <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={onClick}>
        {text}
        </button>)
};
export default Boton;