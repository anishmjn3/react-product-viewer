export interface Product {
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
    minimumOrderQuantity: number
}

export interface ProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}




