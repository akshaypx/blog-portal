import { create } from "zustand";
import { Post, Posts } from "./interfaces";

interface PostStore {
  searchWord: string;
  loading: boolean;
  PostsList: Post[];
  Post: Post | null;
  setSearchWord: (word: string) => void;
  setLoading: (loading: boolean) => void;
  fetchPosts: () => Promise<void>;
  fetchPost: (id: number) => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
  PostsList: [],
  Post: null,
  searchWord: "",
  loading: true,
  setSearchWord: (word: string) => {
    set({ searchWord: word });
  },
  setLoading: (loading: boolean) => {
    set({ loading: !loading });
  },
  fetchPosts: async () => {
    const response = await fetch("http://localhost:3000/posts");
    set({ PostsList: await response.json() });
    set({ loading: false });
  },
  fetchPost: async (id: number) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    set({ Post: await response.json() });
    set({ loading: false });
  },
}));
