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

      <div className="grid mt-2 gap-6 pb-8">
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
        {/* This is a div for the Educational Background of the teacher  */}
        <div className="grid mt-2 gap-6 pt-10">
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
            items={[
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
            ]}
          />
        </div>

        {/* This is another container for Teachears Details */}
        <div className="grid mt-2 gap-6 pt-10">
          <h6 className="mt-2.5  text-[#696969] font-bold grid place-items-center">
            Teaching Details
          </h6>
          <Dropdown
            id={6}
            name={"Class"}
            query={"Select class(es)"}
            items={["JSS1", "JSS2", "JSS3", "SSS1", "SSS2", "SSS3"]}
          />

          <div className={styles.label}>
            <label htmlFor="Subject"> Subject</label>
            <input
              className={styles.inputtext}
              type="text"
              placeholder="Subject Name"
              id="subject"
              name="subjects"
              required
            />
          </div>
        </div>

        {/* This the last container in the form */}
        <div className="grid mt-2 gap-6 pt-10">
          <h6 className="mt-2.5  text-[#696969] font-bold grid place-items-center">
            Contact Information
          </h6>

          <div className={styles.label}>
            <label htmlFor="Number"> Phone Number </label>
            <input
              className={styles.inputtext}
              type="text"
              placeholder="08014196669"
              id="number"
              name="number"
              required
            />
          </div>

          <div className={styles.label}>
            <label htmlFor="Email">Email</label>
            <input
              className={styles.inputtext}
              type="text"
              placeholder="example@gmail.com"
              id="email"
              name="email"
              required
            />
          </div>

          <Dropdown
            id={7}
            name={"State of Origin"}
            query={"Select state of origin"}
            items={[
              "Abia",
              "Abuja",
              "Adamawa",
              "Akwa Ibom",
              "Anambra",
              "Bauchi",
              "Bayelsa",
              "Benue",
              "Borno",
              "Cross River",
              "Delta",
              "Ebonyi",
              "Edo",
              "Ekiti",
              "Enugu",
              "Gombe",
              "Imo",
              "Jigawa",
              "Kaduna",
              "Kano",
              "Kastina",
              "Kebbi",
              "Kogi",
              "Kwara",
              "Lagos",
              "Nassarawa",
              "Niger",
              "Ogun",
              "Ondo",
              "Osun",
              "Oyo",
              "Plateau",
              "Rivers",
              "Sokoto",
              "Taraba",
              "Yobe",
              "Zamfara",
            ]}
          />

          <div className={styles.label}>
            <label htmlFor="Local govt"> Local Government of Origin </label>
            <input
              className={styles.inputtext}
              type="text"
              placeholder="Select local government of origin"
              id="state"
              name="state"
              required
            />
          </div>

          <div className={styles.label}>
            <label htmlFor="Location"> Address </label>
            <input
              className={styles.inputtext}
              type="text"
              id="Address"
              name="Address"
              required
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
    </div>
  );
};
