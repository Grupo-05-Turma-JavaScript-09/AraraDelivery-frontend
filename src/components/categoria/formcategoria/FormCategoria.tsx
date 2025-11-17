/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type ChangeEvent,
  type FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      }
      navigate("/categorias");
    } catch (error: any) {
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao salvar categoria.", "erro");
      }
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12 px-6">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10 border border-blue-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-sky-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {id ? "Editar Categoria" : "Cadastrar Categoria"}
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            {id
              ? "Atualize as informações da categoria"
              : "Adicione uma nova categoria ao catálogo"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-semibold text-gray-700">
              Nome da Categoria
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={categoria.nome}
              onChange={atualizarEstado}
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
              placeholder="Ex: Bebidas, Sobremesas..."
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              type="submit"
              className="flex-1 bg-linear-to-r from-blue-600 to-teal-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-green-900 hover:to-teal-800 transition-all"
            >
              {id ? "Salvar Alterações" : "Cadastrar"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/categorias")}
              className="flex-1 border-2 border-blue-400 text-blue-700 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
