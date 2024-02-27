import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Menu } from "../Componentes/Menu";
import styles from "../styles/Home.module.css";

const baseURL = "http://localhost:3030/livros"; 

const LivroDados: React.FC = () => {
  const [opcoes, setOpcoes] = useState<{ value: number; text: string }[]>([]);
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);
  const navigate = useRouter();

  useEffect(() => {
    const obterOpcoes = async () => {
      try {
        const resposta = await fetch("http://localhost:3030/editoras");
        const dados = await resposta.json();
        const opcoes = dados.map((editora: any) => ({
          value: editora.codEditora,
          text: editora.nome,
        }));
        setOpcoes(opcoes);
      } catch (erro) {
        console.error("Erro ao obter opções:", erro);
      }
    };

    obterOpcoes();
  }, []);

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const livro = {
      codEditora,
      titulo,
      resumo,
      autores: autores.split("\n"),
    };

    try {
      const resposta = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });

      if (resposta.ok) {
        navigate.push("/LivroLista");
      } else {
        console.error("Erro ao incluir livro");
      }
    } catch (erro) {
      console.error("Erro ao incluir livro:", erro);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livros Next - Dados</title>
      </Head>
      <Menu />

      <main className={styles.main}>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={titulo}
              onChange={(evento) => setTitulo(evento.target.value)}
              required
            />
          </div>
          <div>
            <label>Resumo:</label>
            <textarea
              value={resumo}
              onChange={(evento) => setResumo(evento.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label>Autores:</label>
            <textarea
              value={autores}
              onChange={(evento) => setAutores(evento.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label>Editora:</label>
            <select value={codEditora} onChange={tratarCombo} required>
              <option value={0}>Selecione...</option>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
