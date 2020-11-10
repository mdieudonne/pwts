import Home from './containers/Home/Home'
import Reactions from './containers/Reactions/Reactions'

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
]

export default routes
