import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'

interface CardProdutoProps{
  produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>

            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                {produto.nome}
            </header>

            {/* Conteúdo lado a lado */}
            <div className="flex bg-slate-200 p-4 gap-4">

                {/* Foto */}
                <div className="w-40 h-40 bg-gray-100 rounded-xl overflow-hidden">
                    {produto.foto ? (
                        <img 
                            src={produto.foto} 
                            alt={produto.nome}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            Sem imagem
                        </div>
                    )}
                </div>

                {/* Descrição */}
                <p className='text-xl flex-1'>
                    {produto.descricao}
                </p>
            </div>

            <div className="flex">
                <Link to={`/editarproduto/${produto.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarproduto/${produto.id}`} 
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProduto
