import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Brinde() {
  const { usuario } = useContext(AuthContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pontos = (usuario as any).pontos ?? 120

  const brindes = [
    {
      nome: "Cupom de Desconto",
      descricao: "Ganhe um cupom exclusivo para usar no seu próximo pedido!",
      pontos: 80,
      tipo: "Cupom de Desconto",
      imagem: "https://i.imgur.com/pR1flOj.jpeg",
      disponivel: pontos >= 80,
    },
    {
      nome: "Arara de Pelúcia Colecionável",
      descricao: "Uma pelúcia exclusiva do Arara Delivery para sua coleção!",
      pontos: 250,
      tipo: "Arara de Pelúcia",
      imagem: "https://i.imgur.com/aAXHoU3.jpeg",
      disponivel: pontos >= 250,
    },
  ]

  function handleResgatar(tipo: string) {
    ToastAlerta(`Você tentou resgatar: ${tipo}. Sistema ainda em desenvolvimento!`, "info")
  }

  const BrindeCard = ({ brinde }: { brinde: typeof brindes[0] }) => (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-105 transition-all">
      
      {/* Imagem com overlay */}
      <div className="h-56 w-full relative">
        <img
          src={brinde.imagem}
          alt={brinde.tipo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <h2 className="absolute bottom-4 left-6 text-2xl font-extrabold text-white drop-shadow-lg flex items-center gap-2">
          {brinde.nome}
        </h2>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <p className="text-md text-gray-700 mb-4">
          {brinde.descricao}
        </p>

        <p className="text-sm text-green-700 font-semibold mb-4">
          Ao resgatar este brinde, você apoia nossa missão de levar a natureza até você!
        </p>

        <div className="flex justify-between items-center mt-auto">
          <p className="text-xl font-bold text-gray-900">
            <span className="font-bold" style={{ color: "#D4AF37" }}>{brinde.pontos}</span> pontos
          </p>

          <button
            onClick={() => handleResgatar(brinde.tipo)}
            disabled={!brinde.disponivel}
            className="px-6 py-2 text-white rounded-full shadow-lg font-bold transition-all transform hover:scale-105"
            style={{
              backgroundColor: brinde.disponivel ? "#D4AF37" : "#b7b7b7",
              cursor: brinde.disponivel ? "pointer" : "not-allowed",
              opacity: brinde.disponivel ? 1 : 0.7
            }}
          >
            {brinde.disponivel ? 'Resgatar Agora' : `Faltam ${brinde.pontos - pontos} pts`}
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-orange-50 flex justify-center px-4 py-16">
      <div className="container max-w-5xl bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-4"
        style={{ borderColor: "#D4AF37" }}>

        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 flex items-center gap-4 border-b pb-4"
          style={{ borderColor: "#D4AF37" }}>
          Arara Rewards Club
        </h1>

        {/* PONTOS DO USUÁRIO */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 mb-12 shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
          <p className="text-xl text-white font-medium mb-2">
            Bem-vindo(a), <span style={{ color: "#D4AF37" }} className="font-bold">{usuario.nome}</span>!
          </p>
          <div className="flex justify-between items-end">
            <p className="text-4xl font-black text-white">
              Seus Pontos:
            </p>
            <p className="text-6xl font-black ml-4 leading-none" style={{ color: "#D4AF37" }}>
              {pontos}
            </p>
          </div>
          <p className="text-sm text-blue-300 mt-2">
            Acumulados através dos seus pedidos no Arara Delivery!
          </p>
        </div>
        
        {/* EXPLICAÇÃO */}
        <div className="mb-16 text-gray-700 leading-relaxed bg-white p-6 rounded-2xl shadow-inner border-l-4"
          style={{ borderColor: "#D4AF37" }}>
          <p className="text-xl font-semibold text-blue-900 mb-4">
            Como Funciona o Programa de Fidelidade?
          </p>

          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              A cada <strong className="text-blue-700">R$ 1,00 gasto</strong>, você ganha
              <strong className="text-blue-700"> 1 ponto</strong> para resgatar prêmios!
            </li>
            <li>
              Troque seus pontos por cupons e brindes exclusivos, incluindo nossa
              <strong style={{ color: "#D4AF37" }}> Arara de Pelúcia Colecionável</strong>!
            </li>
            <li className="font-bold" style={{ color: "#D4AF37" }}>
              Causa Animal: 5% do valor arrecadado no site é doado para projetos de ajuda animal.
            </li>
          </ul>
        </div>

        {/* GRID DE BRINDES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {brindes.map((brinde, i) => (
            <BrindeCard key={i} brinde={brinde} />
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Os brindes estão sujeitos à disponibilidade de estoque. Resgate seu prêmio hoje!</p>
        </div>

      </div>
    </div>
  )
}

export default Brinde
