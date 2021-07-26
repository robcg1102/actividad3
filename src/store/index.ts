import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postReducer from "./reducers/postReducer";

import postsReducer from "./reducers/postsReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer
})

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>

export default store;