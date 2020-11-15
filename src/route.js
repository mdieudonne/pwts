import Home from './containers/Home/Home'
import Reactions from './containers/Reactions/Reactions'
import Association from "./containers/Association/Association";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/reactions",
    component: Reactions
  },
  {
    path: "/association",
    component: Association
  },
]

export default routes
