import type Usuario from "./Usuario";
import type Categoria from "./Categoria";

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: Categoria;
  usuario: Usuario;
}
