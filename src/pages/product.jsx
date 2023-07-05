import CardProduct from "../components/Fragments/CardProduct";

const Product = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header
          image={
            "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
        />
        <CardProduct.Body title={"Sepatu Nike Terbaru"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          asperiores, unde ad illum aliquam perspiciatis exercitationem natus,
          provident amet animi corporis ex. Assumenda, commodi consequatur amet
          aliquam porro cupiditate animi?
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp. 1.000.000"} />
      </CardProduct>
    </div>
  );
};
export default Product;
