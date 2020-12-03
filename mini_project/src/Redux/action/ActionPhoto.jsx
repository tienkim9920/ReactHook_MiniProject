

export const addPhoto = (data) => {

    return {
        type: 'ADD_PHOTO',
        data
    }

}

export const deletePhoto = (data) => {

    return {
        type: 'DELETE_PHOTO',
        data
    }

}

export const updatePhoto = (data) => {

    return {
        type: 'UPDATE_PHOTO',
        data
    }

}