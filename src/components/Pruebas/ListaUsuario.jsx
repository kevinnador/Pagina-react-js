const ListaUsuario = () => {
    const usuarios = [  
        { id: 1, nombre: "Juan" },
        { id: 2, nombre: "María" },
        { id: 3, nombre: "Pedro" }
    ];

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaUsuario;