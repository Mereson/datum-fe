import styles from "./style.module.css";
import schoolteacher from "../../../assets/images/fineteacher.png";
import { Dropdown } from "../../../components";
import { Button } from "../../../components/button";

export const AddTeacher = () => {
  return (
    <div className="bg-[#f4f4f4] w-[100%] grid place-items-center overflow-auto ">
      <div className="grid place-items-center">
        <h2 className=" text-center text-[40px] font-bold text-[#696969] pb-8 ">
          {`Teacher's`} Details
        </h2>
        <div className="my-8 grid place-items-center  text-base">
          <img src={schoolteacher} />
          <p className=" w-[100%] text-[# ] text-[1.125] text-[#444444] grid place-items-center  ">
            Upload Photo{" "}
          </p>
        </div>
      </div>

      <h6 className="mt-2.5  text-[#696969] font-bold">Personal Information</h6>

      <div className="grid mt-2 gap-6">
        <div className={styles.label}>
          <label htmlFor="First Name"> First Name </label>
          <input
            className={styles.inputtext}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="Last Name"> Last Name </label>
          <input
            className={styles.inputtext}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <Dropdown
          id={1}
          name={"Gender"}
          query={"Select Gender"}
          items={["Male", "Female"]}
        />

        <div className={styles.label}>
          <label htmlFor="Date of Birth"> Date of Birth </label>
          <input
            className={styles.inputtext}
            type="text"
            placeholder="DD/MM/YYYY"
            id="name"
            name="name"
            required
          />
        </div>

        <Dropdown
          id={2}
          name={"Blood Group"}
          query={"Select Blood Group"}
          items={["A+", "A-", "B+", "O+", "O-"]}
        />

        <div className={styles.label}>
          <label htmlFor="Religion"> Religion </label>
          <input
            className={styles.inputtext}
            type="text"
            placeholder="Select Religion"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="grid mt-2 gap-6">
          <h6 className="mt-2.5  text-[#696969] font-bold grid place-items-center">
            Educational Background
          </h6>

          <Dropdown
            id={3}
            name={"Qualification"}
            query={"Select qualification"}
            items={["SSCE/NECO", "HND/Bachelor's Degree", " Master's Degree"]}
          />

          <Dropdown
            id={4}
            name={"Grade Level"}
            query={"Select grade level"}
            items={["04", "05", "06"]}
          />

          <Dropdown
            id={5}
            name={"Step"}
            query={"Select step"}
            items={["A+", "A-", "B+", "O+", "O-"]}
          />
        </div>

        <div className="grid mt-2 gap-6">
          <h6 className="mt-2.5  text-[#696969] font-bold grid place-items-center">
            Teaching Details
          </h6>
          <Dropdown
            id={5}
            name={"Step"}
            query={"Select class(es)"}
            items={["01", "02", "03", "04", "05", "06"]}
          />
        </div>
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

// const options = [
//   {
//     id: 1,
//     name: "Gender",
//     query: "Select Gender",
//     items: ["Male", "Female"],
//   },
//   {
//     id: 2,
//     name: "Date Of Birth",
//     query: "DD/MM/YYYY",
//   },

//   {
//     id: 3,
//     name: "Blood Group",
//     query: "Select blood group",
//     items: ["A+", "A", "B+", "0-", "0+"],
//   },
// ];

//   {
//     id: 4,
//     name: "Religion",
//   },

//   {
//     id: 5,
//     name: "Qualification",
//     query: "Select qualification",
//     items: ["SSCE", "HND/Bachelor's Degree", "Master's Degree"],
//   },
// ];
