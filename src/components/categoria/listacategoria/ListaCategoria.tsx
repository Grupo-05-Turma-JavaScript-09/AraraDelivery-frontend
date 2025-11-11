/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
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
    <div className="min-h-screen bg-linear-to-br from-[#fdfdfd] to-[#f5f5f5] py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-4xl font-bold text-[#014034] tracking-tight">
            Categorias de Produtos
          </h1>
          <Link
            to="/categorias/cadastrar"
            className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#36BFB1] to-[#02735E] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all hover:from-[#2aa698] hover:to-[#025b49]"
          >
            <Plus size={22} weight="bold" />
            Nova Categoria
          </Link>
        </div>

        {/* Estado de carregamento */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <ClipLoader color="#02735E" size={40} />
          </div>
        )}

        {/* Nenhum item */}
        {!isLoading && categorias.length === 0 && (
          <div className="text-center py-12 bg-white/80 rounded-2xl shadow-md">
            <p className="text-gray-600 text-lg font-medium">
              Nenhuma categoria cadastrada ainda.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Clique em “Nova Categoria” para adicionar uma.
            </p>
          </div>
        )}

        {/* Grid de categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
