import Home from "../pages/Home";
import Login from "../pages/Login";
import ObjectivesList from "../pages/ObjectivesList";
import Organizationentry from "../pages/organizationentry";
import OrganizationList from "../pages/organizationList";
import TeamEntry from "../pages/TeamEntry";
import TeamList from "../pages/TeamList";

import UserList from "../pages/UserList";
const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/organizationentry",
    element: <Organizationentry />,
  },
  {
    path: "/organizationlist",
    element: <OrganizationList />,
  },
  {
    path: "/teamentry",
    element: <TeamEntry />,
  },
  {
    path: "/teamlist",
    element: <TeamList />,
  },

  {
    path: "/userlist",
    element: <UserList />,
  },

  {
    path: "/objectiveslist",
    element: <ObjectivesList />,
  },
];

export { routes };
