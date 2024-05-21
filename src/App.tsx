import { RouterProvider } from "react-router-dom";
import router from "./etc/router";

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App
