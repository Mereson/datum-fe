import styles from "./style.module.css";
import { Dropdown } from "../../../components";
import { Button } from "../../../components/button";

export const AddParents = () => {
  return (
    <div className="bg-[#f4f4f4] w-[100%] grid place-items-center overflow-auto ">
      <div className="grid place-items-center">
        <h2 className=" text-center text-[40px] font-bold text-[#696969] pb-8 ">
          Parent Details
        </h2>
      </div>

      {/* <h6 className="mt-2.5  text-[#696969] font-bold">Personal Information</h6> */}

      <div className="grid mt-2 gap-6 pb-8">
        <div className={styles.label}>
          <label htmlFor="Name"> Parent Full Name </label>
          <input
            className={styles.inputtext}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="Occupation"> {"Parent's"} Occupation </label>
          <input
            className={styles.inputtext}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className={styles.label}>
          <label htmlFor="Address"> {"Parent's"} Address </label>
          <input
            className={styles.inputtext}
            type="text"
            id="address"
            name="address"
            required
          />
        </div>

        <div className={styles.label}>
          <label htmlFor="Number"> {"Parent's Phone Number"}</label>
          <input
            className={styles.inputtext}
            type="text"
            placeholder="0801 419 6669"
            id="name"
            name="name"
            required
          />
        </div>

        <div className={styles.label}>
          <label htmlFor="Email">{"Parent's Email Address"}</label>
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
          id={1}
          name={"Relationship with student"}
          query={"Select relationship with student"}
          items={["Father", "Mother", "Uncle", "Aunt", "Brother", "Sister"]}
        />

        <Button
          link={"/admin/addParents/addStudents"}
          content="Next"
          className={
            "bg-[#132985] w-[100%] py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
          }
        />
      </div>
    </div>
  );
};
