import { GET_POSTS, PostAction, PostsState } from "../types";

const initialState: PostsState = {
  data: [],
};

const postsReducer = (state = initialState, action: PostAction): PostsState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
