import { createContext } from "react";

export const taskContext = createContext()

const MyProvider = ({ children }) => {
   const [state, setState] = useState('Hola, Mundo');
 
   return (
     <taskContext.Provider value={{ state, setState }}>
       {children}
     </taskContext.Provider>
   );
 };
 