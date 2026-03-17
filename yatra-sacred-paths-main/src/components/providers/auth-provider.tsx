"use client";

import * as React from "react";

export type UserRole = "pilgrim" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
};

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signIn: (payload: { emailOrPhone: string; password: string }) => Promise<void>;
  signUp: (payload: { name: string; email: string; phone: string }) => Promise<void>;
  signOut: () => void;
  resetPassword: (payload: { emailOrPhone: string }) => Promise<void>;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "yatra_user";

function parseStoredUser(): User | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const stored = parseStoredUser();
    setUser(stored);
    setLoading(false);
  }, []);

  const signIn = async ({ emailOrPhone }: { emailOrPhone: string; password: string }) => {
    const role: UserRole = emailOrPhone.includes("admin") ? "admin" : "pilgrim";
    const nextUser: User = {
      id: crypto.randomUUID(),
      name: emailOrPhone.split("@")[0] || "Pilgrim",
      email: emailOrPhone.includes("@") ? emailOrPhone : "pilgrim@yatra.com",
      phone: emailOrPhone.includes("@") ? "+91 90000 00000" : emailOrPhone,
      role,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  };

  const signUp = async ({ name, email, phone }: { name: string; email: string; phone: string }) => {
    const nextUser: User = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      role: "pilgrim",
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  };

  const signOut = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  const resetPassword = async () => {
    return;
  };

  const value = React.useMemo(
    () => ({ user, loading, signIn, signUp, signOut, resetPassword }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
