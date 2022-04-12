import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
  onAdd: (product: TypeInputs) => void
};
type TypeInputs = {
  name: string,
  price: number,
  image: string,
  title: string
}
 
const ProductAdd = (props: ProductAddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
  
  console.log(errors)
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TypeInputs> = data => {

    const file = data.image[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "vannhat")
    axios({
      url: "https://api.cloudinary.com/v1_1/nhatnvph15151/image/upload",
      method: "POST",
      headers: {
        "Content-Type": "application/x-ww-formendcoded"
      },
      data: formData
    }).then((hi) => {
      data.image =  hi.data.url
      props.onAdd(data);
      navigate("/admin/products")
    })




  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
          <input type="text" className="form-control" placeholder="Tên sản phẩm" {...register('name',{required:true})}  />
          {Object.keys(errors).length!==0 && (
            <div>{errors.name?.type === "required" && <p className="text-red-500"> Không được để trống </p>}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Giá sản phẩm</label>
          <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Giá sản phẩm" {...register('price', { required: true })} />
          {Object.keys(errors).length !== 0 && (
            <div>{errors.name?.type === "required" && <p className="text-red-500"> Không được để trống </p>}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Giá sản phẩm</label>
          <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Giá sản phẩm" {...register('image', { required: true })} /> 
          {Object.keys(errors).length !== 0 && (
            <div>{errors.name?.type === "required" && <p className="text-red-500"> Không được để trống </p>}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Thông tin sản phẩm</label>
          <textarea className="form-control" placeholder="Thông tin sản phẩm" {...register('title', { required: true })} />
          {Object.keys(errors).length !== 0 && (
            <div>{errors.name?.type === "required" && <p className="text-red-500"> Không được để trống </p>}</div>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>

    </form>
  )
}

export default ProductAdd