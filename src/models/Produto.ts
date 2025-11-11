import type Usuario from "./Usuario";
import type Categoria from "./Categoria";

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  foto: string;
  categoria: Categoria;
  usuario: Usuario;
}