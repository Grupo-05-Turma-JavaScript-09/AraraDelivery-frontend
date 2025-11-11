/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    produtos: [],
  });
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, token]);

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao buscar categoria.", "erro");
      }
    }
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`, {
        headers: { Authorization: token },
      });
      ToastAlerta("Categoria deletada com sucesso!", "sucesso");
      navigate("/categorias");
    } catch (error: any) {
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar categoria.", "erro");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#fdfdfd] to-[#f5f5f5] px-6">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-md w-full border border-gray-200 text-center">
        <h1 className="text-3xl font-bold text-[#014034] mb-6">
          Deletar Categoria
        </h1>
        <p className="text-gray-700 mb-8">
          Tem certeza que deseja excluir a categoria{" "}
          <span className="font-semibold text-[#02735E]">{categoria.nome}</span>
          ?
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={deletarCategoria}
            className="bg-linear-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:from-red-600 hover:to-red-800 transition"
          >
            Confirmar
          </button>

          <Link
            to="/categorias"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
