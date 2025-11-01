import { createContext, useContext } from 'react';

export const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

// aca se crean los hooks personalizados para usar los contextos de autenticación y carrito de compras.