import { Cart } from "./cart"

export interface ProductForCart{
cart:Cart, 
id: number,
productId:number,
quantity: number |null
}