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
    <div className="min-h-screen bg-linear-to-br from-[#fdfdfd] to-[#f5f5f5] flex items-center justify-center py-12 px-6">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-[#014034] mb-8 text-center">
          {id ? "Editar Categoria" : "Cadastrar Categoria"}
        </h1>

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
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02735E]"
              placeholder="Ex: Bebidas, Sobremesas..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-linear-to-r from-[#36BFB1] to-[#02735E] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-[#2aa698] hover:to-[#025b49] transition-all"
          >
            {id ? "Salvar Alterações" : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
