import { Dropdown } from "../../../components";
import { Button } from "../../../components/button";

export const UploadResult1 = () => {
  return (
    <div className="bg-[#f4f4f4] w-[100%] grid place-items-center overflow-auto">
      <div>
        <h2 className="text-center text-[40px] font-bold text-[#696969] pb-8">
          Upload Result
        </h2>

        <div className="grid gap-6">
          {options.map(({ id, name, query, items }) => (
            <Dropdown
              key={id}
              id={id}
              name={name}
              query={query}
              items={items}
            />
          ))}
        </div>

        <Button
          link={"/students/checkResults/resultAnalysis"}
          content="Submit"
          className={
            "bg-[#132985] w-[100%] py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
          }
        />
      </div>
    </div>
  );
};

const options = [
  {
    id: 1,
    name: "Class",
    query: "Select Class",
    items: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
  },
  {
    id: 2,
    name: "Subject",
    query: "Select subject",
    items: [
      "English",
      "Mathematics",
      "Biology",
      "Physics",
      "Chemistry",
      "Geography",
      "Agriculture",
      "Igbo Language",
      "CRS",
      "Civic Education",
      "Computer Science",
      "Health Science",
    ],
  },
  {
    id: 3,
    name: "Session",
    query: "Select session",
    items: ["2021/2022", "2022/2023", "2023/2024"],
  },
  {
    id: 4,
    name: "Term",
    query: "Select Term",
    items: ["First term", "Second term", "Third term"],
  },
];
