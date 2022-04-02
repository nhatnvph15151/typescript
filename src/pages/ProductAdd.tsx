import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
  onAdd: (product: TypeInputs) => void
};
type TypeInputs = {
  name: string,
  price: number,
  title: string
}

const ProductAdd = (props: ProductAddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TypeInputs> = data => {
    props.onAdd(data);
    navigate("/admin/products")

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="text" placeholder='Tên sản phẩm' {...register('name')} />
      <input type="number" placeholder='Giá sản phẩm' {...register('price')} />
      <textarea className="text-center" placeholder="Thông tin sản phẩm" {...register('title')}></textarea>
      <button>Add</button>
    </form>
  )
}

export default ProductAdd