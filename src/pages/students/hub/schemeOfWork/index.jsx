import { BackIcon, StudentIcon } from "../../../../components"

export const StudentsSOWPage = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main>
        <div className="flex justify-between pb-14">
          <div className="flex items-end">
            <BackIcon link={"/students/hub"} />
          </div>
          <StudentIcon />
        </div>
        <h2 className="pb-[51px] text-2xl">Scheme Of Work</h2>
      </main>
    </section>
  )
}
