import { create } from "zustand";
import { User } from "./interfaces";

interface UserStore {
  User: User | null;
  loading: boolean;
  isLoggedIn: boolean;
  isError: string | null;
  loginUser: (email: string, password: string) => Promise<void>;
  signupUser: (
    email: string,
    password: string,
    name: string,
    role?: string
  ) => Promise<void>;
  logoutUser: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  User: null,
  loading: true,
  isLoggedIn: false,
  isError: null,
  loginUser: async (email: string, password: string) => {
    const response = await fetch("http://localhost:3000/users");
    const userList = await response.json();
    userList.map((user: User) => {
      if (user.email === email && user.password === password) {
        set({ User: user });
        set({ isLoggedIn: true });
      } else {
        set({ isError: "User Not Found! Register" });
      }
    });
  },
  signupUser: async (
    email: string,
    password: string,
    name: string,
    role?: string
  ) => {
    const body = { email: email, password: password, name: name, role: role };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      await fetch("http://localhost:3000/users", requestOptions)
        .then((response) => response.json())
        .then((json) => {
          set({ User: json });
          set({ isLoggedIn: true });
        });
    } catch (e: any) {
      set({ isError: e.message });
    }
  },
  logoutUser: async () => {
    set({ User: null });
  },
}));
