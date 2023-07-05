/* eslint-disable react/prop-types */
const Button = (props) => {
  const { title, type = "button", onClick = () => {} } = props;
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >
      {title}
    </button>
  );
};

export default Button;
