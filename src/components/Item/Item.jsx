import "./Item.css";
function Item({ image }) {
  return (
    <>
      <img src={image.urls.thumb} alt="" className="item-img" />
    </>
  );
}

export default Item;
