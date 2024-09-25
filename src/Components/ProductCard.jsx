import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-box">
      <img src={props.image} alt={props.name} />
      <div className="description">
        <h4>{props.name}</h4>
        <p className="para">{props.description}</p>
        <h5>{props.price}</h5>
        <p className="price">{props.des_price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
