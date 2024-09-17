import { Link } from "react-router-dom"

export const SelectStudent = () => {
  return (
    <section className="bg-[#D0D4E7] w-full h-[100vh] overflow-auto">
      <div className="sm:flex sm:justify-center pt-36 sm:pt-48 sm:gap-10 gap-5 grid grid-cols-1 place-items-center ">
        <Link to={"/admin/dashboard"}>
          <figure className="bg-[#f4f4f4] w-32 sm:w-[312px] h-32 sm:h-[300px] flex justify-center items-center rounded-2xl shadow-md">
            <p className="text-2xl font-bold"> Admin </p>
          </figure>
        </Link>
        <Link to={"/teacher/dashboard"}>
          <figure className="bg-[#f4f4f4] w-32 h-32 sm:w-[312px] sm:h-[300px] flex justify-center items-center rounded-2xl shadow-md">
            <p className="text-2xl font-bold"> Teacher </p>
          </figure>
        </Link>
        <Link to={"/login"}>
          <figure className="bg-[#f4f4f4] w-32 h-32 sm:w-[312px] sm:h-[300px] flex justify-center items-center rounded-2xl shadow-md">
            <p className="text-2xl font-bold"> Student </p>
          </figure>
        </Link>
      </div>
    </section>
  )
}
