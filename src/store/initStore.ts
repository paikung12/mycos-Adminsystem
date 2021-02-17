import { createStore, compose, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers'
//for async call, API, File Etc
import thunk from 'redux-thunk'
function initStore(replaceState: any = {}) {

    const loggerMiddleware = createLogger({ collapsed: true })

    // for redux-devtool
    const composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const middlewares = [thunk, loggerMiddleware]

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    )

    const store = createStore(
        rootReducer,
        replaceState,
        enhancer,
    )

    return store
}
export default initStore