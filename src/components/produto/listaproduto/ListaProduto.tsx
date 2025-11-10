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
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <LinkIcon color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && produtos.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum Produto foi encontrado!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;