import { createSlice } from "@reduxjs/toolkit";

// Helper function to save cart to localStorage
const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
    isCartOpen: false,
    cart: loadCartFromLocalStorage(), // Initialize cart from localStorage
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            const item = action.payload.item;
            if (typeof item === 'object' && item !== null && item.hasOwnProperty('id') && item.hasOwnProperty('attributes')) {
                state.cart = [...state.cart, item];
                saveCartToLocalStorage(state.cart); // Save updated cart to localStorage
            } else {
                console.error('Invalid item structure:', item);
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            saveCartToLocalStorage(state.cart); // Save updated cart to localStorage
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count = item.count ? item.count + 1 : 2; // Initialize count if undefined
                }
                return item;
            });
            saveCartToLocalStorage(state.cart); // Save updated cart to localStorage
        },

        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            });
            saveCartToLocalStorage(state.cart); // Save updated cart to localStorage
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },

        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
