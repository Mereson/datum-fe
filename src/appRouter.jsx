import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Login, ForgotPassword, ForgotPassword2, ForgotPassword3 } from "./pages";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/forgotpassword",
		// path: "/",
		element: <ForgotPassword />,
	},
	{
		path: "/forgotpassword2",
		element: <ForgotPassword2 />,
	},
	{
		path: "/forgotpassword3",
		element: <ForgotPassword3 />,
	},
    {
		path: "/",
		element: <LandingPage />,
	}
]);

export default router;
