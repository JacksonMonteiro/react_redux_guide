import CartActionsTypes from "./action-type";

const initialState = {
    products: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionsTypes.ADD_PRODUCT:
            // Verificar se o produto já está no carrinho
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );

            // se estiver, aumentar a quantidad em 1
            if (productIsAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                    ),
                };
            }

            // Se não, adiciona o produto
            return {
                ...state,
                products: [
                    ...state.products,
                    { ...action.payload, quantity: 1 },
                ],
            };

        case CartActionsTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload
                ),
            };

        case CartActionsTypes.ADD_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
            };

        case CartActionsTypes.REMOVE_QUANTITY:
            return {
                ...state,
                products: state.products
                    .map((product) =>
                        product.id === action.payload
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                    )
                    .filter((product) => product.quantity > 0),
            };

        default:
            return state;
    }
};

export default cartReducer;
