const Gallery = ({ miembros }) => {
  const { nombre, rol, imagen } = miembros;

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{nombre} - {rol}</h3>
      <img 
        src={imagen} 
        alt={`${nombre} - ${rol}`} 
        style={{ width: "150px", borderRadius: "8px" }}
      />
    </div>
  );
};

export default Gallery;
