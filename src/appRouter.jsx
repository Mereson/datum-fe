import { createBrowserRouter } from "react-router-dom";
import {
  LandingPage,
  Login,
  ForgotPassword,
  ForgotPassword2,
  ForgotPassword3,
  ErrorPage,
  CheckResults,
  ResultAnalysis,
} from "./pages";
import { StudentLayout } from "./layout";
import { StudentsDashboard } from "./pages/students/dashboard";
import { ViewResults } from "./pages/students/viewResults";
import { UploadResult1 } from "./pages/teacherss/uploadResult1";

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
  },
  {
    path: "/students",
    element: <StudentLayout />,
    children: [
      {
        path: "dashboard",
        element: <StudentsDashboard />,
      },
      {
        path: "uploadResult1",
        element: <UploadResult1 />,
      },
      {
        path: "checkResults",
        element: <CheckResults />,
      },
      {
        path: "checkResults/viewResults",
        element: <ViewResults />,
      },
      {
        path: "notification",
        element: <ErrorPage />,
      },
      {
        path: "checkResults/resultAnalysis",
        element: <ResultAnalysis />,
      },
    ],
  },
]);

export default router;
