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
  ViewResults,
  AddStudents,
  SubjectAnalysis,
  StudentsList,
  AddParents,
  TeachersDashboard,
  TeachersStudents,
  AddTeacher,
  TeachersList,
  AdminAcad,
  AdminClassesList,
  AdminAttendanceList,
  AdminEventsList,
  AdminSchemeOfWork,
  AdminSubjectsList,
  AdminPaymentList,
  AdminParentsList,
  AdminAddSubjects,
  AdminCreateActivity,
  StudentProfile,
  PersonalInfo,
  Remark,
  SelectStudent,
  UploadResult,
  AdminUploadedResults,
  AdminSubjectResult,
  AdminStudentsResultList,
  TeachersTimetable,
  HubPage,
  StudentsSubjectList,
  StudentsTimeTable,
  StudentsFees,
  UploadResult1,
  Scheme,
} from "./pages"
import { AdminLayout, StudentLayout, TeacherLayout } from "./layout"
import { AdminAddClass } from "./pages/admin/academics/classes/addClass"
import { StudentDetailsAdmin } from "./pages/admin/students/studentDetails"
import { StudentsAttendancePage } from "./pages/students/hub/attendance"
import { StudentsCalenderPage } from "./pages/students/hub/calender"
import { StudentsSOWPage } from "./pages/students/hub/schemeOfWork"
import { TeachersAttendanceList } from "./pages/teachers/attendance"
import { Feedback } from "./pages/students/feedback"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
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
        path: "viewResults",
        element: <ViewResults />,
      },
      {
        path: "selectProfile",
        element: <SelectStudent />,
      },
      {
        path: "personalInfo",
        element: <PersonalInfo />,
      },
      {
        path: "subjects",
        element: <StudentsSubjectList />,
      },
      {
        path: "hub",
        element: <HubPage />,
      },
      {
        path: "hub/studentsAttendance",
        element: <StudentsAttendancePage />,
      },
      {
        path: "hub/studentsCalender",
        element: <StudentsCalenderPage />,
      },
      {
        path: "hub/studentsScheme",
        element: <StudentsSOWPage />,
      },
      {
        path: "hub/studentsTimeTable",
        element: <StudentsTimeTable />,
      },
      {
        path: "fees",
        element: <StudentsFees />,
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
        path: "/viewResults/feedBack",
        element: <Feedback />,
      },
      {
        path: "studentProfile",
        element: <StudentProfile />,
      },
      {
        path: "error",
        element: <ErrorPage />,
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
        path: "studentsList/studentsDetail",
        element: <StudentDetailsAdmin />,
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
        element: <AdminUploadedResults />,
      },
      {
        path: "academics/subjectResult",
        element: <AdminSubjectResult />,
      },
      {
        path: "academics/studentResult",
        element: <AdminStudentsResultList />,
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
        element: <TeachersStudents />,
      },
      {
        path: "attendance",
        element: <TeachersAttendanceList />,
      },
      {
        path: "timetable",
        element: <TeachersTimetable />,
      },
      {
        path: "uploadresult",
        element: <UploadResult />,
      },
      {
        path: "uploadresult/uploadresult1",
        element: <UploadResult1 />,
      },
      {
        path: "remark",
        element: <Remark />,
      },
      {
        path: "scheme",
        element: <Scheme />,
      },
      {
        path: "schemeOfWork",
        element: <Scheme />,
      },
    ],
  },
])

export default router
