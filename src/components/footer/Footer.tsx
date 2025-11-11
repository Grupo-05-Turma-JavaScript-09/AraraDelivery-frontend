import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import FooterPrivate from "./FooterPrivate";
import FooterPublic from "./FooterPublic";

const Footer = () => {
  const { usuario } = useContext(AuthContext);

  // Se o usuário tiver um token (autenticado), mostra o FooterPrivate
  // Caso contrário, mostra o FooterPublic
  return (
    <>
      {usuario.token ? <FooterPrivate /> : <FooterPublic />}
    </>
  );
};

export default Footer;
