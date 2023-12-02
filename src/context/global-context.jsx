import { client } from "@/config/client";
import { ALL_LOCATIONS } from "@/config/query";
import { HideScrollOnModelOpen } from "@/utils";
import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [selectedCustomizedLayout, setSelectedCustomizedLayout] = useState('');
  const [selectArt, setSelectArt] = useState('')
  const [colorsInLogo, setColorsInLogo] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(true);
  const [designWidth, setDesignWidth] = useState('');
  const [specialInstruction, setSpecialInstruction] = useState('');
  const [customisationName, setcustomisationName] = useState('');
  const [imageURL, setImageURL] = useState(null);
  const [customizationButton, setCustomizationButton] = useState(false)
  const [designPosition, setDesignPosition] = useState('')
  const [allCartItems, setAllCartItems] = useState()
  const [designImage, setDesignImage] = useState()
  const [totalQuantity, setTotalQuantity] = useState(0);


  const [selectedProduct, setSelectedProduct] = useState({
    colors: [],
    textCreator: [],
    designArtWork: []
  })

  const [locations, setLocations] = useState();
  useEffect(()=>{
    const f = async () => {
      const response = await client.query({
        query: ALL_LOCATIONS,
      });
      const location = response?.data?.locations.nodes;
      setLocations(location)
    }
    f()
    const nomberofcolor = sessionStorage.getItem('colorInLogo') || 0
    setColorsInLogo(+nomberofcolor)

  },[])


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
  // HideScrollOnModelOpen(modalIsOpen)
  
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
        designWidth, setDesignWidth,
        selectedProduct, setSelectedProduct,
        specialInstruction, setSpecialInstruction,
        customisationName, setcustomisationName,
        imageURL, setImageURL,
        customizationButton, setCustomizationButton,
        locations,
        designImage, setDesignImage,
        designPosition, setDesignPosition,
        allCartItems, setAllCartItems,
        totalQuantity, setTotalQuantity
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

