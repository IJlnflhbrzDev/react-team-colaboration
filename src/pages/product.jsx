import CardProduct from "../components/Fragments/CardProduct";

const Product = () => {
    return (
        <div className="flex justify-center py-5">

        <CardProduct>
            <CardProduct.Body />
            <CardProduct.Footer />
        </CardProduct>
        </div>
    )
}
export default Product;