import CartActionsTypes from "./action-type";

export const addProductToCart = (payload) => ({
    type: CartActionsTypes.ADD_PRODUCT,
    payload,
});

export const removeProductFromCart = (payload) => ({
    type: CartActionsTypes.REMOVE_PRODUCT,
    payload,
});

export const addQuantity = (payload) => ({
    type: CartActionsTypes.ADD_QUANTITY,
    payload,
});

export const removeQuantity = (payload) => ({
    type: CartActionsTypes.REMOVE_QUANTITY,
    payload
})
