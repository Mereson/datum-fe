import { Link } from "react-router-dom"
import { JakesImage, MariasImage } from "../../../assets"

export const SelectStudent = () => {
  return (
    <section className="bg-[#D0D4E7] w-full h-full pb-8 overflow-auto">
      <main className="sm:pb-8 pb-60">
        <h2 className=" flex text-2xl sm:text-4xl text-[#0A1543] font-semibold justify-center pt-32">
          Click on account to view
        </h2>
        <div className="sm:flex sm:justify-center sm:gap-10 pt-16 grid grid-cols-2 place-items-center ">
          <figure className="bg-[#f4f4f4] w-32 sm:w-[312px] h-32 sm:h-[374px] flex justify-center items-center rounded-2xl shadow-md">
            <img
              className="w-28 sm:w-[14.688rem] sm:h-[14.688rem]"
              src={JakesImage}
              alt="Jakesimage"
            />
          </figure>
          <Link to={"/students/dashboard"}>
            <figure className="bg-[#f4f4f4] w-32 h-32 sm:w-[312px] sm:h-[374px] flex justify-center items-center rounded-2xl shadow-md">
              <img
                className="w-28 rounded-full sm:w-[14.688rem] sm:h-[14.688rem]"
                src={MariasImage}
                alt="Maria's Image"
              />
            </figure>
          </Link>
        </div>
      </main>
    </section>
  )
}
