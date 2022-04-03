import React from 'react'
import { ProductTye } from '../types/product'
import { Link } from 'react-router-dom';

type ProductManagerProps = {
    products: ProductTye[];
    onRemove: (id: number) => void
}
const ProductManager = (props: ProductManagerProps) => {
    return (
        <div>
            <h1 className="text-center text-4xl text-[#4d5df9]">Product</h1>
            <button className="px-4 py-2 rounded-full bg-white text-black border-2 hover:no-underline hover:bg-black "><Link to={`/admin/products/add`}>ADD</Link></button>
            <table className="table text-xl mt-[20px]">
                <thead className="thead-dark text-2xl">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Title</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>    
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.title}</td>
                                <td>
                                    <button><Link to={`/admin/products/${item._id}/edit`}><i className="fa-solid fa-screwdriver-wrench ml-2"></i></Link></button>
                                </td>   
                                <td>
                                    <button onClick={() => props.onRemove(item._id)}><i className="fa-solid fa-trash ml-3 "></i></button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            
        </div>
    )
}
export default ProductManager

