
const initialState = {
    loader: false
}

const ReducerLoader = (state = initialState, action) => {

    switch(action.type){

        case 'SHOW_LOADER':
            console.log(action.data)

            state = {
                loader: action.data
            }
            return state

        case 'HIDE_LOADER':
            console.log(action.data)

            state = {
                loader: action.data
            }
            return state

        default:
            return state
    }

} 

export default ReducerLoader