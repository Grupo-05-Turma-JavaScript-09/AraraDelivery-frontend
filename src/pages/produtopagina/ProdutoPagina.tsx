import { Link } from "react-router-dom";

const ProdutoPagina = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gerenciar Produtos
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Organize seu cardápio de forma simples e eficiente
          </p>
        </div>

        {/* Cards de Ação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card Cadastrar */}
          <Link 
            to="/produtos/cadastrar"
            className="group relative overflow-hidden"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Cadastrar Produto
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Adicione novos itens ao seu cardápio com informações completas e imagens
                </p>
                
                <div className="flex items-center text-green-600 font-semibold">
                  <span>Começar cadastro</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Card Listar */}
          <Link 
            to="/produtos/listar/"
            className="group relative overflow-hidden"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Listar Produtos
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Visualize, edite e gerencie todos os produtos do seu catálogo
                </p>
                
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Ver produtos</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Seção de Produtos Populares */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Produtos Populares
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-green-50 transition-colors cursor-pointer text-center">
              <div className="text-sm font-medium text-gray-900">Pizza Calabresa</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-yellow-50 transition-colors cursor-pointer text-center">
              <div className="text-sm font-medium text-gray-900">Hambúrguer Artesanal</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-green-50 transition-colors cursor-pointer text-center">
              <div className="text-sm font-medium text-gray-900">Salada Caesar</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors cursor-pointer text-center">
              <div className="text-sm font-medium text-gray-900">Suco Natural</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-purple-50 transition-colors cursor-pointer text-center">
              <div className="text-sm font-medium text-gray-900">Batata Frita</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-red-50 transition-colors cursor-pointer text-center">
              <div className="text-sm font-medium text-gray-900">Pizza Margherita</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-yellow-50 transition-colors cursor-pointer text-center">
              <div className="text-sm font-medium text-gray-900">X-Bacon</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors cursor-pointer text-center">
              <div className="text-sm font-medium text-gray-900">Refrigerante</div>
            </div>
          </div>
        </div>

        {/* Footer Decorativo */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProdutoPagina;