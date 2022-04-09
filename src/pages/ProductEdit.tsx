import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductTye } from '../types/product';

type ProductEditProps = {
  onUpdate: (product: ProductTye) => void
}
type FormInputs = {
  name: string,
  price: number,
  image: string,
  title: string
}
const ProductEdit = (props: ProductEditProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data);
    }
    getProduct();
  }, [])

  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log(data)
    props.onUpdate(data);
    navigate("/admin/products")
  }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
          <input type="text" className="form-control" placeholder="Tên sản phẩm" {...register('name')} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Giá sản phẩm</label>
          <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Giá sản phẩm" {...register('price')} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Image</label>
          <input type="" className="form-control" id="exampleInputPassword1" placeholder="Giá sản phẩm" {...register('image')} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Thông tin sản phẩm</label>
          <textarea className="form-control" placeholder="Thông tin sản phẩm" {...register('title')} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default ProductEdit