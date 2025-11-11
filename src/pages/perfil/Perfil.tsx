import { useContext, useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

interface IFormData {
  nome: string
  email: string
  telefoneComercial: string
  tipoCulinaria: string
  cnpj: string
  tempoPreparo: string
  horarioFuncionamento: string
  taxaEntrega: string
  faixaPreco: string
  cep: string
  cidade: string
  rua: string
  numero: string
  pontoReferencia: string
}

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
    pontoReferencia: ""
  })

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado", "info")
      navigate("/")
    }
  }, [usuario.token, navigate])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setUsuario({
      ...usuario,
      nome: formData.nome,
      usuario: formData.email
    })

    ToastAlerta("Perfil atualizado com sucesso!", "success")
  }

  interface InputFieldProps {
    label: string
    name: keyof IFormData
    type?: string
    placeholder?: string
    span?: boolean
  }

  const renderInput = ({ label, name, type = "text", placeholder, span = false }: InputFieldProps) => (
    <div className={span ? "md:col-span-2" : ""}>
      <label htmlFor={name} className="block font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={formData[name] as string}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full 
          mt-1 
          p-3 
          rounded-xl 
          border 
          border-gray-300 
          bg-white 
          text-gray-900
          transition-all 
          duration-300
          focus:outline-none 
          focus:border-blue-500 
          focus:ring-2 
          focus:ring-blue-500/50 
          placeholder:text-gray-400
        "
      />
    </div>
  )

  return (
    <div className="flex justify-center px-4 py-12 bg-gray-50 min-h-screen">
      <div className="container max-w-4xl bg-white rounded-3xl shadow-3xl p-10 transform transition-all duration-500 hover:shadow-4xl">

        {/* Cabeçalho do Perfil (Foto + Nome) - LINHA CINZA REMOVIDA AQUI */}
        <div className="flex items-center gap-6 mb-10 pb-6"> {/* Removidas as classes "border-b border-gray-100" */}
          <img
            className="
              w-32 
              h-32
              rounded-full
              border-4
              border-rose-500
              shadow-xl
              object-cover
              bg-white
            "
            src={usuario.foto}
            alt={`Foto de perfil de ${usuario.nome}`}
          />

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
              {usuario.nome}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mt-1">{usuario.usuario}</p>
          </div>
        </div>

        {/* Formulário de Edição */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 text-lg"
        >

          {/* GRUPO 1: Dados de Acesso */}
          <h2 className="md:col-span-2 text-2xl font-bold text-blue-700 border-b pb-2 mb-2 pt-4">
            Dados de Acesso
          </h2>
          
          {renderInput({ label: "Nome Completo", name: "nome" })}
          {renderInput({ label: "Email (Login)", name: "email", type: "email" })}

          {/* GRUPO 2: Informações do Estabelecimento */}
          <h2 className="md:col-span-2 text-2xl font-bold text-blue-700 border-b pb-2 mb-2 pt-4">
            Informações do Estabelecimento
          </h2>

          {renderInput({ label: "Telefone Comercial", name: "telefoneComercial", placeholder: "(11) 99999-9999" })}
          {renderInput({ label: "CNPJ", name: "cnpj", placeholder: "00.000.000/0001-00" })}
          {renderInput({ label: "Tipo de Culinária", name: "tipoCulinaria", placeholder: "Ex: Japonesa, Brasileira" })}
          {renderInput({ label: "Tempo Médio de Preparo (min)", name: "tempoPreparo", type: "number", placeholder: "Ex: 25" })}
          {renderInput({ label: "Horário de Funcionamento", name: "horarioFuncionamento", placeholder: "Ex: 10h às 22h" })}
          {renderInput({ label: "Taxa de Entrega (R$)", name: "taxaEntrega", placeholder: "Ex: 5.00" })}
          {renderInput({ label: "Faixa de Preço", name: "faixaPreco", placeholder: "Ex: $$, $$$" })}
          <div className="hidden md:block"></div> 

          {/* GRUPO 3: Endereço */}
          <h2 className="md:col-span-2 text-2xl font-bold text-blue-700 border-b pb-2 mb-2 pt-4">
            Endereço 
          </h2>

          {renderInput({ label: "CEP", name: "cep", placeholder: "00000-000" })}
          {renderInput({ label: "Cidade", name: "cidade", placeholder: "Ex: São Paulo" })}
          {renderInput({ label: "Rua", name: "rua", placeholder: "Ex: Rua das Flores" })}
          {renderInput({ label: "Número", name: "numero", placeholder: "Ex: 120" })}
          
          {renderInput({ label: "Ponto de Referência", name: "pontoReferencia", placeholder: "Ex: Próximo ao mercado central", span: true })}

          {/* Botão de Envio com Micro-interação */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-10">
            <button
              type="submit"
              className="
                px-16 py-4 
                bg-rose-600 
                text-white 
                rounded-xl 
                text-xl 
                font-bold 
                shadow-lg 
                hover:bg-rose-700 
                hover:shadow-xl
                active:bg-rose-800
                transition-all 
                duration-200
                transform hover:scale-[1.02]
              "
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Perfil