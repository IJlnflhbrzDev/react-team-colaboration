/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "../Elements/Button/button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <a href="#">
      <img
        className="p-8 rounded-t-lg"
        src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1190&q=80"
        alt="image-card"
      />
    </a>
  );
};

const Body = () => {
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white mb-2 mt-2">
          Sepatu Baru
        </h5>
        <p className="text-s text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          asperiores, unde ad illum aliquam perspiciatis exercitationem natus,
          provident amet animi corporis ex. Assumenda, commodi consequatur amet
          aliquam porro cupiditate animi?
        </p>
      </a>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="flex px-5 pb-5 items-center justify-between ">
      <span className="text-xl font-bold text-white">Rp. 1.000.000</span>
      <Button title="Add To Cart" />
    </div>
  );
};

CardProduct.Header = Header ;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
