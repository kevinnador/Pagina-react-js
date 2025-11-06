import FormProducto from "./FormProducto";

const Admin = () => {


  const agregarProducto = async (producto) => {
  try {
    console.log("📦 Enviando producto a la API:", producto);

    const respuesta = await fetch(
      "https://690bf8e96ad3beba00f6bbf1.mockapi.io/Productos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: producto.nombre,
          precio: producto.precio.toString(), // 👈 enviamos como string por compatibilidad
          imagen: producto.imagen,
          descripcion: producto.descripcion,
        }),
      }
    );

    // Si falla la petición, mostramos el texto completo del error
    if (!respuesta.ok) {
      const errorText = await respuesta.text();
      console.error("❌ Error del servidor:", errorText);
      throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
    }

    // Si todo sale bien, mostramos el resultado
    const data = await respuesta.json();
    console.log("✅ Producto agregado correctamente:", data);
    alert("Producto agregado correctamente.");

  } catch (error) {
    console.error("⚠️ Error al agregar producto:", error.message);
    alert(`Hubo un problema al agregar el producto:\n${error.message}`);
  }
};


  return (
    <div>
      <FormProducto onAgregar={agregarProducto} />
    </div>
  );
};

export default Admin;
