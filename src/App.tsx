import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QueryView from "./component/FeeQuery/QueryView";
import HomeScreen from "./screens/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/query",
    element: <QueryView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
