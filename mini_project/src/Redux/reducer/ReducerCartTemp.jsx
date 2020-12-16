
const initalState = {
    idTemp: '',
    listCart: []
}

const ReducerCartTemp = (state = initalState, action) => {

    switch (action.type){

        case 'ADD_idTemp':

            const newIdtemp = action.data
            
            state = {
                idTemp: newIdtemp,
                listCart: []
            }
            return state

        case 'ADD_CART':
            console.log(action.data)

            const newAddState = action.data

            //Clone cái mảng từ redux ra trước 
            const newListAddCart = state.listCart

            if (newListAddCart.length < 1){

                newListAddCart.push(newAddState)

            }else{

                //Tìm Vị Trí của sản phẩm đã mua
                const indexCart = newListAddCart.findIndex(value => {
                    return value.idProduct === newAddState.idProduct
                })

                //Tìm xem thử sản phẩm này đã mua hay chưa
                const findCart = newListAddCart.find(value => {
                    return value.idProduct === newAddState.idProduct
                })

                //Nếu này chưa được mua thì mình push vào
                //Còn đã từng mua rồi thì mình update tại vị trí indexCart mà mình vừa tìm được
                if (!findCart){
                    newListAddCart.push(newAddState)
                    console.log("Push")
                }else{
                    newListAddCart[indexCart].count = parseInt(newListAddCart[indexCart].count) + parseInt(newAddState.count)
                    console.log("Update")
                }
            }

            
            state = {
                idTemp: newAddState.idUser,
                listCart: newListAddCart
            }
            console.log(state)
            return state


        case 'UPDATE_CART':
            console.log(action.data)

            //Lấy dữ liệu data được truyền vào Redux
            const dataUpdate = action.data

            //Clone dữ liệu từ Redux ra
            const listCartUpdate = state.listCart

            //Tìm kiểm vị trí cần update
            const index = listCartUpdate.findIndex(value => {
                return value.idProduct === dataUpdate.idProduct
            })

            listCartUpdate[index].count = dataUpdate.count

            state = {
                idTemp: dataUpdate.idUser,
                listCart: listCartUpdate
            }

            return state

        case 'DELETE_CART':
            console.log(action.data)

            //Get Data
            const dataDelete = action.data

            //Clone Data Redux
            const listCartDelete = state.listCart

            // //findindex delete
            const indexDelete = listCartDelete.findIndex(value => {
                return value.idProduct === dataDelete.idProduct
            })

            listCartDelete.splice(indexDelete, 1)

            state = {
                idTemp: dataDelete.idUser,
                listCart: listCartDelete
            }

            return state

        default:
            return state
    }

}

export default ReducerCartTemp