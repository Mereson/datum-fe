
import { ProfileImage, StudentIcon } from "../../../assets"
import { BackIcon } from "../../../components"
import { getFeedback } from "../../../api"
import { useQuery } from "@tanstack/react-query"
import { useStudentsData } from "../../../states/students"

export const Feedback = () => {
  const { studentsData } = useStudentsData()
  const studentInfo = studentsData?.parent?.students[0]
  const term = "FirstTerm"

  const query = useQuery({
    queryKey: ["StudentFeedback", studentInfo.id, studentInfo.class, term],
    queryFn: () =>
      getFeedback(studentInfo.id, studentInfo.class, studentInfo.term),
  })

  if (query.isError) {
    console.log(query.error.message)
  }

  if (query.isSuccess) {
    console.log(query.data)
    console.log(query.data.feedbackOnPostgres[0])
  }

  return (
    <section className=" bg-[#f4f4f4] w-full h-full overflow-auto pt-8 sm:px-[6.25rem] ">
      <div className="flex justify-between">
        <BackIcon link={"/students/viewResults"} />
        <StudentIcon />
      </div>
      {/* This is the div containing the main  */}

      <main className="my-[50px] bg-[#fafafa] border-[1.47px] border-[grey] rounded-2xl">
        {/* This is the div containing the profile picture and the picture frame */}
        <div>
          <figure className="pb-[1.313rem] flex relative ">
            <img className="" src={ProfileImage} alt="Profile-Picture-Frame" />
          </figure>
        </div>

        <div className="">
          {query.isSuccess && (
            <>
              <div className="p-3 text-lg font-bold">
                <h2>Class: {query.data.feedbackOnPostgres[0].class}</h2>
                <h2>Term: {query.data.feedbackOnPostgres[0].term}</h2>
              </div>
              <div className="py-3 px-4 text-[16px] h-[20rem] overflow-auto">
                {query.data.feedbackOnPostgres[0].feedback}
              </div>
            </>
          )}
        </div>
      </main>
    </section>
  )
}
Feedback.propTypes = {}
