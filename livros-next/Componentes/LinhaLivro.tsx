import React from "react";
import ControleEditora from "../Classes/controle/ControleEditora";
import  Livro  from "../Classes/modelo/Livro";

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => Promise<void>;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {

  const controleEditora = new ControleEditora();


  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td>{props.livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{props.livro.resumo}</td>
      <td>
        <ul>
          {props.livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={props.excluir}>Excluir</button>
      </td>
    </tr>
  );

};
