import CardProduct from "../components/Fragments/CardProduct";

const Product = () => {
    return (
        <div className="flex justify-center py-5">

        <CardProduct>
            <CardProduct.Header></CardProduct.Header>
            <CardProduct.Body title={'Sepatu Nike Terbaru'}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          asperiores, unde ad illum aliquam perspiciatis exercitationem natus,
          provident amet animi corporis ex. Assumenda, commodi consequatur amet
          aliquam porro cupiditate animi?
            </CardProduct.Body>
            <CardProduct.Footer />
        </CardProduct>
        </div>
    )
}
export default Product;