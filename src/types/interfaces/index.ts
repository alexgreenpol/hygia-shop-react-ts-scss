export interface Product {
    quantity: number;
    product: {
        id: string;
        title: string;
        description: string;
        category: string;
        price: number;
        sale: number | null;
        images: string[];
    };
}

export interface CartContextType {
    cartItems: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: string) => void;
    clearWholeCart: () => void;
    getAllProductsQuantity: () => number;
    getTotalPrice: () => number;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    getCartStatus: () => boolean;
}
