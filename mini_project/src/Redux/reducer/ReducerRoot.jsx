
import { combineReducers } from 'redux'
import ReducerPhoto from './ReducerPhoto'

const ReducerRoot = combineReducers({
    Photos: ReducerPhoto
})

export default ReducerRoot