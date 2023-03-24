import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./CategoriesMenu.scss";

type CardWithIconProps = {
    categories: string[];
};

const CategoriesMenu: FC<CardWithIconProps> = ({ categories }) => {
    return (
        <nav className="categories-menu">
            <NavLink end to="/products">
                all
            </NavLink>

            {categories.map((item, index) => {
                return (
                    <NavLink to={`/products/${item}`} key={item + index}>
                        {item}
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default CategoriesMenu;
