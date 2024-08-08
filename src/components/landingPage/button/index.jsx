export const Button = ({ text, style }) => {
  return (
    <button className={`rounded-lg ${style} bg-[#f4901f]`}>
      {text}
    </button>
  )
}
