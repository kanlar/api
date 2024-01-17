import { useContext } from "react";
import { useState } from "react";
import Context from "../../context/Contex";
import "./Search.css";

function Search() {
  const { handleSubmit } = useContext(Context);
  const [keyUp, setKeyUp] = useState();
  const searchKeyUp = (e) => {
    return setKeyUp(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(keyUp);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="search-container">
        <label>Ne Arıyorsunuz ?</label>
        <input onKeyUp={searchKeyUp} />
      </form>
    </>
  );
}

export default Search;
