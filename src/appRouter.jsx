import { createBrowserRouter } from "react-router-dom"
import {
  LandingPage,
  Login,
  ForgotPassword,
  ForgotPassword2,
  ForgotPassword3,
  ErrorPage,
  ResultAnalysis,
  AdminDashboard,
  StudentsDashboard,
  UploadResult1,
  ViewResults,
  AddStudents,
  SubjectAnalysis,
  StudentsList,
  AddParents,
  TeachersDashboard,
  AddTeacher,
  TeachersList,
  AdminAcad,
  AdminClassesList,
  AdminAttendanceList,
  AdminEventsList,
  AdminResultsList,
  AdminSchemeOfWork,
  AdminSubjectsList,
  AdminPaymentList,
  AdminParentsList,
  AdminAddSubjects,
  AdminCreateActivity,
  StudentProfile,
  PersonalInfo,
} from "./pages"
import { AdminLayout, StudentLayout, TeacherLayout } from "./layout"
import Api from "./api/api"
import Api2 from "./api/api2"
import { AdminAddClass } from "./pages/admin/academics/classes/addClass"

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
    path: "/testApi",
    element: <Api />,
  },
  {
    path: "/testApi2",
    element: <Api2 />,
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
        path: "viewResults",
        element: <ViewResults />,
      },
      {
        path: "personalInfo",
        element: <PersonalInfo />,
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
      {
        path: "studentProfile",
        element: <StudentProfile />,
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
        path: "studentsList",
        element: <StudentsList />,
      },
      {
        path: "studentsList/addParents",
        element: <AddParents />,
      },
      {
        path: "studentsList/addStudents",
        element: <AddStudents />,
      },
      {
        path: "teachers",
        element: <TeachersList />,
      },
      {
        path: "teachers/addTeacher",
        element: <AddTeacher />,
      },
      {
        path: "parents",
        element: <AdminParentsList />,
      },
      {
        path: "academics",
        element: <AdminAcad />,
      },
      {
        path: "academics/classes",
        element: <AdminClassesList />,
      },
      {
        path: "academics/addClass",
        element: <AdminAddClass />,
      },
      {
        path: "academics/attendance",
        element: <AdminAttendanceList />,
      },
      {
        path: "academics/events",
        element: <AdminEventsList />,
      },
      {
        path: "academics/addActivity",
        element: <AdminCreateActivity />,
      },
      {
        path: "academics/result",
        element: <AdminResultsList />,
      },
      {
        path: "academics/schemeOfWork",
        element: <AdminSchemeOfWork />,
      },
      {
        path: "academics/subjects",
        element: <AdminSubjectsList />,
      },
      {
        path: "academics/addSubject",
        element: <AdminAddSubjects />,
      },
      {
        path: "fees",
        element: <AdminPaymentList />,
      },
      {
        path: "academics/error",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "teacher",
    element: <TeacherLayout />,
    children: [
      {
        path: "dashboard",
        element: <TeachersDashboard />,
      },
      {
        path: "students",
        element: <UploadResult1 />,
      },
      {
        path: "attendance",
        element: <ErrorPage />,
      },
      {
        path: "timetable",
        element: <ErrorPage />,
      },
      {
        path: "schemeOfWork",
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
