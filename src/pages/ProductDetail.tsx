import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductTye } from '../types/product';
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductTye>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setProduct(data)
        }
        getProduct();
    }, [id])
    return (
       //kiem tra neu co du lieu thi cho vao product name
        // nguoc lai thi default
        <div>{product?.name}</div>
    )
}

export default ProductDetail