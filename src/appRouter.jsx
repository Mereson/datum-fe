import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Login } from "./pages";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
    {
		path: "/",
		element: <LandingPage />,
	}
]);

export default router;