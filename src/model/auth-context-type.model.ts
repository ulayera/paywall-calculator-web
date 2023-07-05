export interface AuthContextType {
  token: string | null;
  signin: (user: string, pass: string, callback: VoidFunction) => Promise<any>;
  signout: (callback: VoidFunction) => void;
}