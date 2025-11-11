import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavbarPublic } from "./NavbarPublic";
import NavbarPrivate from "./NavbarPrivate";

export function Navbar() {
  const { usuario } = useContext(AuthContext);

  // se o token estiver vazio, mostra a pública
  return usuario.token ? <NavbarPrivate /> : <NavbarPublic />;
}
