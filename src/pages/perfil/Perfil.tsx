import { useContext, useEffect, useState, useCallback } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import type IFormData from "../../models/IFormData"

function Perfil() {
  const navigate = useNavigate()
  const { usuario, setUsuario } = useContext(AuthContext)

  const [formData, setFormData] = useState<IFormData>({
    nome: usuario.nome,
    email: usuario.usuario,
    telefoneComercial: "",
    tipoCulinaria: "",
    cnpj: "",
    tempoPreparo: "",
    horarioFuncionamento: "",
    taxaEntrega: "",
    faixaPreco: "",
    cep: "",
    cidade: "",
    rua: "",
    numero: "",
    pontoReferencia: "",
  })

  // Proteção de rota
  useEffect(() => {
    if (!usuario.token) {
      ToastAlerta("Você precisa estar logado", "info")
      navigate("/")
    }
  }, [usuario.token, navigate])

  // Atualização dos inputs
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    },
    []
  )

  // Salvar Perfil
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setUsuario({
      ...usuario,
      nome: formData.nome,
      usuario: formData.email,
    })

    ToastAlerta("Perfil atualizado com sucesso!", "successo")
  }

  // INPUT GENÉRICO
  const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    span = false,
  }: {
    label: string
    name: keyof IFormData
    type?: string
    placeholder?: string
    span?: boolean
  }) => (
    <div className={span ? "md:col-span-2" : ""}>
      <label htmlFor={name} className="block font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formData[name] as string}
        onChange={handleChange}
        className="w-full mt-1 p-3 rounded-xl border border-gray-300 bg-white text-gray-900
                 transition-all duration-300 focus:outline-none focus:border-blue-500 
                 focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-400"
      />
    </div>
  )

  return (
    <div className="flex justify-center px-4 py-12 bg-gray-50 min-h-screen">
      <div className="container max-w-4xl bg-white rounded-3xl shadow-3xl p-10">

        {/* HEADER + BOTÃO */}
        <div className="flex items-center justify-between mb-10 pb-4">

          {/* FOTO + NOME */}
          <div className="flex items-center gap-6">
            {usuario.foto ? (
              <img
                src={usuario.foto}
                alt={`Foto de perfil de ${usuario.nome}`}
                className="w-32 h-32 rounded-full border-4 border-rose-500 shadow-xl object-cover bg-white"
              />
            ) : (
              <div className="w-32 h-32 flex items-center justify-center rounded-full 
                              border-4 border-rose-500 shadow-xl 
                              bg-gradient-to-br from-blue-500 to-rose-500">
                <span className="text-white font-bold text-4xl">
                  {usuario.nome?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}

            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
                {usuario.nome}
              </h1>
              <p className="text-lg md:text-xl text-gray-500 mt-1">
                {usuario.usuario}
              </p>
            </div>
          </div>

          {/* BOTÃO VER BRINDES */}
          <Link to="/brindes">
            <button
              className="px-8 py-3 bg-rose-600 text-white rounded-xl text-lg font-semibold
                         shadow-md hover:bg-rose-700 hover:shadow-lg active:bg-rose-800
                         transition-all duration-200 transform hover:scale-[1.03] flex items-center gap-2"
            >
              🎁 Ver seus Brindes!
            </button>
          </Link>
        </div>

        {/* FORMULÁRIO */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 text-lg"
        >
          {/* DADOS DE ACESSO */}
          <SectionTitle title="Dados de Acesso" />
          <InputField label="Nome Completo" name="nome" />
          <InputField label="Email (Login)" name="email" type="email" />

          {/* INFORMAÇÕES DO ESTABELECIMENTO */}
          <SectionTitle title="Informações do Estabelecimento" />
          <InputField label="Telefone Comercial" name="telefoneComercial" placeholder="(11) 99999-9999" />
          <InputField label="CNPJ" name="cnpj" placeholder="00.000.000/0001-00" />
          <InputField label="Tipo de Culinária" name="tipoCulinaria" placeholder="Ex: Japonesa, Brasileira" />
          <InputField label="Tempo Médio de Preparo (min)" name="tempoPreparo" type="number" placeholder="Ex: 25" />
          <InputField label="Horário de Funcionamento" name="horarioFuncionamento" placeholder="Ex: 10h às 22h" />
          <InputField label="Taxa de Entrega (R$)" name="taxaEntrega" placeholder="Ex: 5.00" />
          <InputField label="Faixa de Preço" name="faixaPreco" placeholder="$$ ou $$$" />

          {/* ENDEREÇO */}
          <SectionTitle title="Endereço" />
          <InputField label="CEP" name="cep" placeholder="00000-000" />
          <InputField label="Cidade" name="cidade" placeholder="Ex: São Paulo" />
          <InputField label="Rua" name="rua" placeholder="Ex: Rua das Flores" />
          <InputField label="Número" name="numero" placeholder="Ex: 120" />
          <InputField
            label="Ponto de Referência"
            name="pontoReferencia"
            placeholder="Ex: Próximo ao mercado central"
            span
          />

          {/* BOTÃO SALVAR */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-10">
            <button
              type="submit"
              className="px-16 py-4 bg-rose-600 text-white rounded-xl text-xl font-bold 
                         shadow-lg hover:bg-rose-700 hover:shadow-xl 
                         active:bg-rose-800 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

/* COMPONENTE DE TÍTULO DAS SEÇÕES */
const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="md:col-span-2 text-2xl font-bold text-blue-700 border-b pb-2 mb-2 pt-4">
    {title}
  </h2>
)

export default Perfil
