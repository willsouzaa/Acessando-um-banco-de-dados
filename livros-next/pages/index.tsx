
import Head from "next/head";
import { Menu } from "../Componentes/Menu";

const Home: React.FC = () => {
  return (
    <div className="container">
      {}
      <Head>
        <title>Loja Next</title>
      </Head>

      {}
      <Menu />

      {}
      <main style={styles.main}>
        {}
        <h1>
  Página Inicial
</h1>
      </main>
    </div>
  );
};

const styles = {
  main: {
    marginTop: "20px",
  },
  title: {
    fontSize: "2em",
    textAlign: "center",
  },
};

export default Home;
