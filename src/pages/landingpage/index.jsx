import {
  About,
  Footer,
  Hero,
  Navbar,
  Services,
} from "../../components/landingPage";
import { useStudentsList } from "../../states/students";

export const LandingPage = () => {
  const { studentsData } = useStudentsList()
  console.log(studentsData)
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />      
    </>
  );
};
