import { Link } from "react-router-dom";

const CategoriaPagina = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center shadow-2xl mr-6">
              <div className="text-white font-bold text-2xl">🦜</div>
            </div>
            <div>
              <h1 className="text-5xl font-black text-gray-900 mb-4">
                Gerenciar Categorias
              </h1>
              <div className="w-32 h-2 bg-blue-500 mx-auto rounded-full shadow-lg"></div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Estruture suas categorias e mantenha o catálogo organizado e intuitivo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Coluna 1: Cadastrar*/}
          <div className="space-y-8">

            <Link to="/categorias/cadastrar" className="group block">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-400 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cadastrar Categoria
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Adicione novas categorias para organizar os produtos de forma prática e eficiente
                </p>
                
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 duration-300">
                  <span>Iniciar Cadastro</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card com Imagem 1 */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <img                
              src="https://i.imgur.com/IS9rpsR.png"
                alt="Arara com caixa"
                className="w-40 h-40 mx-auto object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Usabilidade
              </h4>
              <p className="text-gray-600 text-sm">
                Facilite a navegação para conquistar seus clientes
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Card Listar Categorias */}
            <Link to="/categorias/listar/" className="group block">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Listar Categorias
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Veja todas as categorias, edite informações e gerencie a estrutura do seu catálogo
                </p>
                
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 duration-300">
                  <span>Ver Categorias</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card com Imagem 2 */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <img 
                src="
                https://i.imgur.com/wynlMyO.png" 
                alt="Arara de barco" 
                className="w-40 h-40 mx-auto object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Organização
              </h4>
              <p className="text-gray-600 text-sm">
                Visão completa das categorias e seus produtos
              </p>
            </div>
          </div>
        </div>

        {/* Seção Futuro - Cards menores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { titulo: "Dashboard", cor: "from-blue-500 to-sky-400", status: "Em Desenvolvimento" },
            { titulo: "Análises", cor: "from-teal-500 to-blue-400", status: "Em Breve" },
            { titulo: "Relatórios", cor: "from-indigo-500 to-sky-400", status: "Em Planejamento" },
            { titulo: "Crescimento", cor: "from-blue-400 to-indigo-400", status: "Futuro", img: "https://i.imgur.com/x3qs0Ed.png" }
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              {card.img ? (
                <img src={card.img} alt={card.titulo} className="w-16 h-16 mx-auto object-contain mb-4 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <div className={`w-16 h-16 bg-gradient-to-br ${card.cor} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293L18.707 8.707A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-800 mb-2">{card.titulo}</h3>
              <p className="text-gray-600 text-sm mb-3">Exploração de {card.titulo.toLowerCase()}</p>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {card.status}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-3xl shadow-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              "Gerenciando seu sucesso, entrega por entrega"
            </h3>
            <p className="text-gray-600 text-lg">
              A plataforma completa para o seu delivery voar alto
            </p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            ["6", "Categorias Ativas"],
            ["28", "Produtos Vinculados"],
            ["12", "Categorias Recentes"],
            ["4.9", "Avaliação"]
          ].map(([valor, texto], i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-gray-900 mb-2">{valor}</div>
              <div className="text-gray-600 text-sm">{texto}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              <span>Arara Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              <span>Gestão de Categorias</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              <span>v2.1</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoriaPagina;
