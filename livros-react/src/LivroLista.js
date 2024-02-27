import React, { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivro";
import ControleEditora from './controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr class="container text-center">
      <td className="bg-secondary">{livro.titulo}</td>
      <td className="bg-light">{nomeEditora}</td>
      <td className="bg-secondary">{livro.resumo}</td>
      <td className="bg-light">
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td className="bg-secondary">
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const controleLivro = new ControleLivro();
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
    const controleLivro = new ControleLivro();
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1 class="container text-center">Lista de Livros</h1>
      <table class="container text-center">
        <thead>
          <tr className=" bg-dark text-light">
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
