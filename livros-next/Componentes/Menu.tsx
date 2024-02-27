import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Loja Next</a>
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Página Inicial</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista">
                <a className="nav-link">Livro Lista</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados">
                <a className="nav-link">Livro Dados</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
