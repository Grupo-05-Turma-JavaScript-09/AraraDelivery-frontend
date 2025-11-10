import { useEffect, useState } from "react";
import { LinkIcon } from "@phosphor-icons/react";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/Services";
import CardProduto from "../cardproduto/CardProduto";

function ListaProdutos() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    buscarProdutos();
  }, []); // executa só uma vez

  async function buscarProdutos() {
    try {
      setIsLoading(true);

      await buscar('/produtos', setProdutos, {});

    } catch (error: any) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <LinkIcon color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum Produto foi encontrado!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;