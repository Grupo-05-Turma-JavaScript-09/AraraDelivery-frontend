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
  const { usuario: usuarioLogado } = useContext(AuthContext);

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

  // Carrega categorias
  useEffect(() => {
    buscar("/categorias", setCategorias);
  }, []);

  // Define usuário do context
  useEffect(() => {
    if (usuarioLogado) {
      setProduto((prev) => ({ ...prev, usuario: usuarioLogado }));
    }
  }, [usuarioLogado]);

  // Atualiza inputs do produto
  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setProduto((prev) => ({
      ...prev,
      [name]:
        type === "number" ? (value === "" ? undefined : Number(value)) : value,
    }));
  }

  // Seleciona categoria
  function selecionarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const idCat = e.target.value;
    const cat = categorias.find((c) => String(c.id) === idCat);
    setProduto((prev) => ({ ...prev, categoria: cat }));
  }

  // Envia formulário com validação
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
      await cadastrar("/produtos", produto, () => {});
      ToastAlerta("Produto cadastrado com sucesso!", "sucesso");
      navigate("/produtos");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Erro ao cadastrar produto:", err);
      const mensagemErro =
        err.response?.data?.message || err.message || "Erro desconhecido";
      ToastAlerta(`Erro ao cadastrar produto: ${mensagemErro}`, "erro");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Cadastrar Produto</h1>

      <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome do Produto"
          value={produto.nome || ""}
          onChange={atualizarEstado}
          maxLength={100}
          required
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={produto.preco ?? ""}
          onChange={atualizarEstado}
          step="0.01"
          min="0"
          required
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        <textarea
          name="descricao"
          placeholder="Descrição do Produto"
          value={produto.descricao || ""}
          onChange={atualizarEstado}
          maxLength={300}
          rows={4}
          required
          className="border-2 border-gray-300 p-3 rounded-lg resize-none"
        />

        <input
          type="text"
          name="foto"
          placeholder="URL da Foto (opcional)"
          value={produto.foto || ""}
          onChange={atualizarEstado}
          maxLength={5000}
          className="border-2 border-gray-300 p-3 rounded-lg"
        />

        {/* SELECT DE CATEGORIA */}
        <select
          name="categoria"
          value={String(produto.categoria?.id ?? "")}
          onChange={selecionarCategoria}
          required
          className="border-2 border-gray-300 p-3 rounded-lg"
        >
          <option value="">Selecione a categoria...</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={String(cat.id)}>
              {cat.nome}
            </option>
          ))}
        </select>

        {/* Exibe usuário do context */}
        {usuarioLogado && (
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Usuário:</strong> {usuarioLogado.nome} (@{usuarioLogado.usuario})
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-gradient-to-r from-[#36BFB1] to-[#02735E] text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 mt-4 flex items-center justify-center gap-2 hover:from-[#2ba89a] hover:to-[#02624f] disabled:opacity-50"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            "Cadastrar Produto"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;