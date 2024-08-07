import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Login, ForgotPassword } from "./pages";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		// path: "/forgotpassword",
		path: "/",
		element: <ForgotPassword />,
	},
    // {
	// 	path: "/",
	// 	element: <LandingPage />,
	// }
]);

export default router;