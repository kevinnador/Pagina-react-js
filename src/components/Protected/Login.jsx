import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    const { login } = useAuthContext();
        const manejarLogin = (e) => {
            e.preventDefault();
            if (usuario == "kevin" && password == "1234") {

                login(usuario);

                navigate("/Carrito");
            } else {
                alert("Credenciales incorrectas");
            }
        };
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
        </h3>

        <form onSubmit={manejarLogin} className="flex flex-col space-y-4">
            <div>
            <label
                htmlFor="usuario"
                className="block text-gray-700 font-medium mb-1"
            >
                Usuario
            </label>
            <input
                id="usuario"
                type="text"
                placeholder="Ingresá tu usuario"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            </div>

            <div>
            <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1"
            >
                Contraseña
            </label>
            <input
                id="password"
                type="password"
                placeholder="Ingresá tu contraseña"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}   
            />
            </div>

            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 active:bg-blue-700 transition"
            >
            Iniciar sesión
            </button>
        </form>
        </div>
    </div>
    );
};

export default Login;
