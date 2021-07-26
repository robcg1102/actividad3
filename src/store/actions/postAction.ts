import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axios from "axios";

import { GET_POST, SET_POST, PostAction, Post } from "../types";

export const getPost = (
  id: number
): ThunkAction<void, RootState, null, PostAction> => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`http://localhost:3004/posts/${id}`);
      const post: Post = result.data;

      dispatch({
        type: GET_POST,
        payload: post,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setPost = (): ThunkAction<void, RootState, null, PostAction> => {
  return (dispatch) => {
    const post: Post = {
      title: "",
      description: "",
      urlImage: "",
      category: "",
      comments: [{
        comment: "",
        user: ""
      }],
    };

    dispatch({
      type: SET_POST,
      payload: post,
    });
  };
};
