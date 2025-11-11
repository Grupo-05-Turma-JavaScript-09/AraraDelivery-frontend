import { useContext, useEffect, useState } from "react";
import { LinkIcon } from "@phosphor-icons/react";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/Services";
import CardProduto from "../cardproduto/CardProduto";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaProdutos() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const {usuario, handleLogout} = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    if (token === '') {
        ToastAlerta('Você precisa estar logado!', 'info');
        navigate('/');
    } else {
      buscarProdutos();
    }
  }, [token]); // Executa quando o token muda

  async function buscarProdutos() {
    try {
      setIsLoading(true);

      await buscar('/produtos', setProdutos, {
        headers: { Authorization: token }
      });

    } catch (error: any) {
      console.error("Erro ao buscar produtos:", error);
      
      // Verifica se o erro é de autenticação (401)
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao carregar produtos.", "erro");
      }

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* SESSÃO FIXA SUPERIOR - Branca e limpa */}
      <div className="bg-white px-6 py-6 shadow-sm border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-gray-900">
              <div className="flex items-center gap-3 mb-2">
              
                <h1 className="text-3xl font-bold">Produtos Disponíveis</h1>
              </div>
              <p className="text-gray-600 text-lg">Explore nosso catálogo</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                <span className="font-bold">{produtos.length}</span> produto{produtos.length !== 1 ? 's' : ''} ativo{produtos.length !== 1 ? 's' : ''}
              </div>
              <button 
                onClick={buscarProdutos}
                className="bg-[#0088CC] hover:bg-[#0077BB] text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-bold hover:shadow-lg"
              >
                🔄 Atualizar
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center w-full my-16">
          <div className="flex items-center gap-3 text-[#0088CC]">
            <LinkIcon size={32} className="animate-spin" />
            <span className="font-medium">Carregando produtos...</span>
          </div>
        </div>
      )}

      <div className="flex justify-center w-full my-8 min-h-screen">
        <div className="container flex flex-col">
          {!isLoading && produtos.length === 0 && (
            <div className="text-center my-16">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">🦜</span>
              </div>
              <span className="text-2xl text-gray-600 block mb-2 font-medium">
                Nenhum produto encontrado!
              </span>
              <p className="text-gray-400">
                Comece adicionando novos produtos ao catálogo.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>

      {/* SESSÃO FIXA INFERIOR - Footer moderno */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-6 border-t border-blue-200 mt-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 text-[#0088CC]">
              <span className="text-2xl">🦜</span>
              <div>
                <h3 className="font-bold text-lg">Arara Delivery</h3>
                <p className="text-sm text-blue-700">Entregas rápidas e eficientes</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-blue-800">
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Sistema online</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{produtos.length} produtos cadastrados</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Versão 1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;