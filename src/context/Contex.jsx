import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [images, setimages] = useState([]);

  const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID wVk0na_7SSzh9t6X5n72SXCUDMTn_wnjEIR4jXhgOYk",
      },
      params: {
        query: term,
      },
    });
    return response.data.results;
  };

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setimages(result);
  };
  const sharedValue = {
    images,
    searchImages,
    handleSubmit,
  };
  return (
    <>
      <Context.Provider value={sharedValue}>{children}</Context.Provider>
    </>
  );
}

export { Provider };

export default Context;
