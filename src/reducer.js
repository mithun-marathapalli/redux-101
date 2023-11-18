const initialState = {
    products: [],
}

const handler = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case "ADD_PRODUCT":
            if (state.products.find((product) => product.id === payload.id)) {
                let newP = state.products.map((product) =>
                    product.id === payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
                return { ...state, products: [...newP] }
            } else {
                return { ...state, products: [...state.products, payload] }
            }

        case "REMOVE_PRODUCT":
            let item = state.products.find((product) => {
                return product.id === payload
            })
            if (item) {
                if (item.quantity === 1) {
                    let filtered = state.products.filter(
                        (product) => product.id !== payload
                    )
                    return { ...state, products: [...filtered] }
                } else {
                    let newP = state.products.map((product) =>
                        product.id === payload
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                    )

                    return { ...state, products: [...newP] }
                }
            }
            break
        default:
            break
    }
    return { ...state }
}

export default handler
