import React, { useEffect } from "react";
import { login } from "../../../services/auth.service";
import { AuthContext } from "../../../services/auth-provider.service";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [token, setToken] = React.useState<any>(localStorage.getItem('token'));

  const signin = (user: string, pass: string, callback: VoidFunction) => {
    console.log('AuthProvider.signin');
    return login(user, pass).then(async (data) => {
      if (data.hasOwnProperty("access_token")) {
        //let result = jwt(token);
        setToken(data.access_token);
        localStorage.setItem("token", data.access_token);
      }
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    console.log('AuthProvider.signout');
    setToken(null);
    localStorage.removeItem("token");
    callback();
  };

  let value = { token, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}