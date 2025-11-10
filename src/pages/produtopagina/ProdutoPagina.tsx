
// pages/produto/ProdutoPagina.tsx
import CardProduto from '../../components/produto/cardproduto/CardProduto';

const ProdutoPagina = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gerenciar Produtos</h1>
      <p className="text-gray-600 mb-6">Página para gerenciar todos os produtos</p>
      <CardProduto />
    </div>
  );
};

export default ProdutoPagina;