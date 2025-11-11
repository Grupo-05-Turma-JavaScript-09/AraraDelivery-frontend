/* eslint-disable @typescript-eslint/no-explicit-any */
import { X } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface ModalProdutosCategoriaProps {
  idCategoria: number;
  onClose: () => void;
}

function ModalProdutosCategoria({ idCategoria, onClose }: ModalProdutosCategoriaProps) {
  const [categoria, setCategoria] = useState<Categoria | null>(null);
  const [produtosFiltrados, setProdutosFiltrados] = useState<any[]>([]);
  const [busca, setBusca] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string>("");

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    async function carregarCategoria() {
      setIsLoading(true);
      setErro("");

      try {
        await buscar(`/categorias/${idCategoria}`, setCategoria, {
          headers: { Authorization: token },
        });
      } catch (error: any) {
        console.error("Erro ao buscar categoria:", error);
        if (error.response?.status === 401) {
          ToastAlerta("Sessão expirada. Faça login novamente.", "info");
          handleLogout();
        } else if (error.response?.status === 404) {
          setErro("Categoria não encontrada.");
        } else {
          setErro("Não foi possível carregar os produtos desta categoria.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (idCategoria && token) {
      carregarCategoria();
    }
  }, [idCategoria, token, handleLogout]);

  useEffect(() => {
    if (categoria?.produtos) {
      const filtrados = categoria.produtos.filter((p: any) =>
        p.nome.toLowerCase().includes(busca.toLowerCase())
      );
      setProdutosFiltrados(filtrados);
    }
  }, [busca, categoria]);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-6 relative animate-fadeIn">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#02735E] transition"
        >
          <X size={24} weight="bold" />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold text-[#014034] mb-2 text-center">
          {isLoading
            ? "Carregando..."
            : categoria
            ? `Produtos da categoria ${categoria.nome}`
            : "Categoria não encontrada"}
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Produtos cadastrados nesta categoria
        </p>

        {/* Campo de busca */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Buscar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#36BFB1] focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Conteúdo */}
        {isLoading ? (
          <div className="flex justify-center py-10">
            <ClipLoader color="#02735E" size={40} />
          </div>
        ) : erro ? (
          <p className="text-red-500 text-center">{erro}</p>
        ) : produtosFiltrados.length === 0 ? (
          <p className="text-center text-gray-600">
            Nenhum produto encontrado nesta categoria.
          </p>
        ) : (
          <div className="max-h-80 overflow-y-auto px-2">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4 mb-3 hover:shadow-md transition-all duration-200"
              >
                {/* Miniatura do produto */}
                <img
                  src={produto.foto || "https://via.placeholder.com/60x60?text=📦"}
                  alt={produto.nome}
                  className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                />

                {/* Informações */}
                <div className="flex-1">
                  <h3 className="font-semibold text-[#014034] text-lg">
                    {produto.nome}
                  </h3>
                  {produto.preco !== undefined && (
                    <p className="text-sm text-gray-500">
                      R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rodapé */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="py-3 px-6 rounded-xl font-semibold bg-[#02735E] text-white hover:bg-[#014034] transition-all duration-200"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProdutosCategoria;
