// components/navbar/Navbar.tsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { usuario, handleLogout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link to={usuario ? "/home" : "/"} className="text-2xl font-bold">
            🦜 AraraDelivery
          </Link>

          {/* Links de Navegação */}
          <div className="hidden md:flex space-x-6">
            {usuario ? (
              // USUÁRIO LOGADO
              <>
                <Link to="/home" className="hover:text-blue-200 transition">
                  Home
                </Link>
                <div className="relative group">
                  <button className="hover:text-blue-200 transition">
                    Cadastro ▼
                  </button>
                  <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded shadow-lg mt-2">
                    <Link 
                      to="/cadastro/produto" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📦 Produto
                    </Link>
                    <Link 
                      to="/cadastro/categoria" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📁 Categoria
                    </Link>
                  </div>
                </div>
                <Link to="/perfil" className="hover:text-blue-200 transition">
                  Perfil
                </Link>
                <button 
                  onClick={handleLogout}
                  className="hover:text-blue-200 transition"
                >
                  Sair
                </button>
              </>
            ) : (
              // USUÁRIO DESLOGADO
              <Link to="/" className="hover:text-blue-200 transition">
                Login
              </Link>
            )}
          </div>

          {/* Menu Hamburger para Mobile */}
          <button className="md:hidden">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;