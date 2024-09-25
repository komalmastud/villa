import "./Ratecard.css";

const ProductCard = (props) => {
  return (
    <>
      <div className="rate-box"></div>
      <img src={props.image} alt=""></img>
      <div className="rate-description">
        <h4>{props.name}</h4>

        <p className="rate-para">{props.description}</p>
        <h5>{props.price}</h5>
        <p className="rate-price">{props.des_price}</p>
      </div>
    </>
  );
};

export default ProductCard;
