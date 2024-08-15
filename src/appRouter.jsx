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
  AdminDashboard,
  StudentsDashboard,
  UploadResult1,
  ViewResults,
  AddTeacher,
} from "./pages";
import { AdminLayout, StudentLayout } from "./layout";

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
        path: "attendance",
        element: <AddTeacher />,
      },
      {
        path: "checkResults/resultAnalysis",
        element: <ResultAnalysis />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
