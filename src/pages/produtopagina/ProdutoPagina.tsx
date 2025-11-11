import { Link } from "react-router-dom";

const ProdutoPagina = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl mr-6">
              <div className="text-white font-bold text-2xl">🦜</div>
            </div>
            <div>
              <h1 className="text-5xl font-black text-gray-900 mb-4">
                Gerenciar Produtos
              </h1>
              <div className="w-32 h-2 bg-amber-500 mx-auto rounded-full shadow-lg"></div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Controle seu catálogo com a precisão e agilidade da Arara
            </p>
          </div>
        </div>

        {/* Seção Principal - Cards Emparelhados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Coluna 1: Cadastrar + Organização */}
          <div className="space-y-8">
            {/* Card Cadastrar Produto */}
            <Link to="/produtos/cadastrar" className="group block">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cadastrar Produto
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Adicione novos itens ao seu catálogo com informações completas e organização eficiente
                </p>
                
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 duration-300">
                  <span>Iniciar Cadastro</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card Organização */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.imgur.com/4NkWwmc.png" 
                alt="Arara com caixa" 
                className="w-40 h-40 mx-auto object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Organização
              </h4>
              <p className="text-gray-600 text-sm">
                Eficiência no cadastro de produtos
              </p>
            </div>
          </div>

          {/* Coluna 2: Listar + Navegação */}
          <div className="space-y-8">
            {/* Card Listar Produtos */}
            <Link to="/produtos/listar/" className="group block">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Listar Produtos
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Navegue por todo o catálogo, edite informações e gerencie disponibilidade dos produtos
                </p>
                
                <div className="inline-flex items-center text-amber-600 font-semibold group-hover:translate-x-2 duration-300">
                  <span>Ver Catálogo</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card Navegação */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
              <img 
                src="https://i.imgur.com/IS9rpsR.png" 
                alt="Arara de barco" 
                className="w-40 h-40 mx-auto object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Navegação
              </h4>
              <p className="text-gray-600 text-sm">
                Visão completa do catálogo
              </p>
            </div>
          </div>
        </div>

        {/* Seção Futuro - 4 Cards Alinhados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card Dashboard - Em Breve */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Dashboard</h3>
            <p className="text-gray-600 text-sm mb-3">Métricas avançadas em breve</p>
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              Em Desenvolvimento
            </div>
          </div>

          {/* Card Análises */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Análises</h3>
            <p className="text-gray-600 text-sm mb-3">Insights detalhados</p>
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
              Em Breve
            </div>
          </div>

          {/* Card Relatórios */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Relatórios</h3>
            <p className="text-gray-600 text-sm mb-3">Relatórios automáticos</p>
            <div className="inline-flex items-center bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium">
              Em Planejamento
            </div>
          </div>

          {/* Card Crescimento */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <img 
              src="https://i.imgur.com/wynlMyO.png" 
              alt="Arara de foguete" 
              className="w-16 h-16 mx-auto object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Crescimento</h3>
            <p className="text-gray-600 text-sm mb-3">Alcance novos patamares</p>
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              Futuro
            </div>
          </div>
        </div>

        {/* Frase Inspiradora */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl shadow-lg p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              "Como a arara entrega, nós organizamos"
            </h3>
            <p className="text-gray-600 text-lg">
              Cada produto cadastrado com a mesma atenção da arara preparando sua entrega
            </p>
          </div>
        </div>

        {/* Stats Simples */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl font-bold text-gray-900 mb-2">28</div>
            <div className="text-gray-600 text-sm">Produtos Ativos</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl font-bold text-gray-900 mb-2">6</div>
            <div className="text-gray-600 text-sm">Categorias</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl font-bold text-gray-900 mb-2">742</div>
            <div className="text-gray-600 text-sm">Vendas Hoje</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl font-bold text-gray-900 mb-2">4.8</div>
            <div className="text-gray-600 text-sm">Avaliação</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
              <span>Arara Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
              <span>Sistema de Gestão</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
              <span>v2.1</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProdutoPagina;