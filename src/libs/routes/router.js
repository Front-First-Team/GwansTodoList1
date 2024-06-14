import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/main/main";
import Todo from "../../pages/todo/todo";
import RootLayout from "../../layouts/layout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/todo/:todoId",
        element: <Todo />
      },
    ],

  },
])
export default router