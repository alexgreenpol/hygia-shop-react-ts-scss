import { FC } from "react";
import "./CardWithIcon.scss";

type CardWithIconProps = {
    iconSrc: string;
    children: JSX.Element | JSX.Element[];
};

const CardWithIcon: FC<CardWithIconProps> = ({ iconSrc, children }) => {
    return (
        <div className="card-with-icon">
            <img className="card-with-icon__img" src={iconSrc} alt="" />
            <div className="card-with-icon__content">{children}</div>
        </div>
    );
};

export default CardWithIcon;
