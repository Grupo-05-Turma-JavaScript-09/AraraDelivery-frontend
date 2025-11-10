// pages/categoria/CategoriaPagina.tsx
import CardCategoria from '../../components/categoria/cardcategoria/CardCategoria';

const CategoriaPagina = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gerenciar Categorias</h1>
      <p className="text-gray-600 mb-6">Página para gerenciar todas as categorias</p>
      <CardCategoria />
    </div>
  );
};

export default CategoriaPagina;