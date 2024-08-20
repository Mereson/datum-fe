// import styles from "./style.module.css";
import { Dropdown } from "../../../components";
import { Button } from "../../../components/button";

export const AddParents = () => {
  return (
    <div>
      <Dropdown
        className="dropdown"
        id={1}
        name={"Relationship"}
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
  );
};
