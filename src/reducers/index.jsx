import {combineReducers} from 'redux'
import count from './count'
import weather from './weather'

const reducers = combineReducers({
    count,
    weather
})
export default reducers;
