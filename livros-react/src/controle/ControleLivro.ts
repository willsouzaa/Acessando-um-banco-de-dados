import Livro from "../modelo/Livro";

class ControleLivro {
  async obterLivros(): Promise<Livro[]> {
    const response = await fetch('http://localhost:3030/livros');
    if (response.ok) {
      const livros = await response.json();
      return livros;
    } else {
      throw new Error('Erro ao obter livros');
    }
  }

  async incluir(livro: Livro): Promise<void> {
    const response = await fetch('http://localhost:3030/livros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livro)
    });
    
    if (!response.ok) {
      throw new Error('Erro ao incluir livro');
    }
  }

  async excluir(codigo: number): Promise<void> {
    const response = await fetch(`http://localhost:3030/livros/${codigo}`, {
      method: 'DELETE'
    });
    
    if (!response.ok) {
      throw new Error('Erro ao excluir livro');
    }
  }
}

export default ControleLivro;
