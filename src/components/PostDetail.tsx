import { Link } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../store";
import { getPost, setPost } from "../store/actions/postAction";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export default function PostDetail(props: any) {
  const idPost = props.match.params.id;

  const classes = useStyles();
  const dispatch = useDispatch();
  const detailPost = useSelector((state: RootState) => state.post.data);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    dispatch(getPost(idPost));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setPost());
    };
  }, []);

  const addComment = () => {
    if (commentInput === "") {
      return null;
    }

    const users = [
      "John Cena",
      "Joe Doe",
      "Mr. Dickens",
      "Ken Robinson",
      "Laura Barrett",
    ];
    const user = users[Math.floor(Math.random() * (4 + 1 - 0) + 0)];

    const dataPost = Object.assign({}, detailPost);
    dataPost.comments.push({ user: user, comment: commentInput });
    axios.put(`http://localhost:3004/posts/${idPost}`, dataPost).then(() => {
      setCommentInput("");
      dispatch(getPost(idPost));
    });
  };

  return (
    <div>
      {detailPost.title === "" ? (
        <h3>Loading...</h3>
      ) : (
        <div className="containerPost">
          <div className="detailPost">
            <img src={detailPost.urlImage} alt={detailPost.title} />
            <div className="text-blockDetail">
              <Link to="/">View Posts</Link>
              <h1>{detailPost.title}</h1>
            </div>
          </div>
          <p>{detailPost.description}</p>
          <div className="comments">
            <h4>Comments</h4>
            {detailPost.comments.map((data) => {
              return (
                <div className="cardComment">
                  <p>
                    <i className="ri-map-pin-user-fill"></i> {data.user}
                  </p>
                  <p>{data.comment}</p>
                </div>
              );
            })}
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Write a comment"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <br />
              <Button variant="contained" color="primary" onClick={addComment}>
                Add
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
