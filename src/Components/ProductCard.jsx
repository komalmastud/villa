import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-box">
      <img src={props.image} alt=""></img>
      <div className="description">
        <h2>{props.name}</h2>

        <p className="para">{props.description}</p>
        <h3>{props.price}</h3>
        <p className="price">
          {props.des_price}
          <button className="btn">→</button>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
