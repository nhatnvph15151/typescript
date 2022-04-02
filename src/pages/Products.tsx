import Title from 'antd/lib/skeleton/Title';
import React from 'react'
import { ProductTye } from '../types/product';



type ProductsProps = {
    products: ProductTye[];

}
const Products = (props: ProductsProps) => {
  return (
    <div>
        <div>
              <h1 className="text-center text-[#e7b45a] text-4xl mt-[30px] ">SẢN PHẨM</h1>
        </div>
          <div className="products w-9/12 mx-auto grid grid-rows-4 grid-cols-2 mt-[70px] ">
              {props.products.map((item) => {
                  return <div className=" text-xl mb-[30px]">
                      <div className="flex ">
                          <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden ">
                              <img width="100%" height="100%" src="http://at08.chonweb.vn/wp-content/uploads/2020/06/p-8.jpg" alt="" />
                          </div>
                          <p className="flex flex-col my-auto pl-3">
                              <span className="font-bold">{item.name} <span> ---------------- </span><span>{item.price}</span></span>
                              <span className="textClamp"> {item.title} </span>
                          </p>
                      </div>
                  </div>

              })}


          </div>
    </div>
  )
}
export default Products