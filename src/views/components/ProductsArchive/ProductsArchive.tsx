import { FC } from "react";
import { products } from "../../../data/mocks/products";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsArchive.scss";

type ProductsArchiveProps = {
    category: string;
};

const ProductsArchive: FC<ProductsArchiveProps> = ({ category }) => {
    return (
        <div className="products">
            <div className="pure-g">
                {products.map((item) => {
                    if (category === "all") {
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
                    }

                    if (category === item.category) {
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
                    }
                })}
            </div>
        </div>
    );
};

export default ProductsArchive;
