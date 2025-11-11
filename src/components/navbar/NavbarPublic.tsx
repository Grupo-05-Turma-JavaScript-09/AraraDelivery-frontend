import { Link } from "react-router-dom";

export function NavbarPublic() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1360bb] text-white shadow-md">
      <h1 className="text-xl font-bold">Arara Delivery</h1>
      <div className="flex gap-4 items-center">
        <Link to="/home" className="hover:text-[#fdc943] transition">Home</Link>
        <Link to="/sobre" className="hover:text-[#fdc943] transition">Sobre nós</Link>
        <Link to="/login" className="hover:text-[#fdc943] transition">Login</Link>
        <Link
          to="/cadastro"
          className="bg-[#fdc943] text-[#1360bb] font-semibold px-3 py-1 rounded hover:bg-[#de2120] hover:text-white transition"
        >
          Cadastrar
        </Link>
      </div>
    </nav>
  );
}
