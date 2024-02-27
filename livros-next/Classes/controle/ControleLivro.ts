// src/controle/ControleLivros.ts
import Livro from "../modelo/Livro";

const livros: Livro[] = [
  { codigo: 1, codEditora: 1, titulo: "Livro 1", resumo: "Resumo do Livro 1", autores: ["Autor 1"] },
  { codigo: 2, codEditora: 2, titulo: "Livro 2", resumo: "Resumo do Livro 2", autores: ["Autor 2"] },
  { codigo: 3, codEditora: 3, titulo: "Livro 3", resumo: "Resumo do Livro 3", autores: ["Autor 3"] },
];

class ControleLivro {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigo = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
    livro.codigo = codigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivro;
