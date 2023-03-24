import { FC } from "react";
import { products } from "../../../data/mocks/products";
import ProductCard from "../ProductCard/ProductCard";
import "./RecentProducts.scss";

type RecentProductsProps = {
    quantity: number;
};

const RecentProducts: FC<RecentProductsProps> = ({ quantity }) => {
    const filteredData = products.filter((item, index) => index < quantity);

    return (
        <div className="products products--recent">
            <div className="pure-g">
                {filteredData.map((item) => {
                    return (
                        <div
                            className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 products__item"
                            key={item.id}
                        >
                            <ProductCard
                                id={item.id}
                                category={item.category}
                                title={item.title}
                                image={item.images[0]}
                                price={item.price}
                                sale={item.sale}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentProducts;
