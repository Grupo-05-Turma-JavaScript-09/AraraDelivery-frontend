import { useState } from "react";
import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import ModalProdutosCategoria from "../modalcategoria/ModalProdutosCategoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <div className="border rounded-3xl shadow-md bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-6 text-center">
        <h3 className="text-2xl font-semibold text-[#014034] mb-4">
          {categoria.nome}
        </h3>

        <div className="flex flex-col gap-3 mt-auto">
          <button
            onClick={() => setMostrarModal(true)}
            className="py-2 rounded-xl bg-gradient-to-r from-[#36BFB1] to-[#02735E] text-white font-semibold hover:from-[#2ba89a] hover:to-[#02624f] transition"
          >
            Ver Detalhes
          </button>

          <div className="flex justify-center gap-3">
            <Link
              to={`/categorias/editar/${categoria.id}`}
              className="px-4 py-2 bg-[#02735E] text-white rounded-lg hover:bg-[#014034] transition text-sm"
            >
              Editar
            </Link>
            <Link
              to={`/categorias/deletar/${categoria.id}`}
              className="px-4 py-2 border border-red-400 text-red-600 rounded-lg hover:bg-red-50 transition text-sm"
            >
              Deletar
            </Link>
          </div>
        </div>
      </div>

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
