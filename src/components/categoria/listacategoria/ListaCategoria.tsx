/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { LinkIcon } from "@phosphor-icons/react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaCategorias() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const {usuario, handleLogout} = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    if (token === '') {
        ToastAlerta('Você precisa estar logado!', 'info');
        navigate('/');
    } else {
      buscarCategorias();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]); // Executa quando o token muda

  async function buscarCategorias() {
    try {
      setIsLoading(true);

      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token }
      });

    } catch (error: any) {
      console.error("Erro ao buscar categorias:", error);
      
      // Verifica se o erro é de autenticação (401)
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
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <LinkIcon color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma categoria foi encontrada!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;