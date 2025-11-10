// components/navbar/Navbar.tsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { usuario, handleLogout } = useContext(AuthContext);

  if (!usuario) {
    return null;
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          <Link to="/home" className="text-2xl font-bold">
            AraraDelivery
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/home" className="hover:text-blue-200 transition">
              Home
            </Link>
            
            <Link to="/produto" className="hover:text-blue-200 transition">
              Produto
            </Link>
            
            <Link to="/categoria" className="hover:text-blue-200 transition">
              Categoria
            </Link>
            
            <Link to="/perfil" className="hover:text-blue-200 transition">
              Perfil
            </Link>
            
            <button 
              onClick={handleLogout}
              className="hover:text-blue-200 transition"
            >
              Sair
            </button>
          </div>

          <button className="md:hidden">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;