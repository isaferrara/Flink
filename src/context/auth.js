import {  createContext, useContext, useEffect, useMemo} from 'react';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
