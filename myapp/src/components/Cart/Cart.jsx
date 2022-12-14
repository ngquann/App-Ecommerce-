import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../store/shoppingCart/cartUi";
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch()
    const toggleCart = () => dispatch(cartUiActions.toggle())
    const cartProducts = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/cart">
              Go to cart
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;