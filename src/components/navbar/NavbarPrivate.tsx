import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const NavbarPrivate = () => {
  const { usuario, handleLogout } = useContext(AuthContext);
  const location = useLocation();

  // Só mostra navbar se usuário estiver logado
  if (!usuario) {
    return null;
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      {/* Faixa superior com gradiente - Representando as cores da arara */}
      <div className="h-1 bg-linear-to-r from-blue-600 via-amber-500 to-rose-600"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo com Identidade Forte */}
          <Link to="/home" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Ícone da Arara  */}
              <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="text-white font-bold text-lg">🦜</div>
              </div>
              {/* Detalhe - Asa em movimento */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-black bg-linear-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">
                AraraDelivery
              </h1>
              <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Conectando o Brasil real
              </p>
            </div>
          </Link>

          {/* Links de Navegação com Propósito */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-50 rounded-2xl p-1 border border-gray-200">
            <NavLink to="/home" currentPath={location.pathname} icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
              Início
            </NavLink>
            
            <NavLink to="/produtos" currentPath={location.pathname} icon="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4">
              Produtos
            </NavLink>
            
            <NavLink to="/categorias" currentPath={location.pathname} icon="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
              Categorias
            </NavLink>
            
            <NavLink to="/perfil" currentPath={location.pathname} icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
              Perfil
            </NavLink>
          </div>

          {/* Área do Usuário - Humanizada */}
          <div className="flex items-center space-x-4">
            {/* Status de Impacto */}
            <div className="hidden lg:flex items-center space-x-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-amber-700">
                Onde ninguém mais chega
              </span>
            </div>

            {/* Usuário */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-rose-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-sm">
                  {usuario.nome?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-gray-900">
                  {usuario.nome?.split(' ')[0] || 'Amigo'}
                </p>
                <p className="text-xs text-gray-500">Fazendo a diferença</p>
              </div>
            </div>

            {/* Botão Sair */}
            <button 
              onClick={handleLogout}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium text-sm border border-gray-300 hover:border-gray-400 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Sair</span>
            </button>
          </div>

          {/* Menu Mobile */}
          <button className="md:hidden text-gray-700 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Componente auxiliar para links com ícones
const NavLink = ({ to, currentPath, children, icon }: { 
  to: string; 
  currentPath: string; 
  children: React.ReactNode;
  icon: string;
}) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to}
      className={`
        relative flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 min-w-[100px] justify-center
        ${isActive 
          ? 'bg-white text-blue-600 shadow-md border border-blue-100' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-white/80'
        }
      `}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
      <span>{children}</span>
      
      {isActive && (
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"></div>
      )}
    </Link>
  );
};

export default NavbarPrivate;