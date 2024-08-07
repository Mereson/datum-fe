import { RouterProvider } from "react-router-dom";
import router from "./appRouter";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
