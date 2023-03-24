import ProductDescription from "../components/ProductDescription/ProductDescription";
import FullwidthLayout from "../layouts/FullwidthLayout";

function SingleProductPage() {
    return (
        <FullwidthLayout className="single">
            <ProductDescription />
        </FullwidthLayout>
    );
}

export default SingleProductPage;
