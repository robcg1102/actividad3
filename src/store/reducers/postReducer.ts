import { GET_POST, SET_POST, PostAction, PostState } from "../types";

const initialState: PostState = {
  data: {
      title: "",
      description: "",
      urlImage: "",
      category: "",
      comments: [{
        user: "",
        comment: ""
      }]
  },
};

const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case GET_POST:
      return {
        data: action.payload,
      };
    case SET_POST:
      return{
        data: action.payload
      }
    default:
      return state;
  }
};

export default postReducer;