import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    descricao: "",
    foto: "",
    categoria: undefined,
    usuario: undefined,
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
      navigate("/produtos");
    } catch (error: any) {
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar produto.", "erro");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfdfd] to-[#f5f5f5] px-6">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-lg w-full border border-gray-200">
        <h1 className="text-3xl font-bold text-[#014034] mb-6 text-center">
          Deletar Produto
        </h1>

        
        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
          {produto.foto && (
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <img
                src={produto.foto}
                alt={produto.nome}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
          
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-600 font-semibold">Nome:</span>
              <p className="text-xl font-bold text-[#02735E]">{produto.nome}</p>
            </div>

            {produto.descricao && (
              <div>
                <span className="text-sm text-gray-600 font-semibold">Descrição:</span>
                <p className="text-gray-700">{produto.descricao}</p>
              </div>
            )}

            {produto.preco !== undefined && (
              <div>
                <span className="text-sm text-gray-600 font-semibold">Preço:</span>
                <p className="text-2xl font-bold text-green-600">
                  R$ {produto.preco.toFixed(2).replace('.', ',')}
                </p>
              </div>
            )}

            {produto.categoria && (
              <div>
                <span className="text-sm text-gray-600 font-semibold">Categoria:</span>
                <p className="text-gray-700">{produto.categoria.nome}</p>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-700 mb-8 text-center text-lg">
          Tem certeza que deseja excluir este produto?
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={deletarProduto}
            className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:from-red-600 hover:to-red-800 transition"
          >
            Confirmar
          </button>

          <Link
            to="/produtos"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition inline-flex items-center"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;