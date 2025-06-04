export interface Products {
  _id: number;
  title: string;
  isNew: boolean;
 price: string | number;  // Allow both types
  oldPrice: string | number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
}
export interface ItemProps {
    item:Products
}
export interface StateProps{
shopping:{
    productData: [],
    userInfo: null,
    orderData: {
        order:Products[]
    }
}  
}