import type { IProduct } from "../App";

interface ProductProps {
    product: IProduct;
    handleAddToCartClick(id: number): void;
}



const Product = ({ product, handleAddToCartClick }: ProductProps) => {
  return (
    <>
        <div>
            <div>{product.title}</div>
            <button onClick={() => handleAddToCartClick(product.id)}>
                Add to Cart
            </button>
        </div>
    </>
  )
}

export default Product;
