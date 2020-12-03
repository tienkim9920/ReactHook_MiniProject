
const initialState = {
    list: [
        {
            id: '1',
            title: 'This research dramatically illustrates that the food industry can produce food with much lower salt content.',
            img: 'https://images.pexels.com/photos/1816842/pexels-photo-1816842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: '2',
            title: "It's a very stylish and beautiful film, but it lacks content.",
            img: 'https://images.pexels.com/photos/3864474/pexels-photo-3864474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: '3',
            title: 'Chocolate has a high fat content. I"m Nguyen Kim Tien',
            img: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: '4',
            title: 'My explanation seemed to content him. I"m Nguyen Kim Tien',
            img: 'https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: '5',
            title: 'We had to content ourselves with watching the sea lions from the shore.',
            img: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: '6',
            title: 'It’s easy to update the content of the Web site.',
            img: 'https://images.pexels.com/photos/5869023/pexels-photo-5869023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
    ]
}

const ReducerPhoto = (state = initialState, action) => {

    switch(action.type){

        case 'ADD_PHOTO':
            console.log(action.data)

            const newAdd = [...state.list]
            newAdd.push(action.data)

            return {
                list: newAdd
            }

        case 'DELETE_PHOTO':
            console.log(action.data)

            const newDelete = [...state.list]
            newDelete.splice(action.data, 1)

            return {
                list: newDelete
            }

        case 'UPDATE_PHOTO':
            console.log(action.data.id)

            const newUpdate = [...state.list]
            console.log(newUpdate)
            const index = newUpdate.findIndex(value => value.id === action.data.id)

            console.log(index)

            newUpdate[index] = action.data

            return {
                list: newUpdate
            }


        default:
            return state

    }

}

export default ReducerPhoto