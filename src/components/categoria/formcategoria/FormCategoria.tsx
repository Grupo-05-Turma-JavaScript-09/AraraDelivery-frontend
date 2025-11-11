/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error) {
      ToastAlerta("Erro ao buscar a categoria.", "erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

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
    } catch (error) {
      ToastAlerta("Erro ao salvar categoria.", "erro");
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#36BFB1] to-[#02735E] py-12 px-4">
      <div className="container flex flex-col items-center justify-center mx-auto max-w-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <span className="text-3xl">📁</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
          </h1>
          <p className="text-white/80">
            {id === undefined 
              ? "Adicione uma nova categoria de produtos ao sistema" 
              : "Atualize os dados da categoria existente"
            }
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full">
          <form className="flex flex-col gap-6" onSubmit={gerarNovaCategoria}>
            
            {/* Nome Field */}
            <div className="flex flex-col gap-3">
              <label htmlFor="nome" className="text-lg font-semibold text-[#014034]">
                Nome da Categoria
              </label>
              <input
                type="text"
                placeholder="Ex: Pizzas, Bebidas, Sobremesas..."
                name="nome"
                value={categoria.nome || ""}
                onChange={atualizarEstado}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36BFB1] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-4 bg-linear-to-r from-[#36BFB1] to-[#02735E] text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 mt-4 flex items-center justify-center gap-2 hover:from-[#2ba89a] hover:to-[#02624f] disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <ClipLoader color="#ffffff" size={20} />
                  <span>Processando...</span>
                </>
              ) : (
                <span>{id === undefined ? "📥 Cadastrar" : "💾 Atualizar"}</span>
              )}
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={retornar}
              className="w-full py-3 border border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              ← Voltar para Categorias
            </button>

          </form>
        </div>

        {/* Info Footer */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-md">
          <p className="text-white text-center text-sm">
            <span className="font-bold">💡 Dica:</span> Use nomes curtos e descritivos para facilitar a busca de produtos.
          </p>
        </div>

      </div>
    </div>
  );
}

export default FormCategoria;
