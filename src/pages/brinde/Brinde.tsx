import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Brinde() {
  const { usuario } = useContext(AuthContext)

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const pontos = (usuario as any).pontos ?? 120

  function handleResgatar(tipo: string) {
    ToastAlerta(`Você tentou resgatar: ${tipo}. Sistema ainda em desenvolvimento!`, "info")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div className="container max-w-4xl bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-extrabold text-blue-800 mb-6 flex items-center gap-3">
          🎁 Brindes do Arara Delivery
        </h1>

        {/* PONTOS DO USUÁRIO */}
        <div className="bg-blue-100 border border-blue-300 rounded-2xl p-6 mb-10 shadow-inner">
          <p className="text-xl text-blue-900 font-semibold">
            Olá, <span className="text-rose-600">{usuario.nome}</span>!
          </p>
          <p className="text-3xl font-bold text-blue-800 mt-2">
            Você tem <span className="text-rose-600">{pontos}</span> pontos.
          </p>
        </div>

        {/* EXPLICAÇÃO DO SISTEMA */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            Quanto mais você pede com a gente, mais você ganha! Cada compra no Arara Delivery
            gera pontos que podem ser trocados por brindes exclusivos.
          </p>

          <p className="text-lg mb-4">
            🎉 A cada <strong className="text-blue-700">R$ 1 gasto</strong>, você ganha
            <strong className="text-blue-700"> 1 ponto</strong>.
          </p>

          <p className="text-lg mb-4">
            🦜 Ao atingir metas, você poderá resgatar cupons especiais ou até nossa
            <strong className="text-rose-600"> Arara de Pelúcia Colecionável</strong>!
          </p>

          <p className="text-lg font-semibold text-rose-600">
            ❤️ E tem mais: 5% do valor arrecadado no site é convertido em doações
            para causas de ajuda animal.
          </p>
        </div>

        {/* GRID DE BRINDES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CUPOM DE DESCONTO */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              💸 Cupom de Desconto
            </h2>
            <p className="text-gray-600 mb-4">
              Ganhe um cupom exclusivo para usar no próximo pedido!
            </p>

            <p className="text-lg font-semibold text-blue-600 mb-6">
              Requer: <span className="text-rose-600">80 pontos</span>
            </p>

            <button
              onClick={() => handleResgatar("Cupom de Desconto")}
              className="px-6 py-3 bg-rose-600 text-white rounded-xl shadow-md 
                         hover:bg-rose-700 active:bg-rose-800 transition-all font-semibold"
            >
              Resgatar
            </button>
          </div>

          {/* ARARA DE PELÚCIA */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              🦜 Arara de Pelúcia Colecionável
            </h2>
            <p className="text-gray-600 mb-4">
              Uma pelúcia exclusiva do Arara Delivery para sua coleção!
            </p>

            <p className="text-lg font-semibold text-blue-600 mb-6">
              Requer: <span className="text-rose-600">250 pontos</span>
            </p>

            <button
              onClick={() => handleResgatar("Arara de Pelúcia")}
              className="px-6 py-3 bg-rose-600 text-white rounded-xl shadow-md 
                         hover:bg-rose-700 active:bg-rose-800 transition-all font-semibold"
            >
              Resgatar
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Brinde
