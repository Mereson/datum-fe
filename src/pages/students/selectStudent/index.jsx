import { JakesImage, MariasImage } from "../../../assets"

export const SelectStudent = () => {
  return (
    <section className="bg-[#D0D4E7] w-full overflow-auto">
      <main className="pb-8">
        <h2 className=" flex text-4xl text-[#0A1543] font-semibold justify-center pt-[10rem]">
          Click on account to view
        </h2>
        <div className="flex justify-center gap-5 pt-16">
          <figure className="bg-[#f4f4f4] w-[312px] h-[374px] flex justify-center items-center rounded-2xl">
            <img
              className="w-[235px] h-[235px]"
              src={JakesImage}
              alt="Jakesimage"
            />
          </figure>
          <figure className="bg-[#f4f4f4] w-[312px] h-[374px] flex justify-center items-center rounded-2xl ">
            <img
              className="rounded-full w-[235px] h-[235px]"
              src={MariasImage}
              alt="Maria's Image"
            />
          </figure>
        </div>
      </main>
    </section>
  )
}
