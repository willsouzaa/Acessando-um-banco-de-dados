class Editora {
    constructor(public codEditora: number, public nome: string) {}
  }
  

  class Livro {
    constructor(
      public codigo: number,
      public codEditora: number,
      public titulo: string,
      public resumo: string,
      public autores: string[]
    ) {}
  }
  export default Editora;