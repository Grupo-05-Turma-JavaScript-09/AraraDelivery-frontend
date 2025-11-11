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
    preco: undefined,
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
      await buscar(`/produtos/${id}`, setProduto, {
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

    if (!usuarioLogado) {
      ToastAlerta("Usuário não identificado.", "erro");
      return;
    }

    setIsLoading(true);

    const produtoParaEnviar = {
      id: id ? Number(id) : 0,
      nome: produto.nome,
      preco: produto.preco,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center py-12 px-6">
      <div className="bg-white rounded-3xl shadow-md border border-gray-200 w-full max-w-xl p-10">

        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {id ? "Editar Produto" : "Cadastrar Produto"}
        </h1>

        <form onSubmit={enviarFormulario} className="flex flex-col gap-6">

          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Nome do Produto</label>
            <input
              type="text"
              name="nome"
              value={produto.nome || ""}
              onChange={atualizarEstado}
              placeholder="Ex: Café Expresso"
              required
              className="border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Preço */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Preço (R$)</label>
            <input
              type="number"
              name="preco"
              value={produto.preco ?? ""}
              onChange={atualizarEstado}
              placeholder="0.00"
              step="0.01"
              required
              className="border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Descrição */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Descrição</label>
            <textarea
              name="descricao"
              value={produto.descricao || ""}
              onChange={atualizarEstado}
              rows={4}
              required
              placeholder="Descreva o produto..."
              className="border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Foto */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">URL da Foto</label>
            <input
              type="text"
              name="foto"
              value={produto.foto || ""}
              onChange={atualizarEstado}
              placeholder="https://exemplo.com/imagem.jpg"
              className="border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Categoria */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Categoria</label>
            <select
              value={String(produto.categoria?.id ?? "")}
              onChange={selecionarCategoria}
              required
              disabled={isLoadingCategorias}
              className="border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-300 disabled:opacity-50"
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

          {/* Usuário logado */}
          {usuarioLogado && (
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-700">Usuário:</strong>{" "}
                {usuarioLogado.nome} (@{usuarioLogado.usuario})
              </p>
            </div>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={isLoading || isLoadingCategorias}
            className="bg-gray-900 hover:bg-black text-white py-3 rounded-2xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <ClipLoader color="#ffffff" size={20} />
                <span>{id ? "Salvando..." : "Cadastrando..."}</span>
              </>
            ) : id ? (
              "Salvar Alterações"
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
