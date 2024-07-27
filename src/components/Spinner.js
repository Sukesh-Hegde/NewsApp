import loading from "./Walk.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
