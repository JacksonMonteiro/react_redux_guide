import CartActionsTypes from "./action-type";

export const addProductToCart = (payload) => ({
    type: CartActionsTypes.ADD_PRODUCT,
    payload: payload,
});
