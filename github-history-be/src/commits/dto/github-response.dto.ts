export class GithubResponseDTO {
  sha: string;
  commit: {
    author: Author;
    message: string;
  };
  author: {
    avatar_url: string;
  };
}

type Author = {
  name: string;
  email: string;
  date: string
};
