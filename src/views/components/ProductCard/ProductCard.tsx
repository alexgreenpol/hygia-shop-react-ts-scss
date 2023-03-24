import { FC } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

type ProductCardProps = {
    id: string;
    title: string;
    category: string;
    image: string;
    price: number;
    sale?: number | null;
};

const ProductCard: FC<ProductCardProps> = ({
    id,
    title,
    category,
    image,
    price,
    sale,
}) => {
    return (
        <Link to={`/products/${category}/${id}`}>
            <div className={`product-card ${sale ? "sale" : null}`}>
                <div
                    className="product-card__image"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
                <div className="product-card__content">
                    <h5 className="title">{title}</h5>
                    <span className="price">${price}</span>
                    {sale ? <span className="sale-price">${sale}</span> : null}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
