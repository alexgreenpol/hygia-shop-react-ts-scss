import { useParams } from "react-router-dom";
import ArchiveHeading from "../components/ArchiveHeading/ArchiveHeading";
import ProductsArchive from "../components/ProductsArchive/ProductsArchive";
import FullwidthLayout from "../layouts/FullwidthLayout";

function CategoryPage() {
    const { category } = useParams();

    return (
        <FullwidthLayout>
            <ArchiveHeading>{category || ""}</ArchiveHeading>
            <ProductsArchive category={category || ""} />
        </FullwidthLayout>
    );
}

export default CategoryPage;
