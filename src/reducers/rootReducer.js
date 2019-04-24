import { combineReducers } from 'redux'
import deckReducer from './deckReducer'
import appModeReducer from './appModeReducer'
import cardIndexReducer from './cardIndexReducer'

const rootReducer = combineReducers({
    appMode: appModeReducer,
    deck: deckReducer,
    currentCardIndex: cardIndexReducer
})
export default rootReducer;