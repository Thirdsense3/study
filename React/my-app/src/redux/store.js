import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(subscriberReducer)

export default store; 