import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [selectedCustomizedLayout, setSelectedCustomizedLayout] = useState('');
  const [nameAndNumber, setNameAndNumber] = useState('')
  

  return (
    <SettingsContext.Provider
      value={{
       selectedCustomizedLayout,
       setSelectedCustomizedLayout,
       nameAndNumber,
       setNameAndNumber,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

