export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST"

export interface Comment {
  comment: string,
  user: string,
}


export interface Post {
  title: string;
  description: string;
  category: string;
  urlImage: string;
  id?: number;
  comments: Array<Comment>;
}

export interface Posts extends Array<Post> {
  data: [];
}

export interface PostsState{
    data: Posts | Array<Post>;
}

export interface PostState {
  data: Post;
}

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: Posts;
}

interface GetPostAction {
  type: typeof GET_POST;
  payload: Post;
}

interface SetPostAction {
  type: typeof SET_POST;
  payload: Post,
}

export type PostAction = GetPostsAction | GetPostAction | SetPostAction;
