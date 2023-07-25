import { HideScrollOnModelOpen } from "@/utils";
import { createContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [selectedCustomizedLayout, setSelectedCustomizedLayout] = useState('');
  const [selectArt, setSelectArt] = useState('')
  const [colorsInLogo, setColorsInLogo] = useState()
  const [modalIsOpen, setIsOpen] = useState(false);
  const [designWidth, setDesignWidth] = useState('');

  // Text creator form states
  const [textCreatorLine, setCreatorStateLine] = useState({
    text1: '',
    color1: '',
    size1: '',
    font1: '',
    text2: '',
    color2: '',
    size2: '',
    font2: '',
    text3: '',
    color3: '',
    size3: '',
    font3: '',
  })
  const handleChangeTextCreatorLine = (event) => {
    const { name, value } = event.target;
    setCreatorStateLine({
      ...textCreatorLine,
      [name]: value,
    });
  };
 
  // hide scroll when modelbox is open  
  HideScrollOnModelOpen(modalIsOpen)
  
  return (
    <SettingsContext.Provider
      value={{
        selectedCustomizedLayout,
        setSelectedCustomizedLayout,
        selectArt,
        setSelectArt,
        colorsInLogo, setColorsInLogo,
        modalIsOpen, setIsOpen,
        textCreatorLine, setCreatorStateLine, handleChangeTextCreatorLine,
        designWidth, setDesignWidth
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

