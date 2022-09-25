import { Product } from "./productdata";
export class ProductService {
  public getProducts(){
   let a: Product[];
   a=[
     new Product(1,"memorycard",500,'two'),
     new Product(2,"pendrive",600,'three'),
     new Product(3,"headset",400,'five')

   ];
   return  a;
  }}

