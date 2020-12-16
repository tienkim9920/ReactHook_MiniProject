
import { combineReducers } from 'redux'
import ReducerCartTemp from './ReducerCartTemp'
import ReducerPhoto from './ReducerPhoto'
import ReducerSession from './ReducerSession'

const ReducerRoot = combineReducers({
    Photos: ReducerPhoto,
    Session: ReducerSession,
    CartTemp: ReducerCartTemp
})

export default ReducerRoot