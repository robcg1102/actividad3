import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axios from "axios";

import { GET_POSTS, PostAction, Posts } from "../types";

export const getPosts = (): ThunkAction<void, RootState, null, PostAction> => {
  return async (dispatch) => {
    try {
      const result = await axios.get("http://localhost:3004/posts");
      const allPosts: Posts = result.data;

      dispatch({
        type: GET_POSTS,
        payload: allPosts,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
