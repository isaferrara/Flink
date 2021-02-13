import {  createContext, useContext} from 'react';


//create context to save the user's information 
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
