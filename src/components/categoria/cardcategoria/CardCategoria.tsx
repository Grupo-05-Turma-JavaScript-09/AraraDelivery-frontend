import { PencilSimple, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md hover:border-[#36BFB1]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Cabeçalho */}
      <header className="bg-linear-to-r from-[#02735E] to-[#36BFB1] text-white text-center py-4">
        <h2 className="text-lg font-semibold tracking-wide uppercase">
          Categoria
        </h2>
      </header>

      {/* Corpo */}
      <div className="flex flex-col items-center justify-center px-8 py-10 bg-linear-to-b from-white to-[#F8F9F9]">
        <p className="text-2xl font-bold text-[#014034] text-center">
          {categoria.nome}
        </p>
      </div>

      {/* Ações */}
      <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-gray-100 bg-[#F9FAFA]">
        <Link
          to={`/categorias/editar/${categoria.id}`}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-linear-to-r from-[#36BFB1] to-[#02735E] text-white font-medium shadow hover:from-[#2aa698] hover:to-[#025b49] hover:shadow-md transition-all duration-200"
        >
          <PencilSimple size={18} weight="bold" />
          Editar
        </Link>

        <Link
          to={`/categorias/deletar/${categoria.id}`}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-red-500 text-red-600 font-medium hover:bg-red-50 hover:shadow transition-all duration-200"
        >
          <Trash size={18} weight="bold" />
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
