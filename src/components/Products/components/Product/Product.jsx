/* eslint-disable react/prop-types */
import "./Product.css";

function Product(props) {
  const { precio, id, title, thumbnailUrl, addCart } = props;
  return (
    <article>
      <img src={thumbnailUrl} />
      <div className="body">
        <h5>{title}</h5>
        <p>{precio}</p>
        <button className="btn btn-dark" onClick={() => addCart(id)}>
          Comprar
        </button>
      </div>
    </article>
  );
}

export default Product;
