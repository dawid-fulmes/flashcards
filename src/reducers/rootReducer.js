import { combineReducers } from 'redux'
import deckReducer from './deckReducer'
import appModeReducer from './appModeReducer'

const rootReducer = combineReducers({
    appMode: appModeReducer,
    deck: deckReducer
})
export default rootReducer;