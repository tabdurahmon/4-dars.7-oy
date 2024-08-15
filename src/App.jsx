import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//Layout
import MainLayout from "./Layouts/MainLayout";

//components
import Routers from "./components/Routers";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Routers user={user}>
          <MainLayout />
        </Routers>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
