/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Categoria from "../../../models/Categoria";
import type Usuario from "../../../models/Usuario";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    descricao: "",
    foto: "",
    categoria: {} as Categoria,
    usuario: {} as Usuario,
  });

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, token]);

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao buscar produto.", "erro");
      }
    }
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: { Authorization: token },
      });
      ToastAlerta("Produto deletado com sucesso!", "sucesso");
      navigate("/produtos/listar");
    } catch (error: any) {
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar produto.", "erro");
      }
    }
  }

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-md w-full border border-gray-200 text-center space-y-6">
        <h1 className="text-3xl font-bold text-indigo-900">
          Deletar Produto
        </h1>

        {/* Card visual do produto (sem ID e cabeçalho) */}
        <div className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between">
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

            <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-2">
              {produto.nome}
            </h2>
            <span className="text-lg font-semibold text-indigo-900">
              {formatarPreco(produto.preco)}
            </span>
          </div>
        </div>

        {/* Mensagem de confirmação */}
        <p className="text-gray-700">
          Tem certeza que deseja excluir o produto{" "}
          <span className="font-semibold text-indigo-900">{produto.nome}</span>?
        </p>

        {/* Botões de ação */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={deletarProduto}
            className="bg-linear-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:from-red-600 hover:to-red-800 transition"
          >
            Confirmar
          </button>

          <Link
            to="/produtos/listar"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
