import { FC, useState } from "react";
import { Product } from "src/types/interfaces";
import { useCart } from "src/views/hooks/useCart";
import "./CartQuantityCounter.scss";

type CartQuantityCounterProps = {
    currentProduct: Product;
};

const CartQuantityCounter: FC<CartQuantityCounterProps> = ({
    currentProduct,
}) => {
    const [count, setCount] = useState(currentProduct.quantity);
    const { increaseQuantity, decreaseQuantity } = useCart();

    const increaseCountHandler = () => {
        setCount(count + 1);
        increaseQuantity(currentProduct.product.id);
    };

    const decreaseCountHandler = () => {
        if (count > 1) {
            setCount(count - 1);
            decreaseQuantity(currentProduct.product.id);
        }
    };

    return (
        <div className="quantity">
            <button className="quantity__btn" onClick={decreaseCountHandler}>
                less
            </button>
            <span className="quantity__count">{count}</span>
            <button className="quantity__btn" onClick={increaseCountHandler}>
                more
            </button>
        </div>
    );
};

export default CartQuantityCounter;
