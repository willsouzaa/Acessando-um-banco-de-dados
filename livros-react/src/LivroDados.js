import React, { useState } from "react";
import ControleLivro from "./controle/ControleLivro";
import ControleEditora from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";

const LivroDados = () => {

  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();


  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));


  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);


  const navigate = useNavigate();


  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

 
  const incluir = (event) => {
    event.preventDefault();
    const livro = {
      codigo: 0,
      codEditora,
      titulo,
      resumo,
      autores: autores.split("\n").map((autor) => autor.trim()),
    };
    controleLivro.incluir(livro);
    navigate("/");
  };


  return (
    <main>
      <h1>Cadastro de Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título:
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo:
          </label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores (um por linha):
          </label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="codEditora" className="form-label">
            Editora:
          </label>
          <select
            className="form-select"
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar Livro
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
