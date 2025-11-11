import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  return (
    <div className="flex flex-col">
      {/* Elemento acima do card - Header do produto */}
      <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-t-3xl border border-gray-200 border-b-0 px-6 py-4 mb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
              Disponível
            </span>
          </div>
          <div className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border">
            ID: {produto.id}
          </div>
        </div>
      </div>

      {/* Card principal */}
      <div className="group bg-white rounded-b-3xl border border-gray-200 border-t-0 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] overflow-hidden flex-1">
        {/* Conteúdo */}
        <div className="p-8 flex flex-col h-full">
          {/* Foto do produto */}
          <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden shadow-inner mb-6">
            {produto.foto ? (
              <img
                src={produto.foto}
                alt={produto.nome}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-gray-400 text-2xl">📷</span>
                  </div>
                  <p className="text-sm text-gray-400">Sem imagem</p>
                </div>
              </div>
            )}
          </div>

          {/* Info do produto */}
          <div className="flex flex-col flex-1">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                {produto.nome}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                {produto.descricao}
              </p>
            </div>

            {/* Preço */}
            <div className="mb-6">
              <span className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-50 to-white px-4 py-2 rounded-2xl inline-block">
                {formatarPreco(produto.preco)}
              </span>
            </div>
          </div>

          {/* Botões */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              to={`/produtos/editar/${produto.id}`}
              className="text-center py-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>✏️</span>
              Editar
            </Link>

            <Link
              to={`/produtos/deletar/${produto.id}`}
              className="text-center py-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>🗑️</span>
              Deletar
            </Link>
          </div>
        </div>
      </div>

      {/* Elemento abaixo do card - Estatísticas */}
      <div className="bg-white rounded-b-3xl border border-gray-200 border-t-0 shadow-sm mt-1 px-6 py-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Última atualização: Hoje</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Em estoque.</span>
            </div>
          </div>
          <div className="flex items-center gap-1 hover:text-gray-700 cursor-pointer transition-colors">
            <span>📊</span>
            <span>Ver métricas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
