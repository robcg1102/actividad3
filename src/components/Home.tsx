import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { RootState } from "../store";
import { getPosts } from "../store/actions/postsAction";

import PostsCards from "../components/PostsCards";
import CreatePost from "../components/CreatePost";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Post } from "../store/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postsData = useSelector((state: RootState) => state.posts.data);
  const [resultPosts, setResultPosts] = useState<Post[]>([]);

  useEffect(() => {
    dispatch(getPosts())
    setResultPosts([...postsData]);
  }, []);

  const filterPosts = (category: string) => {
    switch (category) {
      case "":
        setResultPosts([...postsData]);
        break;
      case "Travel":
        setResultPosts(
          postsData.filter((result) => result.category === "Travel")
        );
        break;
      case "Lifestyle":
        setResultPosts(
          postsData.filter((result) => result.category === "Lifestyle")
        );
        break;
      case "Business":
        setResultPosts(
          postsData.filter((result) => result.category === "Business")
        );
        break;
      case "Food":
        setResultPosts(
          postsData.filter((result) => result.category === "Food")
        );

        break;
      case "Work":
        setResultPosts(
          postsData.filter((result) => result.category === "Work")
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <CreatePost />
      <div className={classes.root}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button onClick={(e) => filterPosts("")}>All</Button>
          <Button onClick={(e) => filterPosts("Travel")}>Travel</Button>
          <Button onClick={(e) => filterPosts("Lifestyle")}>Lifestyle</Button>
          <Button onClick={(e) => filterPosts("Business")}>Business</Button>
          <Button onClick={(e) => filterPosts("Food")}>Food</Button>
          <Button onClick={(e) => filterPosts("Work")}>Work</Button>
        </ButtonGroup>
      </div>
      {postsData.length === 0 ? (
        <div>Loading</div>
      ) : (
        <PostsCards allPosts={resultPosts} />
      )}
    </div>
  );
}

export default Home;
