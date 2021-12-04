export type User = {
    id: number,
    name:string,
    username:string,
    email: string,
    address:UserAddress,
    phone:string,
    website:string,
    company?:any
}

export type UserAddress = {
    street: string,
    suite:string,
    city:string,
    zipcode: string,
    geo?:any,
}