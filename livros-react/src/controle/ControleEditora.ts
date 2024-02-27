import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  { codEditora: 1, nome: "Editora A" },
  { codEditora: 2, nome: "Editora B" },
  { codEditora: 3, nome: "Editora C" },
];

class ControleEditora {
  getNomeEditora(codEditora: number): string {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : "Editora não encontrada";
  }

  getEditoras(): Editora[] {
    return editoras;
  }
}

export default ControleEditora;
