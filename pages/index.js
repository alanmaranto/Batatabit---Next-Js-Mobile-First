import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          charSet="utf-8"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <header>
          <Image src="/assets/img/logo.svg" alt="" width={140} height={140} />
          <div className="header--title-container">
            <h1>La próxima revolución en el intercambio de criptomonedas</h1>
            <p>
              Batatabit te ayuda a navegar entre los diferentes precios y
              tendencias
            </p>
            <Link href="/">
              <a className="header--button">
                Conoce nuestros planes <span>i</span>
              </a>
            </Link>
          </div>
        </header>

        <main>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </main>

        <footer></footer>
      </body>
    </div>
  );
}
