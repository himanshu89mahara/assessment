
export class Product{
    constructor(
        public id:number,
        public name: string,
        public price:number,
        public image?: string
    ){}
}

export type Product2 = {
    id:number;
    title:string;
    description:string;
    category:string;
    price:number;
    rating?:any;

}

export function initialProducts():Product[]{
    let products:Product[] = [];

    for(let i=1;i<=40; i++){
        products.push(new Product(1,'Product '+ i,i*10,'https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_1280.jpg'));
    }
    
    return products;
}