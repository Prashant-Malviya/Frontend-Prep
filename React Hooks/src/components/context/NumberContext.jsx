import { createContext, useContext, useState } from "react";

export const NumberContext = createContext();

export const ContextProvider = ({ children }) => {
  const [number, setNumber] = useState("+91 929292992");
  

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumber = () => useContext(NumberContext);
