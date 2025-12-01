
    import { Link } from "react-router-dom";
    import { useAuthContext } from "../context/AuthContext";

    const Navbar = () => {
    const { usuario } = useAuthContext();
    const esAdmin = usuario === "kevin";

    return (
        <nav className="bg-[#111] text-white border-b border-white/10 shadow-md">
        <div
            className="
            max-w-7xl mx-auto
            px-8 py-4
            flex items-center justify-center
            gap-14
            text-base font-semibold tracking-wider
            "
        >
            <Link
            to="/inicio"
            className="
                hover:text-yellow-400 
                transition 
                tracking-widest
            "
            >
            INICIO
            </Link>

            <Link
            to="/productos/granos"
            className="
                hover:text-yellow-400 
                transition 
                tracking-widest
            "
            >
            GRANOS
            </Link>

            <Link
            to="/productos/capsulas"
            className="
                hover:text-yellow-400 
                transition 
                tracking-widest
            "
            >
            CÁPSULAS
            </Link>

            <Link
            to="/productos/accesorios"
            className="
                hover:text-yellow-400 
                transition 
                tracking-widest
            "
            >
            ACCESORIOS
            </Link>

            {esAdmin && (
            <Link
                to="/admin"
                className="
                hover:text-yellow-400 
                transition 
                tracking-widest
                "
            >
                ADMIN
            </Link>
            )}
        </div>
        </nav>
    );
    };

export default Navbar;

