import Head from "next/head";
import { LoginButton } from "@/components/LoginButton";
import { AlbumList } from "@/components/AlbumList";

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
        <h1>Spotify Library Explorer</h1>
        {access_token ? (
          <AlbumList access_token={access_token} />
        ) : (
          <LoginButton />
        )}
      </main>
    </>
  );
}

Home.getInitialProps = async ({ query }: HomeInitialProps) => {
  const { access_token } = query;
  return { access_token };
};
