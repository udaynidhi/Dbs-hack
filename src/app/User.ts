export class User{

  stock!:string;
  ordertype!:string;
  price!:string;
  quantity!:string;
    constructor(){

    }
    store(
      stock:string,

      ordertype:string,
       price:string,
      quantity:string,
      ){
        this.stock=stock;
        this.ordertype=ordertype;
        this.price=price;
        this.quantity=quantity;


    }


}
