import { LOGIN_URL } from "consts";

export const LoginButton = () => {
  return (
    <a href={LOGIN_URL}>
      <button>Login with Spotify</button>
    </a>
  );
};
