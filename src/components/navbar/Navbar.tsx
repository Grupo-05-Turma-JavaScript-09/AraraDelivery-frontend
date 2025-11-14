import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import NavbarPrivate from "./NavbarPrivate";
import { NavbarPublic } from "./NavbarPublic";

export function Navbar() {
  const { usuario } = useContext(AuthContext);

  return usuario?.token ? <NavbarPrivate /> : <NavbarPublic />;
}
