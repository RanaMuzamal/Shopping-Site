import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className='nav__left'>Yoopec</div>
      <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto text-light">
                    <li class="nav-tem">
                        <a href="#learn" class="nav-link">Home</a>
                    </li>
                    <li class="nav-tem">
                        <a href="#questions" class="nav-link">My Orders</a>
                    </li>
                    <li class="nav-tem">
                        <a href="#instructors" class="nav-link">Promotions</a>
                    </li>
                    <li class="nav-tem">
                      <a href="#contact" class="nav-link">Notifications</a>
                  </li>
                  <li class="nav-tem">
                      <a href="#contact" class="nav-link">Setting</a>
                  </li>
                  <li class="nav-tem">
                      <a href="#contact" class="nav-link">About Us</a>
                  </li>
                  <li class="nav-tem">
                      <a href="#contact" class="nav-link">Login</a>
                  </li>
                  

                    
                </ul>
            </div>
      <div className='nav__middle'>
        <div className='input__wrapper'>
          <input type='text' />
          <i className='fas fa-search' />
        </div>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
          <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;