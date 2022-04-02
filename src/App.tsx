import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate, Router } from 'react-router-dom';
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { add, list, remove, update } from './api/product';
import axios from 'axios';
import type { ProductTye } from './types/product';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import SignUp from './pages/SignUp';
import About from './pages/about';
import Products from './pages/Products';


function App() {
  const [products, setProducts] = useState<ProductTye[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (_id: number) => {
    // call api
    remove(_id);
    // reRender
    setProducts(products.filter(item => item._id !== _id));
  }

  const onHandleAdd = async (product: ProductTye) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHandleUpdate = async (product: ProductTye) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data.id ? data : item));
  }

  return (
    <div className="App">

      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home products={products} />} />
            <Route path="product">
              <Route index element={<Products products={products} />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="SignUp" element={<SignUp />} />
          </Route>
         
          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem} /></PrivateRouter>} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App