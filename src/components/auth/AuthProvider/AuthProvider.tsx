import React from "react";
import { login } from "../../../services/auth.service";
import { AuthContext } from "../../../services/auth-provider.service";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [token, setToken] = React.useState<any>(null);

  let signin = (user: string, pass: string, callback: VoidFunction) => {
    return login(user, pass).then(async (data) => {
      if (data.hasOwnProperty("access_token")) {
        localStorage.setItem("token", data.access_token);
        //let result = jwt(token);
        setToken(data.access_token);
      }
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    localStorage.removeItem("token");
    setToken(null);
    callback();
  };

  let value = { token, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}