/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { json } from "react-router-dom";
import Button from "../components/Elements/Button/button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "Nike Air Jordan",
    price: 500000,
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
    price: 2000000,
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
    price: 1000000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          asperiores, unde ad illum aliquam perspiciatis exercitationem natus,
          provident amet animi corporis ex. Assumenda, commodi consequatur amet
          aliquam porro cupiditate animi?`,
  },
];
const Product = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  // implement component did update untuk menjumlahkan semua total price
  useEffect(() => {
   if (cart.length > 0) {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);

    setTotalPrice(sum);
    // menyimpan data yang sudah ada atau yang baru dibuat ke localstorage
    localStorage.setItem('cart', JSON.stringify(cart));
   }
  }, [cart]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      return setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart(...cart, {
        id: id,
        qty: 1,
      });
    }
    setCart([
      ...cart,
      {
        id: id,
        qty: 1,
      },
    ]);
  };
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="p-5 bg-blue-600 text-white flex justify-between items-center">
        {" "}
        <h3>Halo {localStorage.getItem("email")}</h3>
        <Button
          title="Logout"
          className="bg-black hover:bg-gray-800"
          onClick={handleLogout}
        />
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  id={product.id}
                  price={product.price}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            );
          })}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5">CART</h1>
          <ul></ul>
          <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Title</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (productID) => productID.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{item.qty}</td>
                    <td>
                      Rp.{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-5">
            <hr />
            <h4 className="ml-5 font-bold">
              Total Harga Barang :{" "}
              <span >
                Rp {" "}
                {totalPrice.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
