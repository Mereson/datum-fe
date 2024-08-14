import design from "./style.module.css";
import schoolteacher from "../../../assets/images/fineteacher.png";
import { Dropdown } from "../../../components";
import { Button } from "../../../components/button";

export const AddStudents = () => {
  return (
    <div className="bg-[#f4f4f4] w-[100%] grid place-items-center overflow-auto ">
      <div className="grid place-items-center">
        <h2 className=" text-center text-[40px] font-bold text-[#696969] pb-8 ">
          {`Teacher's`} Details
        </h2>

        <img className={design.img_class} src={schoolteacher} />
      </div>
      <div className="grid gap-6">
        {options.map(({ id, name, query, items }) => (
          <Dropdown key={id} id={id} name={name} query={query} items={items} />
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
  );
};

const options = [
  {
    id: 1,
    name: "First Name",
  },

  {
    id: 2,
    name: "Last Name",
  },
  {
    id: 3,
    name: "Gender",
    query: "Select Gender",
    items: ["Male", "Female"],
  },
  {
    id: 4,
    name: "Date Of Birth",
    query: "DD/MM/YYYY",
  },

  {
    id: 5,
    name: "Gender",
    query: "Select Gender",
    items: ["Male", "Female"],
  },
];
