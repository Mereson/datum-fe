import design from "./style.module.css";

import { Button } from "../../../components/button";

export const ViewResults = () => {
  const studentResults = {
    class: "SS1A",
    term: "3RD",
    numberOfStudents: 50,
    results: [
      {
        id: 1,
        subject: "English",
        assScore: 2,
        examScore: 25,
        total: 31,
        grade: "F",
      },
      {
        id: 2,
        subject: "Mathematics",
        assScore: 5,
        examScore: 49,
        total: 65,
        grade: "B",
      },

      {
        id: 3,
        subject: "Biology",
        assScore: 8,
        examScore: 58,
        total: 77,
        grade: "A",
      },
      {
        id: 4,
        subject: "Physics",
        assScore: 10,
        examScore: 60,
        total: 77,
        grade: "A",
      },
      {
        id: 5,
        subject: "Chemistry",
        assScore: 10,
        examScore: 20,
        total: 40,
        grade: "D",
      },
      {
        id: 6,
        subject: "Geography",
        assScore: 4,
        examScore: 40,
        total: 59,
        grade: "C",
      },
      {
        id: 7,
        subject: "Agriculture",
        assScore: 5,
        examScore: 39,
        total: 62,
        grade: "B",
      },
      {
        id: 8,
        subject: "Igbo language",
        assScore: 10,
        examScore: 56,
        total: 86,
        grade: "A",
      },
      {
        id: 9,
        subject: "CRS",
        assScore: 9,
        examScore: 40,
        total: 63,
        grade: "B",
      },
      {
        id: 10,
        subject: "Civic Education",
        assScore: 7,
        examScore: 54,
        total: 78,
        grade: "A",
      },
      {
        id: 11,
        subject: "Computer Science",
        assScore: 8,
        examScore: 48,
        total: 72,
        grade: "A",
      },
      {
        id: 12,
        subject: "Health Science",
        assScore: 5,
        examScore: 50,
        total: 75,
        grade: "A",
      },
    ],
  };

  return (
    <div className={design.container}>
      <div className="p-5 ">
        <h2>Result</h2>
        <div className="flex justify-between mb-5 items-center">
          <div className={design.info_card}>
            <h3>Class</h3>
            <p>{studentResults.class}</p>
          </div>
          <div className={design.info_card}>
            <h3>Term</h3>
            <p>{studentResults.term}</p>
          </div>
          <div className={design.info_card}>
            <h3>Number of Students</h3>
            <p>{studentResults.numberOfStudents}</p>
          </div>
        </div>

        <table className="w-50%  border-collapse mb-5 ">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Subject</th>
              <th>Ass score (10)</th>
              <th>Exam score (60)</th>
              <th>Total (100)</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentResults.results.map((result, index) => (
              <tr
                key={result.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                <td>{index + 1}</td>
                <td>{result.subject}</td>
                <td>{result.assScore}</td>
                <td>{result.examScore}</td>
                <td>{result.total}</td>
                <td>{result.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Button
          link={"/students/checkResults/resultAnalysis"}
          content="See Analysis/Feedback"
          className={
            "bg-[#132985] w-[30%] py-[8px] mt-9 text-center rounded-[4px] font-bold text-white cursor-pointer flex justify-center"
          }
        />
      </div>
    </div>
  );
};
