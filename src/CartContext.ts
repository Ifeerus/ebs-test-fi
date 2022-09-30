import { createContext, useContext } from 'react';
export type GlobalContent = {
  copy: any;
  setCopy: (c: any) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  copy: [],
  setCopy: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
