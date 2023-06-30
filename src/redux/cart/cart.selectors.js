export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce(
        (acumulator, current) => acumulator + current.quantity,
        0
    );
};

export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce(
        (acumulator, current) => acumulator + current.price * current.quantity,
        0
    );
};
