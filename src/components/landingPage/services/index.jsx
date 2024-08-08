import { Analytics, Ease, Engagement } from "../../../assets"
import { Card } from "../card"

export const Services = () => {
  return (
    <section className="bg-[#d0d4e7] pb-[90px]">
      <h3 className="pt-5 pb-12 text-center font-bold text-3xl text-[#132985]">
        Our Services
      </h3>
      <div className="flex justify-center gap-8">
        {ourServices.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  )
}

const ourServices = [
  {
    id: 1,
    icon: Engagement,
    title: "Improved Engagement",
    text: "Enhance communication and collaboration within your educational community. Our platform facilitates seamless interaction between teachers, students, and parents, fostering a more connected and supportive environment.",
  },
  {
    id: 2,
    icon: Analytics,
    title: "Insightful Analytics",
    text: "Access powerful data insights that drive better decision-making. Our analytics tools provide comprehensive reports and visualizations, helping you understand and improve student performance and administrative efficiency.",
  },
  {
    id: 3,
    icon: Ease,
    title: "Ease of Use",
    text: "Enjoy a smooth and intuitive user experience with our user-friendly interface. Designed with educators in mind, our platform ensures easy navigation and accessibility for all users, regardless of their technical proficiency.",
  },
]
