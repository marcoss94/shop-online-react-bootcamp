/* eslint-disable react/prop-types */
import "./Cart.css";
function Cart(props) {
  const { cart } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acción</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="items">
        {cart.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.cantidad}</td>
            <td>
              <button className="btn btn-info">+</button>
              <button className="btn btn-danger">-</button>
            </td>
            <td>
              <span>{item.cantidad * item.precio}</span>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr id="footer">
          <th scope="row" colSpan="5">
            Empty cart, start shopping!
          </th>
        </tr>
      </tfoot>
    </table>
  );
}

export default Cart;
