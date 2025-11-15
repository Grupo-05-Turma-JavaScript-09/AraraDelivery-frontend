import { Link } from "react-router-dom";
import { useState } from "react";

export function NavbarPublic() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="bg-[#1360bb] text-white shadow-md p-4 relative">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">Arara Delivery</h1>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/home" className="hover:text-[#fdc943] transition">Home</Link>
          <Link to="/sobre" className="hover:text-[#fdc943] transition">Sobre nós</Link>
          <Link to="/login" className="hover:text-[#fdc943] transition">Login</Link>

          <Link
            to="/cadastro"
            className="bg-[#fdc943] text-[#1360bb] font-semibold px-3 py-1 rounded 
                       hover:bg-[#de2120] hover:text-white transition"
          >
            Cadastrar
          </Link>
        </div>

        {/* Botão Menu Mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded hover:bg-[#ffffff22] transition"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" 
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-[#0f4d96] rounded-lg p-4 flex flex-col gap-3 animate-fadeIn">

          <Link
            to="/home"
            onClick={closeMenu}
            className="text-white text-lg hover:text-[#fdc943] transition"
          >
            Home
          </Link>

          <Link
            to="/sobre"
            onClick={closeMenu}
            className="text-white text-lg hover:text-[#fdc943] transition"
          >
            Sobre nós
          </Link>

          <Link
            to="/login"
            onClick={closeMenu}
            className="text-white text-lg hover:text-[#fdc943] transition"
          >
            Login
          </Link>

          {/* Cadastrar com o MESMO estilo do desktop */}
          <Link
            to="/cadastro"
            onClick={closeMenu}
            className="bg-[#fdc943] text-[#1360bb] font-semibold text-center px-3 py-2 rounded 
                       hover:bg-[#de2120] hover:text-white transition"
          >
            Cadastrar
          </Link>
        </div>
      )}
    </nav>
  );
}

