import { FC } from "react";
import { ButtonEnum, ButtonTypesEnum, SizesEnum } from "src/types/enums";
import "./Button.scss";

type ButtonProps = {
    variant: ButtonEnum.Primary | ButtonEnum.Secondary | ButtonEnum.Purpure;
    size: SizesEnum.S | SizesEnum.M | SizesEnum.L | SizesEnum.XL;
    children: string;
    clickHandler?: () => void;
    disabled?: boolean;
    type?:
        | ButtonTypesEnum.Submit
        | ButtonTypesEnum.Reset
        | ButtonTypesEnum.Button;
};

const Button: FC<ButtonProps> = ({
    variant,
    size,
    clickHandler,
    disabled,
    type,
    children,
}) => {
    return (
        <button
            className={`btn btn--${variant} btn--${size}`}
            onClick={clickHandler}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
