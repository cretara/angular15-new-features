export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const initialPost: Post = {
  userId: 0,
  id: 0,
  title: "",
  body: "",
};
