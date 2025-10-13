const ListaEstudiante = (props) => {
  return (
	<div>
    <h2>Desarrollador Frontend</h2>
	  <h2>Mi nombre es {props.nombre} {props.apellido} y esto <br /> 
    es una practica de react y vite para <br /> la creacion de mi portafolio</h2>
	</div>
  );
};

export default ListaEstudiante;
