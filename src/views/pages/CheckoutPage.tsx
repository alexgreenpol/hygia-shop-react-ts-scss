import { Navigate } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { useCart } from "../hooks/useCart";
import FullwidthLayout from "../layouts/FullwidthLayout";

function CheckoutPage() {
    const { getCartStatus } = useCart();
    const cartIsEmpty = getCartStatus();

    if (cartIsEmpty) {
        return <Navigate to="/products" />;
    }

    return (
        <FullwidthLayout>
            <h1>Checkout</h1>
            <CheckoutForm />
        </FullwidthLayout>
    );
}

export default CheckoutPage;
