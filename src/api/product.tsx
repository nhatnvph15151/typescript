import instance from "./instance";
import { ProductTye } from "../types/product";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (_id: number) => {
    const url = `/products/${_id}`;
    return instance.delete(url);
}
export const add = (product: ProductTye) => {
    const url =`/products`;
    return instance.post(url,product);
}
export const read = (_id: string | undefined) => {
    const url = `/products/${_id}`;
    return instance.get(url);
}
export const update = (product: ProductTye) => {
    const url =`/products/${product._id}`;
    return instance.put(url,product);
}



