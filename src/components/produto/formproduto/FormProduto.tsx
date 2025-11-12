/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useEffect,
  useState,
  useContext,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, cadastrar, atualizar } from "../../../services/Services";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { usuario: usuarioLogado, handleLogout } = useContext(AuthContext);
  const token = usuarioLogado?.token || "";

  
  const [produto, setProduto] = useState<Partial<Produto>>({
    nome: "",
    preco: 0,
    descricao: "",
    foto: "",
    categoria: undefined,
    usuario: undefined,
  });

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCategorias, setIsLoadingCategorias] = useState(true);

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    async function carregarCategorias() {
      try {
        setIsLoadingCategorias(true);
        await buscar("/categorias", setCategorias, {
          headers: { Authorization: token },
        });
      } catch (error: any) {
        if (error.response?.status === 401) {
          ToastAlerta("Sessão expirada. Faça login novamente.", "info");
          handleLogout();
        } else {
          ToastAlerta("Erro ao carregar categorias.", "erro");
        }
      } finally {
        setIsLoadingCategorias(false);
      }
    }

    if (token) carregarCategorias();
  }, [token, handleLogout]);

  async function carregarProduto(id: string) {
    try {
      const carregar = (dados: Produto) => {
        setProduto({
          ...dados,
          preco: dados.preco ?? 0, 
        });
      };

      await buscar(`/produtos/${id}`, carregar, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao carregar produto.", "erro");
      }
    }
  }

  useEffect(() => {
    if (id) carregarProduto(id);
  }, [id]);

  useEffect(() => {
    if (usuarioLogado) {
      setProduto((prev) => ({ ...prev, usuario: usuarioLogado }));
    }
  }, [usuarioLogado]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setProduto((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? value === ""
            ? 0
            : Number(value)
          : value,
    }));
  }

  function selecionarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const idCat = e.target.value;
    const cat = categorias.find((c) => String(c.id) === idCat);
    setProduto((prev) => ({ ...prev, categoria: cat }));
  }

  async function enviarFormulario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!produto.nome) {
      ToastAlerta("O nome do produto é obrigatório.", "erro");
      return;
    }

    if (produto.preco === undefined || produto.preco < 0) {
      ToastAlerta("O preço deve ser zero ou maior.", "erro");
      return;
    }

    if (!produto.categoria) {
      ToastAlerta("Selecione uma categoria válida.", "erro");
      return;
    }

    if (!usuarioLogado) {
      ToastAlerta("Usuário não identificado.", "erro");
      return;
    }

    setIsLoading(true);

    const produtoParaEnviar = {
      id: id ? Number(id) : 0,
      nome: produto.nome,
      preco: Number(produto.preco) || 0, 
      descricao: produto.descricao || "",
      foto: produto.foto || "",
      categoria: {
        id: produto.categoria.id,
      },
      usuario: usuarioLogado,
    };

    try {
      if (id) {
        await atualizar("/produtos", produtoParaEnviar, () => {}, {
          headers: { Authorization: token },
        });

        ToastAlerta("Produto atualizado com sucesso!", "sucesso");
      } else {
        await cadastrar("/produtos", produtoParaEnviar, () => {}, {
          headers: { Authorization: token },
        });

        ToastAlerta("Produto cadastrado com sucesso!", "sucesso");
      }

      navigate("/produtos");
    } catch (err: any) {
      if (err.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao salvar produto.", "erro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-white from-50% to-amber-100 to-50% py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 bg-linear-to-r from-blue-600 to-rose-600 rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg mr-4 border border-white/30">
              <div className="text-white font-bold text-2xl">🦜</div>
            </div>
            <div>
              <h1 className="text-4xl font-black text-white mb-2">
                {id ? "Editar Produto" : "Cadastrar Produto"}
              </h1>
              <div className="w-24 h-1 bg-amber-300 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="max-w-md mx-auto">
            <p className="text-lg text-white/90 leading-relaxed font-medium">
              {id
                ? "Atualize as informações com precisão"
                : "Cadastre novos produtos com a agilidade da Arara"}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 mb-12">
          <form onSubmit={enviarFormulario} className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label htmlFor="nome" className="font-bold text-gray-800 text-lg">
                Nome do Produto
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Ex: Café Expresso..."
                value={produto.nome || ""}
                onChange={atualizarEstado}
                maxLength={100}
                required
                className="border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="preco" className="font-bold text-gray-800 text-lg">
                Preço (R$)
              </label>
              <input
                type="number"
                id="preco"
                name="preco"
                placeholder="0.00"
                value={produto.preco !== undefined ? produto.preco : ""}
                onChange={atualizarEstado}
                step="0.01"
                min="0"
                required
                className="border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="descricao"
                className="font-bold text-gray-800 text-lg"
              >
                Descrição
              </label>
              <textarea
                id="descricao"
                name="descricao"
                placeholder="Descreva o produto..."
                value={produto.descricao || ""}
                onChange={atualizarEstado}
                maxLength={300}
                rows={4}
                required
                className="border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 placeholder-gray-400 resize-none"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="foto" className="font-bold text-gray-800 text-lg">
                URL da Foto (opcional)
              </label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="https://exemplo.com/imagem.jpg"
                value={produto.foto || ""}
                onChange={atualizarEstado}
                maxLength={5000}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="categoria"
                className="font-bold text-gray-800 text-lg"
              >
                Categoria
              </label>
              <select
                id="categoria"
                name="categoria"
                value={String(produto.categoria?.id ?? "")}
                onChange={selecionarCategoria}
                required
                disabled={isLoadingCategorias}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">
                  {isLoadingCategorias
                    ? "Carregando categorias..."
                    : "Selecione a categoria..."}
                </option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={String(cat.id)}>
                    {cat.nome}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading || isLoadingCategorias}
              className="bg-linear-to-r from-blue-600 to-rose-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-rose-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4 group"
            >
              {isLoading ? (
                <>
                  <ClipLoader color="#ffffff" size={20} />
                  <span>{id ? "Salvando..." : "Cadastrando..."}</span>
                </>
              ) : id ? (
                <>
                  <span>Salvar Alterações</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span>Cadastrar Produto</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormProduto;
