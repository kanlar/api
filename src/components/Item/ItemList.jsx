import { useContext } from "react";
import Context from "../../context/Contex";
import Item from "./Item";
import "./ItemList.css";

function ItemList() {
  const { images } = useContext(Context);
  return (
    <>
      <div className="container">
        {images.map((image, index) => {
          return <Item image={image} key={index} />;
        })}
      </div>
    </>
  );
}

export default ItemList;
