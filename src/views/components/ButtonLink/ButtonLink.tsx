import { FC } from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.scss";

type ButtonLinkProps = {
    variant: string;
    size: string;
    url: string;
    children: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ variant, size, url, children }) => {
    return (
        <Link
            className={`btn-link btn-link--${variant} btn-link--${size}`}
            to={url}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
