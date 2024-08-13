import { Button } from "../../../components/button";
import { Dropdown } from "../../../components";

export const CheckResults = () => {
  return (
    <section className="flex justify-center items-center w-[100%] bg-[#f4f4f4]">
      <main>
        <h2 className="text-center text-[40px] font-bold text-[#696969] pb-8">
          Check Result
        </h2>
        <form>
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
            <div>
              <p className="pb-1 font-bold text-[#444444]">Current Class</p>
              <div className="w-full px-[16px] py-[13px] bg-[#ececec] rounded-lg text-sm text-[#7e7d7d]">
                SSS1
              </div>
            </div>
            <Button
              link={"/students/viewResults"}
              content="Check"
              className={
                "bg-[#132985] w-full py-[8px] mt-4 text-center rounded-lg text-[18px] font-bold text-white cursor-pointer"
              }
            />
          </div>
        </form>
      </main>
    </section>
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
    name: "Term",
    query: "Select Term",
    items: ["First term", "Second term", "Third term"],
  },
];
