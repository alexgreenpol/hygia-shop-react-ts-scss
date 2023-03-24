import { FC } from "react";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import "./ArchiveHeading.scss";

type ArchiveHeadingProps = {
    children: string;
};

const ArchiveHeading: FC<ArchiveHeadingProps> = ({ children }) => {
    return (
        <div className="archive-heading">
            <h1 className="archive-heading__title">{children}</h1>
            <CategoriesMenu
                categories={["household", "accessories", "cleaning"]}
            />
        </div>
    );
};

export default ArchiveHeading;
