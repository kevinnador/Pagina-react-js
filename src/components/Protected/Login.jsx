import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [mensajeInvitado, setMensajeInvitado] = useState("");

    const navigate = useNavigate();
    const { login } = useAuthContext();

    const manejarLogin = (e) => {
        e.preventDefault();

        // 🔐 ADMIN
        if (usuario === "admin" && password === "1234") {
        login("admin", "admin"); // <— nombre + rol
        navigate("/carrito");
        return;
        }

        // 👤 INVITADO
        login(usuario || "invitado", "invitado");

        setMensajeInvitado("Ingresaste como invitado. Solo tenés acceso al carrito.");

        navigate("/carrito");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1c1a18] px-4">
        <div className="w-full max-w-sm bg-[#23201d] border border-[#3b3733] 
            rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">

            <h2 className="text-3xl font-bold text-center text-[#f5e9d5] mb-6 drop-shadow">
            Iniciar Sesión
            </h2>

            {/* Aviso de invitado */}
            {mensajeInvitado && (
            <p className="text-yellow-400 text-center mb-4 text-sm">
                {mensajeInvitado}
            </p>
            )}

            <form onSubmit={manejarLogin} className="flex flex-col gap-6">

            {/* USUARIO */}
            <div>
                <label className="text-sm text-gray-300 mb-1 block">Usuario</label>
                <input
                type="text"
                placeholder="admin o cualquier nombre"
                className="w-full px-3 py-2 rounded-lg bg-[#2a2724] border border-[#3b3733] 
                text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 transition"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                />
            </div>

            {/* PASSWORD */}
            <div>
                <label className="text-sm text-gray-300 mb-1 block">Contraseña</label>
                <input
                type="password"
                placeholder="1234 o cualquier valor"
                className="w-full px-3 py-2 rounded-lg bg-[#2a2724] border border-[#3b3733] 
                text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {/* BOTÓN */}
            <button
                type="submit"
                className="w-full py-3 rounded-lg bg-yellow-500 text-black font-bold
                hover:bg-yellow-400 shadow-lg hover:shadow-xl transition text-lg"
            >
                Entrar
            </button>
            </form>
        </div>
        </div>
    );
};

export default Login;
