import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { LOGIN_URL } from "consts";

type HomeInitialProps = {
  query: {
    access_token: string;
  };
};

type HomeProps = {
  access_token: string;
};

export default function Home({ access_token }: HomeProps) {
  return (
    <>
      <Head>
        <title>Spotify Library Explorer</title>
      </Head>
      <main>
        <h1 className={styles.title}>Spotify Library Explorer</h1>
        {access_token ? (
          <p>Access Token Found</p>
        ) : (
          <a href={LOGIN_URL}>Login with Spotify</a>
        )}
      </main>
    </>
  );
}

Home.getInitialProps = async ({ query }: HomeInitialProps) => {
  const { access_token } = query;
  return { access_token };
};
