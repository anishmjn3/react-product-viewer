import React, { useEffect } from "react";
import { getAllProducts } from "../api/product.api";
import "./productList.css"
import { Link } from "react-router-dom";
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  availabilityStatus: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  minimumOrderQuantity: number;
};
type ProductsResponse = Product[];

const ProductList: React.FC = () => {
  const [ProductList, setProductList] = React.useState<Product[]>([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts: ProductsResponse = (await getAllProducts()).products;
        setProductList(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [])
  return (
    <div>
      <h2>Product List</h2>
      {ProductList.length > 0 ? (
        <div>
          {ProductList.map((product, index) => (
            <div key={index}>
              <Link to={`/product/${product.id}`}>
                <div className="product-list-block">
                  <div style={{ display: "inline" }}>
                    <div style={{ display: "inline-block", width: "30%" }}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div style={{ display: "inline-block", width: "70%" }}>
                      <div>
                        <div
                          style={{ display: "inline" }}
                        >
                          <span
                            className="product-title" >{product.title}</span>
                        </div>
                        <br />
                        <span className="product-body" style={{ color: "#787878" }}> ({product.stock})-{product.availabilityStatus}, Min order: {product.minimumOrderQuantity}</span>
                      </div>
                      {/* <span className="product-body"> ({product.stock})-{product.availabilityStatus}, Min order: {product.minimumOrderQuantity}</span> */}
                      <div className="product-body">&nbsp;&nbsp;
                        <span style={{ textDecorationLine: "line-through", color: "#9e9e9e" }}>$ {product.discountPercentage}</span>
                        <span style={{ color: "#f57224" }}>
                          &nbsp;${(product.price * product.discountPercentage).toFixed(2)}
                        </span>
                        <span className="product-body" style={{ fontSize: "10px", textAlign: "right" }}> {product.rating ? product.rating : "No rating"} ⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductList;
