import PropTypes from "prop-types"
import { SbEmojiThumbsUp } from "../../../../assets"
import { CircularProgressBar } from "../progressBar"

export const StudentsAttendance = ({ score, total, percentage }) => {
  return (
    <div className=" bg-[#fafafa] h-[309px] pl-11 pt-[30px] shadow-sm rounded-2xl">
      <div>
        <h4 className="font-bold text-lg pb-11">Attendance</h4>
        <CircularProgressBar
          styling={"pl-[41px]"}
          score={score}
          total={total}
        />
      </div>
      <div>
        <span className="pt-1 flex items-baseline">
          <h4 className="font-bold text-lg">{score}/</h4>
          <h5 className="font-bold text-sm">{total}</h5>
        </span>
        {percentage > 50 ? (
          <span className="flex items-center gap-[10px]">
            <p>Good job! keep it up!</p>
            <i>
              <SbEmojiThumbsUp />
            </i>
          </span>
        ) : (
          <span className="flex items-center gap-[10px]">
            <p>Not so great 😔, do better.</p>
          </span>
        )}
      </div>
    </div>
  )
}

StudentsAttendance.propTypes = {
  score: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
}
