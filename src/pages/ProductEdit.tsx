import axios from 'axios';
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
  let imageUpdate = ""
  const onSubmit: SubmitHandler<FormInputs> = async data => {
   
    
      const file = data.image[0]
      const formData = new FormData();

      formData.append('file', file)
      formData.append("upload_preset", "vannhat")

      const { data : newimage} = await axios({
        url: "https://api.cloudinary.com/v1_1/nhatnvph15151/image/upload",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-formendcoded",
        },
        data: formData,
    });
    imageUpdate = newimage.url
    console.log(imageUpdate)
    data.image = imageUpdate
    props.onUpdate(data)
    navigate("/admin/products")
    }
   
   
   
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
          <input type="text" className="form-control" placeholder="Tên sản phẩm" {...register('name',{required:true})}  />
        
          {Object.keys(errors).length !== 0 && (
            <div>{errors.name?.type === "required" && <p className="text-red-500"> Không được để trống </p>}</div>
          )}
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Giá sản phẩm</label>
          <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Giá sản phẩm" {...register('price', { required: true })} />
        </div>
        {Object.keys(errors).length !== 0 && (
          <div>{errors.name?.type === "required" && <p className="text-red-500"> Không được để trống </p>}</div>
        )}

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Image</label> <br />
          <input type="file" placeholder="Ảnh" {...register('image', { required: true })} />
        </div>
        {Object.keys(errors).length !== 0 && (
          <div>{errors.name?.type === "required" && <p className="text-red-500"> Không được để trống </p>}</div>
        )}

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Thông tin sản phẩm</label>
          <textarea className="form-control" placeholder="Thông tin sản phẩm" {...register('title', { required: true })} />
        </div>
        {Object.keys(errors).length !== 0 && (
          <div>{errors.name?.type === "required" && <p className="text-red-500"> Không được để trống </p>}</div>
        )}

        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default ProductEdit;