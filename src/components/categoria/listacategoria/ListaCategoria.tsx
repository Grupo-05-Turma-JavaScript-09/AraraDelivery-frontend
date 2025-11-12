/* eslint-disable @typescript-eslint/no-explicit-any */
import { LinkIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
    } else {
      buscarCategorias();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function buscarCategorias() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      console.error("Erro ao buscar categorias:", error);
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao carregar categorias.", "erro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfdfd] to-[#f5f5f5]">
      {/* SESSÃO FIXA SUPERIOR - Branca e limpa */}
      <div className="bg-white px-6 py-6 shadow-sm border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-gray-900">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Categorias Disponíveis</h1>
              </div>
              <p className="text-gray-600 text-lg">
                Gerencie suas categorias de produtos
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                <span className="font-bold">{categorias.length}</span>{" "}
                categoria{categorias.length !== 1 ? "s" : ""} ativa
                {categorias.length !== 1 ? "s" : ""}
              </div>
              <button
                onClick={buscarCategorias}
                className="bg-[#0088CC] hover:bg-[#0077BB] text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-bold hover:shadow-lg"
              >
                🔄 Atualizar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Estado de carregamento */}
      {isLoading && (
        <div className="flex justify-center w-full my-16">
          <div className="flex items-center gap-3 text-[#0088CC]">
            <LinkIcon size={32} className="animate-spin" />
            <span className="font-medium">Carregando categorias...</span>
          </div>
        </div>
      )}

      {/* Conteúdo principal */}
      <div className="flex justify-center w-full my-8 min-h-screen">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <div className="text-center my-16">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">📦</span>
              </div>
              <span className="text-2xl text-gray-600 block mb-2 font-medium">
                Nenhuma categoria encontrada!
              </span>
              <p className="text-gray-400">
                Crie novas categorias para organizar seus produtos.
              </p>
            </div>
          )}

          {/* Grid de categorias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
