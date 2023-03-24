import { ButtonEnum, SizesEnum } from "src/types/enums";
import { useCart } from "src/views/hooks/useCart";
import Button from "../Button/Button";
import ButtonLink from "../ButtonLink/ButtonLink";
import CartQuantityCounter from "../CartQuantityCounter/CartQuantityCounter";
import "./CartTable.scss";

const CartTable = () => {
    const { cartItems, removeFromCart, getTotalPrice, getAllProductsQuantity } =
        useCart();
    const productsInCart = getAllProductsQuantity();

    return (
        <>
            {productsInCart ? (
                <div className="cart-table">
                    <div className="cart-table__content">
                        {cartItems.map((item) => {
                            const { id, title, price, sale, images } =
                                item.product;

                            return (
                                <div
                                    className="pure-g cart-table__row"
                                    key={id}
                                >
                                    <div className="pure-u-1 pure-u-lg-4-24 cart-table__col">
                                        <div className="cart-table__image">
                                            <span>
                                                <img src={images[0]} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pure-u-1 pure-u-lg-6-24 cart-table__col">
                                        <div className="cart-table__title">
                                            <span>{title}</span>
                                        </div>
                                    </div>
                                    <div className="pure-u-1 pure-u-lg-4-24 cart-table__col">
                                        <div className="cart-table__price">
                                            <span>${sale ? sale : price}</span>
                                        </div>
                                    </div>
                                    <div className="pure-u-1 pure-u-lg-4-24 cart-table__col">
                                        <div className="cart-table__quantity">
                                            <CartQuantityCounter
                                                currentProduct={item}
                                            />
                                        </div>
                                    </div>
                                    <div className="pure-u-1 pure-u-lg-6-24 cart-table__col">
                                        <div className="cart-table__btn">
                                            <Button
                                                variant={ButtonEnum.Secondary}
                                                size={SizesEnum.S}
                                                clickHandler={() =>
                                                    removeFromCart(id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="cart-table__info">
                        <div className="pure-g">
                            <div className="pure-u-1">
                                <div className="cart-table__total">
                                    <h3>
                                        Total price:{" "}
                                        <span>${getTotalPrice()}</span>
                                    </h3>
                                    <ButtonLink
                                        variant={ButtonEnum.Secondary}
                                        size={SizesEnum.XL}
                                        url="/checkout"
                                    >
                                        Checkout
                                    </ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h3>Sorry, this cart is empty. Try to buy something :)</h3>
            )}
        </>
    );
};

export default CartTable;
