import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { routes } from "../router/routes";
const router = createBrowserRouter(
  routes
);

const Router=() => <RouterProvider router={router} />
export default Router