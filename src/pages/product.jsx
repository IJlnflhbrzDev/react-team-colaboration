/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Button from "../components/Elements/Button/button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Nike Air Jordan",
    price: "Rp. 12.000.000",
    image:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          asperiores, unde ad illum aliquam perspiciatis exercitationem natus,
          provident amet animi corporis ex. Assumenda, commodi consequatur amet
          aliquam porro cupiditate animi?`,
  },
  {
    id: 2,
    title: "Sepatu Vans",
    price: "Rp. 2.000.000",
    image:
      "https://images.unsplash.com/photo-1619646176605-b7417fb53b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          asperiores, unde ad illum aliquam perspiciatis exercitationem natus,
          provident amet animi corporis ex. Assumenda, commodi consequatur amet
          aliquam porro cupiditate animi?`,
  },
  {
    id: 3,
    title: "Sepatu Nike",
    price: "Rp. 1.000.000",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          asperiores, unde ad illum aliquam perspiciatis exercitationem natus,
          provident amet animi corporis ex. Assumenda, commodi consequatur amet
          aliquam porro cupiditate animi?`,
  },
];
const Product = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login";
  }
  return (
    <>
    <div className="p-5 bg-blue-600 text-white flex justify-between items-center">      <h3>
        
      Halo {" "}
    {
      localStorage.getItem('email')
    }
    </h3>
    <Button title="Logout" className="bg-black hover:bg-gray-800" onClick={handleLogout} />
    </div>
    <div className="flex justify-center py-5">
      {products.map((product) => {
        return (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        );
      })}
    </div>
      </>
  );
};
export default Product;
