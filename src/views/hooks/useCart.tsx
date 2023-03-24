import { createContext, FC, useContext, useEffect, useState } from "react";
import { CartContextType, Product } from "../../types/interfaces";

type CartProviderProps = {
    children: JSX.Element | JSX.Element[];
};

// Context enviromnent for the cart

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    // Methods for working with cart

    const addToCart = (item: Product) => {
        const existedProductIndex = cartItems.findIndex(
            (el) => el.product.id === item.product.id
        );

        if (existedProductIndex >= 0) {
            const combinedProduct = {
                quantity:
                    item.quantity + cartItems[existedProductIndex].quantity,
                product: item.product,
            };

            const newCartArr = [
                ...cartItems.slice(0, existedProductIndex),
                combinedProduct,
                ...cartItems.slice(existedProductIndex + 1),
            ];
            setCartItems([...newCartArr]);
        } else {
            setCartItems([...cartItems, item]);
        }
    };

    const clearWholeCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    };

    const removeFromCart = (id: string) => {
        if (cartItems.length > 1) {
            setCartItems(cartItems.filter((item) => item.product.id !== id));
        } else {
            clearWholeCart();
        }
    };

    const increaseQuantity = (id: string) => {
        setCartItems(
            cartItems.map((item) => {
                if (item.product.id === id) {
                    item.quantity++;
                }
                return item;
            })
        );
    };

    const decreaseQuantity = (id: string) => {
        setCartItems(
            cartItems.map((item) => {
                if (item.product.id === id) {
                    item.quantity--;
                }
                return item;
            })
        );
    };

    const getAllProductsQuantity = () => {
        return cartItems.reduce((acc, currentValue) => {
            return acc + currentValue.quantity;
        }, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((acc, currentValue) => {
            return (
                acc +
                (currentValue.product.sale || currentValue.product.price) *
                    currentValue.quantity
            );
        }, 0);
    };

    const getCartStatus = () => {
        // If cart is empty - return true, otherwise - return false

        if (localStorage.getItem("cartItems")) {
            return false;
        }

        return true;
    };

    // Save cart to local storage

    useEffect(() => {
        if (cartItems.length) {
            const cartItemsJson = JSON.stringify(cartItems);
            localStorage.setItem("cartItems", cartItemsJson);
        }
    }, [cartItems]);

    // Get cart from local storage and update state

    useEffect(() => {
        const cartItemsStorage = localStorage.getItem("cartItems");

        if (cartItemsStorage) {
            setCartItems(JSON.parse(cartItemsStorage));
        }
    }, []);

    // Return context provider wrapper

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearWholeCart,
                getAllProductsQuantity,
                getTotalPrice,
                increaseQuantity,
                decreaseQuantity,
                getCartStatus,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

// Export useCart function which returns cart context with all data and methods

export const useCart = () => useContext(CartContext) as CartContextType;
