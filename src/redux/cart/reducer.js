import CartActionsTypes from "./action-type";

const initialState = {
    products: [],
    productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionsTypes.ADD_PRODUCT:
            return {
                ...initialState.products,
                products: [...initialState.products, action.payload],
            };
        default:
            return state;
    }
};

export default cartReducer;
