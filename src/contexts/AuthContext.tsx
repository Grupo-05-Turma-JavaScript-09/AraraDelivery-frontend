import { createContext, useState, useEffect, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Services";
import { ToastAlerta } from "../utils/ToastAlerta";

// ==========================
// Tipagem
// ==========================
export interface AuthContextProps {
  usuario: UsuarioLogin;
  setUsuario: React.Dispatch<React.SetStateAction<UsuarioLogin>>;
  handleLogin: (usuarioLogin: UsuarioLogin) => Promise<void>;
  handleLogout: () => void;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

// ==========================
// Criação do contexto
// ==========================
export const AuthContext = createContext({} as AuthContextProps);

// ==========================
// Provider
// ==========================
export function AuthProvider({ children }: AuthProviderProps) {

  // --------------------------
  // 1. Estado persistente
  // --------------------------
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const userStorage = localStorage.getItem("usuario");
    if (userStorage) {
      return JSON.parse(userStorage);
    }
    return {
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    };
  });

  const [isLoading, setIsLoading] = useState(false);

  // --------------------------
  // 2. Salvar mudanças no usuario
  // --------------------------
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  // --------------------------
  // 3. LOGIN
  // --------------------------
  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      ToastAlerta("Usuário autenticado com sucesso!", "sucesso");
    } catch (error) {
      ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro");
    }
    setIsLoading(false);
  }

  // --------------------------
  // 4. LOGOUT
  // --------------------------
  function handleLogout() {
    localStorage.removeItem("usuario");
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    });
  }

  // --------------------------
  // Provider com tudo pronto
  // --------------------------
  return (
    <AuthContext.Provider
      value={{
        usuario,
        setUsuario,
        handleLogin,
        handleLogout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
