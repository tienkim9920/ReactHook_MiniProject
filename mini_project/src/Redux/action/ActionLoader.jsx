

export const showLoader = (data) => {
    return {
        type: 'SHOW_LOADER',
        data
    }
}

export const hideLoader = (data) => {
    return {
        type: 'HIDE_LOADER',
        data
    }
}