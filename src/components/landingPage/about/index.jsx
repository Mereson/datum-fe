import { AboutImg } from "../../../assets"
import { Button } from "../button"
import { Overview } from "../overview"

export const About = () => {
  return (
    <section>
      <Overview />
      <section className="flex px-[103px] py-[30px] items-center justify-between">
        <article className="w-[434px]">
          <h3 className="font-bold text-3xl text-[#132985] pb-4">About Us</h3>
          <p className="font-normal text-base pb-8">
            Datum is committed to revolutionizing school management and student
            engagement through innovative technology, delivering personalized
            feedback to enhance the educational experience.
          </p>
          <Button
            text={"Learn more"}
            style={"text-lg font-medium text-white py-[9px] w-[173px]"}
          />
        </article>
        <img src={AboutImg} className="h-[404px] w-[491px]" alt="about image" />
      </section>
    </section>
  )
}
