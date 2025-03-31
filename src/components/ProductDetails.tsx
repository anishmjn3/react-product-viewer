import React, { useEffect } from "react";
import { getAllProducts, getProductById } from "../api/product.api";
import { useLocation } from "react-router-dom";
import './productdetails.css'
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
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  minimumOrderQuantity: number;
};
interface RatingProps {
  value: number;
}

type ProductsResponse = Product;
const ProductDetails: React.FC = () => {
  const [ProductList, setProductList] = React.useState<Product>({
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    availabilityStatus: "",
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    minimumOrderQuantity: 0,
    thumbnail: "",
    images: [],
    reviews: [{
      rating: 0,
      comment: "",
      date: "",
      reviewerName: "",
      reviewerEmail: "",
    }]
    // reviews:[]
  })
  const [ProductLargeImage, setProductLargeImage] = React.useState<string>("")
  const [Fetch, setFetch] = React.useState<Boolean>(false)
  const location = useLocation()
  const fetchProducts = async (id: string | number) => {
    try {
      const allProducts: ProductsResponse = (await getProductById(Number(id)));
      setProductList(allProducts);
      setProductLargeImage(allProducts.thumbnail)
      setFetch(true)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("product")) {
      window.scrollTo(0, 0);
      const productId = path.split("/")[2];
      setFetch(false)
      if (productId) {
        fetchProducts(productId);
      }
    }
  }, [location]);



  const Rating: React.FC<RatingProps> = ({ value }) => {
    return (
      <div>
        <span className="fa fa-star" style={{ color: value >= 1 ? "orange" : "#000", fontSize: "12px" }}></span>
        <span className="fa fa-star" style={{ color: value >= 2 ? "orange" : "#000", fontSize: "12px" }}></span>
        <span className="fa fa-star" style={{ color: value >= 3 ? "orange" : "#000", fontSize: "12px" }}></span>
        <span className="fa fa-star" style={{ color: value >= 4 ? "orange" : "#000", fontSize: "12px" }}></span>
        <span className="fa fa-star" style={{ color: value >= 5 ? "orange" : "#000", fontSize: "12px" }}></span>
      </div>
    );
  };
  return (
    <div>
      {Fetch ?
        <section id="services" className="services">
          <div className="">
            <div >
              <p className="title-style" >{ProductList?.title}</p>
            </div>
            <div style={{ display: "inline" }}>
              <div className="column-half">
                <img className="my_img" src={ProductLargeImage} alt="" />
                <div className="zoom-thumb">
                  <div className="piclist">
                    {ProductList?.images.map((item, index) => (
                      <div key={index} style={{ cursor: "pointer", display: "inline-block", }}
                        onClick={() => {
                          setProductLargeImage(item)
                        }}
                      >
                        <img src={item} className="picthumb" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="column-half">
                <div className="_product-detail-content">
                  <span className="product-body" style={{ fontSize: "15px", textAlign: "right" }}> {ProductList?.rating ? ProductList?.rating : "No rating"} ⭐</span>
                  <div className="_p-price-box">
                    <div className="p-list">
                      <span> Price $ : <i className="fa fa-inr"></i> <del> {ProductList?.price}  </del>   </span>
                      <span className="price">
                        ${(ProductList?.price * (1 - ProductList?.discountPercentage / 100)).toFixed(2)}
                      </span>
                    </div>
                    <span className="product-body" style={{ color: "#787878" }}> {ProductList?.stock}-{ProductList?.availabilityStatus}, Min order: {ProductList?.minimumOrderQuantity}</span>
                    <div className="_p-features">
                      {ProductList?.description}
                    </div>

                    <div className="_p-add-cart">
                      <div className="_p-qty">
                        <span>Add Quantity</span>
                        <div className="value-button decrease_" id="">-</div>
                        <input type="number" name="qty" id="number" value="1" />
                        <div className="value-button increase_" id="" >+</div>
                      </div>
                    </div>

                    <form action=""
                      // method="post" 
                      accept-charset="utf-8"
                    >
                      <ul className="spe_ul"></ul>
                      <div className="_p-qty-and-cart">
                        <div className="_p-add-cart">
                          <button className="btn-theme btn buy-btn" >
                            <i className="fa fa-shopping-cart"></i> Buy Now
                          </button>
                          <button className="btn btn-success">
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                          </button>
                          <input type="hidden" name="pid" value="18" />
                          <input type="hidden" name="price" value="850" />
                          <input type="hidden" name="url" value="" />
                        </div>
                      </div>
                    </form>
                    Ratings & Reviews
                    {ProductList?.reviews.map((item, index) => (
                      <section className="product-list-block">
                        <div style={{ padding: 3 }}>
                          <Rating value={item.rating} />
                          <div>
                            <span style={{ fontSize: "10px", color: "#444" }}>
                              {item.reviewerName}
                            </span>
                            <span style={{ fontSize: "8px", color: "#666" }}>
                              ({item.reviewerEmail})
                            </span>
                          </div>
                          <div style={{ fontSize: "12px", color: "#666" }}>{item.date.slice(0, 10)}</div>
                          <div style={{ fontSize: "12px", color: "#666" }}>{item.comment}</div>
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        :
        <div style={{textAlign:"center",paddingTop:"20px"}}>
          Loading Data...
        </div>
      }
    </div >
  );
};

export default ProductDetails;
