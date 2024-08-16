import { createBrowserRouter } from "react-router-dom"
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
  AddStudents,
  AddTeacher,
  SubjectAnalysis,
} from "./pages";
import { AdminLayout, StudentLayout } from "./layout";
import { AddParents } from "./pages/admin/addParents";

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
      {
        path: "checkResults/subjectAnalysis",
        element: <SubjectAnalysis />,
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
      {
        path: "addParents",
        element: <AddParents />,
      },
      {
        path: "addParents/addStudents",
        element: <AddStudents />,
      },
      {
        path: "teachers",
        element: <AddTeacher />,
      },
      {
        path: "parents",
        element: <ErrorPage />,
      },
      {
        path: "attendance",
        element: <ErrorPage />,
      },
      {
        path: "result",
        element: <ErrorPage />,
      },
      {
        path: "notification",
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
