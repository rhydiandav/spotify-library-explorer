import axios from "axios";
import { useEffect, useState } from "react";

type AlbumListProps = {
  access_token: string;
};

export const AlbumList = ({ access_token }: AlbumListProps) => {
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

  return (
    <>
      {albums.length ? (
        albums.map(({ album }) => {
          return (
            <div key={album.id}>
              <p>{album.name}</p>
            </div>
          );
        })
      ) : (
        <p>No albums</p>
      )}
    </>
  );
};
