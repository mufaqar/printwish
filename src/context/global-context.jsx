import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [selectedCustomizedLayout, setSelectedCustomizedLayout] = useState('');
  

  return (
    <SettingsContext.Provider
      value={{
       selectedCustomizedLayout,
       setSelectedCustomizedLayout,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

