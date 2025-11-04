import { Link } from "react-router-dom";
import "./HeaderEstilo.css";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
  const { usuario, logout } = useAuthContext();
  const esAdmin = usuario === "kevin";
  const estáLogueado = !!usuario;


  return (
<header aria-label="Breadcrumb" className="bg-gray-800 flex overflow-hidden rounded border">
  <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
    <div className="lg:col-span-3 flex items-center">
      <Link to="/" className="inline-flex items-center">
        <span className="text-xl font-bold text-w dark:text-white">Olivia Aceituno</span>
      </Link>

      <div className="ms-1 sm:ms-2">

      </div>
    </div>

    {/* Button Group */}
    <div className="flex items-center ms-auto gap-3 lg:gap-4 lg:col-span-3 order-3 lg:order-3">
      <button type="button" className="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white">
        <span className="sr-only">Search</span>
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
      </button>
      <button type="button" className="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white">
        <span className="sr-only">Cart</span>
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </button>
      <>
        {estáLogueado ? (
          <button onClick={logout} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-red-400 text-black hover:bg-red-500 focus:outline-hidden focus:bg-red-500 transition disabled:opacity-50 disabled:pointer-events-none">
            Logout
          </button>
        ) : (
          <Link to="/login" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none">
            Login
          </Link>
        )}
      </>
    </div>
    {/* End Button Group */}

    {/* Collapse */}
    <div id="hs-pro-hcail" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6" aria-labelledby="hs-pro-hcail-collapse">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
        <div>
          <Link to="/Inicio" className="relative inline-block text-white focus:outline-hidden before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 dark:text-white" aria-current="page">Inicio</Link>
        </div>
        <div>
          <Link to="/Carrito" className="inline-block text-white hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300">Carrito</Link>
        </div>
        <div>
          {esAdmin && (
            <Link to="/admin" className="inline-block text-white hover:text-gray-600 focus:outline-hidden focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300">Admin</Link>
          )}        
        </div>
      </div>
    </div>
    {/* End Collapse */}
  </nav>
</header>
  );
};

export default Header;

