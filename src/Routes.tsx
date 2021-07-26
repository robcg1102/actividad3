import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:id" component={PostDetail} />
    </Switch>
  );
}
