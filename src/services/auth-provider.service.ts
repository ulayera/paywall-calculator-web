import React from "react";
import { AuthContextType } from "../model/auth-context-type.model";

export const AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
  return React.useContext(AuthContext);
}