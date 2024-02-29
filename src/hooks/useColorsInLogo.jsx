import { useState } from 'react';

const useColorsInLogo = () => {
    const [colorsInLogo, setColorsInLogo] = useState([]);

    const handleSelectedColor = (v, item) => {
        const existingVariantIndex = colorsInLogo.findIndex(variant => variant.variantName === v);
        if (existingVariantIndex !== -1) {
            const updatedVariant = { ...item[existingVariantIndex], colorInLogo: item, variantName: v };
            setColorsInLogo(prevItems => {
                const updatedItems = [...prevItems];
                updatedItems[existingVariantIndex] = updatedVariant;
                return updatedItems;
            });
        } else {
            const newVariant = { variantName: v, colorInLogo: item };
            setColorsInLogo(prevItems => [...prevItems, newVariant]);
        }
    };

    return [colorsInLogo, handleSelectedColor];
};

export default useColorsInLogo;
