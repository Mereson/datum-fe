import { HeroImg } from "../../../assets"
import { Button } from "../button"

export const Hero = () => {
  return (
    <section className="flex gap-[130px] justify-center items-center px-[100px] py-14 bg-[#132985]">
      <img src={HeroImg} className="w-[450px] h-[400px]" alt="Hero Image" />
      <article className="flex flex-col gap-9 text-white justify-center">
        <h1 className="font-bold text-5xl leading-[58.48px]">
          Streamline Your School Management with Ease.
        </h1>
        <Button text={"Get started"} style={"text-xl font-bold py-3 w-[190px]"} />
      </article>
    </section>
  )
}
