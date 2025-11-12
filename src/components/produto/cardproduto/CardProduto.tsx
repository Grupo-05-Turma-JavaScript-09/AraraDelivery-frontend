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
    <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] overflow-hidden flex flex-col justify-between">
      {/* Header do produto*/}
      <div className="bg-linear-to-r from-gray-50 to-indigo-50 px-6 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">
            Disponível
          </span>
        </div>

        <div className="text-xs text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-lg border border-gray-200 shadow-sm">
          <span className="font-medium text-gray-700">ID: {produto.id}</span>
        </div>
      </div>

      {/* Conteúdo principal do card, quando foram alterar, é a partir daqui */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="w-full h-44 bg-gray-100 rounded-2xl overflow-hidden mb-5">
          {produto.foto ? (
            <img
              src={produto.foto}
              alt={produto.nome}
              className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 bg-linear-to-br from-gray-50 to-gray-100">
              <div className="text-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-gray-400 text-xl">📷</span>
                </div>
                <p className="text-xs text-gray-400">Sem imagem</p>
              </div>
            </div>
          )}
        </div>

        {/* nome e descricao */}
        <div className="flex flex-col space-y-2 flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
            {produto.nome}
          </h2>
          <p className="text-gray-600 text-sm flex-1">{produto.descricao}</p>
          <span className="text-lg font-semibold text-indigo-900 mt-2">
            {formatarPreco(produto.preco)}
          </span>
        </div>

        {/* botoes editar e deletar */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Link
            to={`/produtos/editar/${produto.id}`}
            className="text-center py-3 bg-blue-50 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
          >
            Editar
          </Link>

          <Link
            to={`/produtos/deletar/${produto.id}`}
            className="text-center py-3 bg-white border border-red-300 hover:bg-red-600 text-red-500 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
          >
            Deletar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
