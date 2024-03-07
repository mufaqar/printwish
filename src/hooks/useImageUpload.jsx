import { useContext, useState } from "react";
import { SettingsContext } from "@/context/global-context";

const useImageUpload = () => {
  const { setImageURL, setDesignImage, setUploadedImages, setImageName } = useContext(SettingsContext);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (event, item) => {
    setLoading(true);
    const file = event.target.files[0];

    const CLOUDINARY_CLOUD_NAME = "drokpzsz7";
    const UPLOAD_PRESET = "siqj1van";

    const Imgdata = new FormData();
    Imgdata.append("file", file);
    Imgdata.append("upload_preset", UPLOAD_PRESET);
    Imgdata.append("cloud_name", CLOUDINARY_CLOUD_NAME);
    Imgdata.append("folder", "Printwish");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: Imgdata,
        }
      );
      const res = await response.json();
      console.log("🚀 ~ handleImageChange ~ res:", res)

      // Update state with the uploaded image link and the corresponding item name
      setUploadedImages((prevImages) => [...prevImages, { item, link: res.url }]);
      setImageURL(res.url);
      setDesignImage(res.url);
      setImageName(res.original_filename)
    } catch (error) {
      console.log("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleImageChange };
};

export default useImageUpload;
