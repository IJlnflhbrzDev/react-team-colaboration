/* eslint-disable react/prop-types */
const Button = (props) => {
  const { title, type = "button", onClick = () => {}, className = 'bg-blue-600 hover:bg-blue-500' } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    >
      {title}
    </button>
  );
};

export default Button;
