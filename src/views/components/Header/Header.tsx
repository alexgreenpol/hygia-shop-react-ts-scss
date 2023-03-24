import { Link, NavLink } from "react-router-dom";
import { useCart } from "src/views/hooks/useCart";
import Logo from "./images/logo.png";
import Cart from "./images/cart.png";
import "./Header.scss";

const Header = () => {
    const { getAllProductsQuantity } = useCart();
    const isCartEmpty = Boolean(getAllProductsQuantity());

    return (
        <header className="header">
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1-3">
                        <Link to="/" className="logo-link">
                            <img className="logo" src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className="pure-u-2-3">
                        <nav className="menu">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/products">Shop</NavLink>
                            <NavLink className="header-cart" to="/cart">
                                <img src={Cart} alt="" />
                                {isCartEmpty && (
                                    <span className="header-cart__counter">
                                        {getAllProductsQuantity()}
                                    </span>
                                )}
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
