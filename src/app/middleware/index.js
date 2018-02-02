import { routerMiddleware } from 'react-router-redux'
import logger from './logger'
import router from './router'
import { createBrowserHistory } from 'history'

const reduxRouterMiddleware = routerMiddleware(createBrowserHistory())

export {
    reduxRouterMiddleware,
    logger,
    router,
}