import { useState } from "react";
import { login } from "../../../services/auth.service";
import { AuthContext } from "../../../services/auth-context.service";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const signin = (user: string, pass: string, callback: VoidFunction) => {
    return login(user, pass).then(async (data) => {
      if (data.access_token) {
        setToken(data.access_token);
        localStorage.setItem("token", data.access_token);
      }
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    setToken(null);
    localStorage.removeItem("token");
    callback();
  };

  const value = { token, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}