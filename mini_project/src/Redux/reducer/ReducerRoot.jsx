
import { combineReducers } from 'redux'
import ReducerCartTemp from './ReducerCartTemp'
import ReducerLoader from './ReducerLoader'
import ReducerPhoto from './ReducerPhoto'
import ReducerSession from './ReducerSession'

const ReducerRoot = combineReducers({
    Photos: ReducerPhoto,
    Session: ReducerSession,
    CartTemp: ReducerCartTemp,
    Loader: ReducerLoader
})

export default ReducerRoot