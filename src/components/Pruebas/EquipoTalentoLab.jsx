import Gallery from "./Gallery";

const EquipoTalentoLab = () => {
  const miembros = [
    { nombre: "Kevin", rol: "Desarrollador Frontend", imagen: "https://res.cloudinary.com/dofynxdb2/image/upload/v1758667912/main-sample.png" },
    { nombre: "Ana", rol: "Diseñadora UX/UI", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg" },
    { nombre: "Luis", rol: "Desarrollador Backend", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg" },
  ];

  return (
    <div>
      {miembros.map((miembro, index) => (
        <Gallery key={index} miembros={miembro} />
      ))}
    </div>
  );
};

export default EquipoTalentoLab;

