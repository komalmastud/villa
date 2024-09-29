import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-box">
      <img src={props.image} alt={props.name} className="product-image" />
      <div className="description">
        <h4 className="product-name">{props.name}</h4>
        <p className="product-description">{props.description}</p>
        <h5 className="product-info">{props.info}</h5>
        <p className="product-price">{props.des_price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
