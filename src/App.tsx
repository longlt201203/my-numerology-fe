import { RouterProvider } from "react-router-dom";
import router from "./etc/router";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App
