import { create } from "zustand";

interface AuthState {
  status: "checking" | "not-authenticated" | "authenticated";
  token?: string;
  user?: {
    name: string;
    email: string;
  };
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: "checking",
  user: undefined,
  token: undefined,
  login: (email: string, password: string) => {
    set({ status: "authenticated", user: { name: "Esteban", email }, token: "ABC123" });
  },
  logout: () => {
    set({ status: "not-authenticated", user: undefined, token: undefined });
  },
}));
