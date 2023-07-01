/* eslint-disable react/prop-types */


export default function Input(props) {
    const {type,placeholder} = props;
  return (
    <input type={type} className="text-sm border rouded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} />
  )
}
