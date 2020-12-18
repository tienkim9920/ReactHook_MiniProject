

export const addIdTemp = (data) => {
    return {
        type: 'ADD_idTemp',
        data
    }
}

export const addCartTemp = (data) => {
    return {
        type: 'ADD_CART',
        data
    }
}

export const updateCartTemp = (data) => {
    return {
        type: 'UPDATE_CART',
        data
    }
}

export const deleteCartTemp = (data) => {
    return {
        type: 'DELETE_CART',
        data
    }
}