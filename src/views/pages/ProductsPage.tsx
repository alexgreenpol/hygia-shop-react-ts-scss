import ArchiveHeading from "../components/ArchiveHeading/ArchiveHeading";
import ProductsArchive from "../components/ProductsArchive/ProductsArchive";
import FullwidthLayout from "../layouts/FullwidthLayout";

function ProductsPage() {
    return (
        <FullwidthLayout>
            <ArchiveHeading>All products</ArchiveHeading>
            <ProductsArchive category="all" />
        </FullwidthLayout>
    );
}

export default ProductsPage;
