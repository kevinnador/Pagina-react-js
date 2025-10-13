import{ useState } from "react";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}, Email: ${email}`);
    };

    return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
        >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Formulario de contacto
        </h2>

        <div className="mb-4">
            <label
            htmlFor="nombre"
            className="block text-gray-700 font-medium mb-2"
            >
            Nombre
            </label>
            <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresá tu nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
        </div>

        <div className="mb-6">
            <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
            >
            Email
            </label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresá tu correo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-2 rounded-lg hover:scale-105 transition"
        >
            Enviar
        </button>
        </form>
    </div>
    );
};

export default Formulario;
