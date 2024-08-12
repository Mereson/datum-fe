import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css" // Import default styles
import "./customCalender.css"

export const CustomCalendar = () => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <Calendar
        tileClassName={({ date, view }) => {
          // Add a class for specific dates
          if (view === "month") {
            if (date.getDate() === 11 || date.getDate() === 17) {
              return "highlight"
            }
          }
        }}
        // calendarType="US"
        prevLabel={<span>&#9664;</span>}
        nextLabel={<span>&#9654;</span>}
      />
    </div>
  )
}
