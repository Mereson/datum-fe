import PropTypes from "prop-types";

export const CoreSubjects = ({ subjects }) => {
  return (
    <div className="bg-[#fafafa] h-[309px] grid grid-cols-2 gap-4 pt-7 px-6 rounded-2xl">
      <div className="flex flex-col gap-3">
        <h5 className="text-lg font-bold">Core Subjects</h5>
        <div className="flex flex-col text-start gap-3 pl-5">
          {subjects.map(({ id, subject }) => (
            <p className="text-base" key={id}>
              {subject}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h5 className="text-lg font-bold">Topics</h5>
        <div className="flex flex-col gap-3 pl-1">
          {subjects.map(({ id, topics }) => (
            <p key={id}>{topics}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

CoreSubjects.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      subject: PropTypes.string.isRequired,
      topics: PropTypes.number.isRequired,
    })
  ).isRequired,
};
