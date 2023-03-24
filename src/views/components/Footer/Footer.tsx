import { Link } from "react-router-dom";
import CardWithIcon from "../CardWithIcon/CardWithIcon";
import "./Footer.scss";
import ShopIcon from "./images/online-shop.png";
import ShirtIcon from "./images/shirt.png";
import SaleIcon from "./images/sale.png";
import TruckIcon from "./images/delivery-truck.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__advantages pd--m">
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <CardWithIcon iconSrc={ShopIcon}>
                                <h6>Online order</h6>
                                <p>Lorem ipsum set dolorum</p>
                            </CardWithIcon>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <CardWithIcon iconSrc={TruckIcon}>
                                <h6>Fast delivery</h6>
                                <p>Lorem ipsum set dolorum</p>
                            </CardWithIcon>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <CardWithIcon iconSrc={SaleIcon}>
                                <h6>Best sales</h6>
                                <p>Lorem ipsum set dolorum</p>
                            </CardWithIcon>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <CardWithIcon iconSrc={ShirtIcon}>
                                <h6>Easy to buy</h6>
                                <p>Lorem ipsum set dolorum</p>
                            </CardWithIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__content pd--m">
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 widget">
                            <h5>Working Hours</h5>
                            <p>Mon-Fri: 9 AM – 6 PM</p>
                            <p>Saturday: 9 AM – 4 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 widget">
                            <h5>Links</h5>
                            <p>
                                <Link to="/">Home</Link>
                            </p>
                            <p>
                                <Link to="/products">Shop</Link>
                            </p>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 widget">
                            <h5>Socials</h5>
                            <p>
                                <a href="https://instagram.com" target="_blank">
                                    Instagram
                                </a>
                            </p>
                            <p>
                                <a href="https://facebook.com" target="_blank">
                                    Facebook
                                </a>
                            </p>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 widget">
                            <h5>Contact</h5>
                            <p>Address: Berlin, Galington Street, 478, 81566</p>
                            <p>Phone: +380994432213</p>
                            <p>Email: hygia.info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
