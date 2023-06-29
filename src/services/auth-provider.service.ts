import { createContext, useContext } from "react";
import { AuthContextType } from "../model/auth-context-type.model";

export const AuthContext = createContext<AuthContextType>(null!);

export function useAuth() {
  return useContext(AuthContext);
}