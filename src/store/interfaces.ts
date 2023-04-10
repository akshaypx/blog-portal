export interface Post {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
  author: string;
  dateTime: string;
}

export interface Posts {
  Posts: Post[] | null;
}

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  role: string;
}
