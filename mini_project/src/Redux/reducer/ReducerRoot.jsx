
import { combineReducers } from 'redux'
import ReducerPhoto from './ReducerPhoto'
import ReducerSession from './ReducerSession'

const ReducerRoot = combineReducers({
    Photos: ReducerPhoto,
    Session: ReducerSession
})

export default ReducerRoot