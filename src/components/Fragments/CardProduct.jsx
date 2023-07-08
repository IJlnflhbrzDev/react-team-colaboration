/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "../Elements/Button/button";

const setNumberFormat = (number) => {
  return number.toLocaleString('id-ID', {styles : 'currency', currency: 'IDR'});
}
const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow  mr-10">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <a href="#">
      <img className="p-8 rounded-t-lg h-72 object-cover w-full" src={image} alt="image-card" />
    </a>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white mb-2 mt-2">
          {title}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};
const Footer = ({ id, price, handleAddToCart }) => {
  return (
    <div className="flex px-5 pb-5 items-center justify-between ">
      <span className="text-xl font-bold text-white">Rp.{" "}{setNumberFormat(price)}</span>
      <Button title="Add To Cart" onClick={() => handleAddToCart(id)} />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
