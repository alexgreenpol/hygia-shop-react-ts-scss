import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "../hooks/useCart";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import SingleProductPage from "../pages/SingleProductPage";
import ThanksPage from "../pages/ThanksPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/products",
            element: <ProductsPage />,
        },
        {
            path: "/products/:category/",
            element: <CategoryPage />,
        },
        {
            path: "/products/:category/:id",
            element: <SingleProductPage />,
        },
        {
            path: "/cart",
            element: <CartPage />,
        },
        {
            path: "/checkout",
            element: <CheckoutPage />,
        },
        {
            path: "/thanks",
            element: <ThanksPage />,
        },
    ]);

    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
};

export default App;
