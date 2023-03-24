import { FC } from "react";
import "./QuantityCounter.scss";

type QuantityCounterProps = {
    count: number;
    setCount: (num: number) => void;
    disabled?: boolean;
};

const QuantityCounter: FC<QuantityCounterProps> = ({
    count,
    setCount,
    disabled,
}) => {
    const increaseCountHandler = () => {
        setCount(count + 1);
    };

    const decreaseCountHandler = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="quantity">
            <button
                className="quantity__btn"
                onClick={decreaseCountHandler}
                disabled={disabled}
            >
                less
            </button>
            <span className="quantity__count">{count}</span>
            <button
                className="quantity__btn"
                onClick={increaseCountHandler}
                disabled={disabled}
            >
                more
            </button>
        </div>
    );
};

export default QuantityCounter;
