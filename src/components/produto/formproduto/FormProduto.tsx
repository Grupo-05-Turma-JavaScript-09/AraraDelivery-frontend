import { useEffect, useState, useContext, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, cadastrar } from "../../../services/Services";

function FormProduto() {
  const navigate = useNavigate();
  const { usuario: usuarioLogado, handleLogout } = useContext(AuthContext);
  const token = usuarioLogado?.token || "";

  const [produto, setProduto] = useState<Produto>({
    nome: "",
    preco: undefined,
    descricao: "",
    foto: "",
    categoria: undefined,
    usuario: undefined,
  } as Produto);

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
      if (token) {
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
    }
    carregarCategorias();
  }, [token, handleLogout]);

  
  useEffect(() => {
    if (usuarioLogado) {
      setProduto((prev) => ({ ...prev, usuario: usuarioLogado }));
    }
  }, [usuarioLogado]);

  
  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setProduto((prev) => ({
      ...prev,
      [name]:
        type === "number" ? (value === "" ? undefined : Number(value)) : value,
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

    if (!produto.preco || produto.preco <= 0) {
      ToastAlerta("O preço deve ser maior que zero.", "erro");
      return;
    }

    if (!produto.categoria) {
      ToastAlerta("Selecione uma categoria válida.", "erro");
      return;
    }

    if (!produto.usuario) {
      ToastAlerta("Usuário não identificado.", "erro");
      return;
    }

    setIsLoading(true);
    try {
      await cadastrar("/produtos", produto, () => {}, {
        headers: { Authorization: token },
      });
      ToastAlerta("Produto cadastrado com sucesso!", "sucesso");
      navigate("/produtos");
    } catch (err: any) {
      console.error("Erro ao cadastrar produto:", err);
      if (err.response?.status === 401) {
        ToastAlerta("Sessão expirada. Faça login novamente.", "info");
        handleLogout();
      } else {
        const mensagemErro =
          err.response?.data?.message || err.message || "Erro desconhecido";
        ToastAlerta(`Erro ao cadastrar produto: ${mensagemErro}`, "erro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfdfd] to-[#f5f5f5] flex items-center justify-center py-12 px-6">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-[#014034] mb-8 text-center">
          Cadastrar Produto
        </h1>

        <form onSubmit={enviarFormulario} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-semibold text-gray-700">
              Nome do Produto
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Ex: Café Expresso, Bolo de Chocolate..."
              value={produto.nome || ""}
              onChange={atualizarEstado}
              maxLength={100}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02735E]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="preco" className="font-semibold text-gray-700">
              Preço (R$)
            </label>
            <input
              type="number"
              id="preco"
              name="preco"
              placeholder="0.00"
              value={produto.preco ?? ""}
              onChange={atualizarEstado}
              step="0.01"
              min="0"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02735E]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="font-semibold text-gray-700">
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
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02735E] resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="foto" className="font-semibold text-gray-700">
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
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02735E]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="categoria" className="font-semibold text-gray-700">
              Categoria
            </label>
            <select
              id="categoria"
              name="categoria"
              value={String(produto.categoria?.id ?? "")}
              onChange={selecionarCategoria}
              required
              disabled={isLoadingCategorias}
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02735E] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">
                {isLoadingCategorias ? "Carregando..." : "Selecione a categoria..."}
              </option>
              {categorias.map((cat) => (
                <option key={cat.id} value={String(cat.id)}>
                  {cat.nome}
                </option>
              ))}
            </select>
          </div>

          {usuarioLogado && (
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-700">Usuário:</strong> {usuarioLogado.nome} (@{usuarioLogado.usuario})
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || isLoadingCategorias}
            className="bg-gradient-to-r from-[#36BFB1] to-[#02735E] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-[#2aa698] hover:to-[#025b49] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <ClipLoader color="#ffffff" size={20} />
                <span>Cadastrando...</span>
              </>
            ) : (
              "Cadastrar Produto"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormProduto;