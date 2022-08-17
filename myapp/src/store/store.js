import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoppingCart/cartSlice";
import cartUiSlice from "./shoppingCart/cartUi";
import fliterSlice from "./shoppingCart/filter";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
        filter: fliterSlice.reducer,
    }
})

export default store