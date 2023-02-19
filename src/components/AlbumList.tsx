import axios from "axios";
import { useEffect, useState } from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

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
    <ImageList sx={{ width: "100%", height: "100%" }} cols={5}>
      {albums.map(({ album }) => (
        <ImageListItem key={album.id}>
          <img
            src={`${album.images[0].url}?w=164&h=164&fit=crop&auto=format`}
            alt={album.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={album.name}
            subtitle={album.artists[0].name}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
