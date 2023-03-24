import { useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonEnum, SizesEnum } from "src/types/enums";
import { useCart } from "src/views/hooks/useCart";
import { products } from "../../../data/mocks/products";
import NotifyMessage from "../../components/NotifyMessage/NotifyMessage";
import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";
import Button from "../Button/Button";
import "./ProductDescription.scss";

const ProductDescription = () => {
    const { addToCart } = useCart();

    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [isShowing, setIsShowing] = useState(false);

    const currentProduct = products.find((item) => item.id === id);
    const addToCartHandler = () => {
        if (currentProduct) {
            const newProduct = {
                quantity: count,
                product: currentProduct,
            };

            addToCart(newProduct);
            setIsShowing(true);
            setCount(1);
        }
    };

    return (
        <div
            className={`product-description ${
                currentProduct?.sale ? "sale" : null
            }`}
        >
            {isShowing && (
                <NotifyMessage setIsShowing={setIsShowing}>
                    ✅ The product was successfully added to the cart!
                </NotifyMessage>
            )}

            <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="product-description__image">
                        <img src={currentProduct?.images[0]} alt="" />
                    </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="content">
                        <h1 className="product-description__title">
                            {currentProduct?.title}
                        </h1>
                        <p className="product-description__text">
                            {currentProduct?.description}
                        </p>
                        <p>
                            <span className="price">
                                ${currentProduct?.price}
                            </span>
                            <span className="sale-price">
                                {currentProduct?.sale
                                    ? `$${currentProduct?.sale}`
                                    : null}
                            </span>
                        </p>
                        <QuantityCounter
                            count={count}
                            setCount={setCount}
                            disabled={isShowing}
                        />

                        <Button
                            variant={ButtonEnum.Secondary}
                            size={SizesEnum.XL}
                            clickHandler={addToCartHandler}
                            disabled={isShowing}
                        >
                            {isShowing ? "Successfully added" : "Add to cart"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
