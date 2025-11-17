import { useState } from "react";
import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import ModalProdutosCategoria from "../modalcategoria/ModalProdutosCategoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const totalProdutos = categoria.produtos?.length || 0;

  return (
    <>
      <div className="bg-gray-50 p-6 rounded-3xl transition-all duration-300 hover:bg-gray-100">
        {/* Card principal */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] overflow-hidden flex flex-col p-8 text-center">
          {/* Nome da categoria */}
          <h3 className="text-2xl font-bold text-blue-950 mb-2">
            {categoria.nome}
          </h3>

          {/* Quantidade de produtos */}
          <p
            className={`text-sm font-medium mb-6 ${
              totalProdutos > 0 ? "text-teal-700" : "text-gray-500"
            }`}
          >
            {totalProdutos > 0
              ? `${totalProdutos} produto${
                  totalProdutos !== 1 ? "s" : ""
                } cadastrados`
              : "Nenhum produto cadastrado"}
          </p>

          {/* Botões */}
          <div className="flex flex-col items-center gap-4 mt-auto">
            <button
              onClick={() => setMostrarModal(true)}
              className="w-full flex-1 bg-linear-to-r from-sky-700 to-cyan-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-green-900 hover:to-teal-800 transition-all"
            >
              Ver Detalhes
            </button>

            <div className="grid grid-cols-2 gap-4 w-full">
              <Link
                to={`/categorias/editar/${categoria.id}`}
                className="text-center py-3 bg-gray-50 hover:bg-yellow-600 border border-blue-100 text-gray-700 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-md"
              >
                Editar
              </Link>

              <Link
                to={`/categorias/deletar/${categoria.id}`}
                className="text-center py-3 bg-red-50 hover:bg-red-600 border border-red-100 text-red-800 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-md"
              >
                Deletar
              </Link>
            </div>
          </div>

          {/* Rodapé */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Atualizado recentemente</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>
                  {totalProdutos > 0
                    ? `${totalProdutos} produto${totalProdutos !== 1 ? "s" : ""}`
                    : "Sem produtos"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors">
            </div>
          </div>
        </div>
      </div>

      {/* Modal de produtos */}
      {mostrarModal && (
        <ModalProdutosCategoria
          idCategoria={categoria.id}
          onClose={() => setMostrarModal(false)}
        />
      )}
    </>
  );
}

export default CardCategoria;
