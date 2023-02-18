import Head from "next/head";
import { LOGIN_URL } from "consts";
import { useEffect, useState } from "react";
import axios from "axios";

type HomeInitialProps = {
  query: {
    access_token: string;
  };
};

type HomeProps = {
  access_token: string;
};

export default function Home({ access_token }: HomeProps) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/albums", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setAlbums(response.data.items);
      });
  }, []);

  console.log(albums);

  return (
    <>
      <Head>
        <title>Spotify Library Explorer</title>
      </Head>
      <main>
        <h1>Spotify Library Explorer</h1>
        {access_token ? (
          <p>Access Token Found</p>
        ) : (
          <a href={LOGIN_URL}>Login with Spotify</a>
        )}
        {albums.length &&
          albums.map(({ album }) => {
            return (
              <div key={album.id}>
                <p>{album.name}</p>
              </div>
            );
          })}
      </main>
    </>
  );
}

Home.getInitialProps = async ({ query }: HomeInitialProps) => {
  const { access_token } = query;
  return { access_token };
};
