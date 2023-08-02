import {createStore} from 'redux'
import allReducers from '../reducers'

const todos = createStore(allReducers)

export default todos