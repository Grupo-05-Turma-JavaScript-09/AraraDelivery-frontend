import type Usuario from "./Usuario";
import type Categoria from "./Categoria"

export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}