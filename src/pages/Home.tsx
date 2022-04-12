import Title from 'antd/lib/skeleton/Title';
import React from 'react'
import { ProductTye } from '../types/product';
import {Link} from 'react-router-dom'



type HomeProps = {
    products: ProductTye[];
    
}

const Home = (props: HomeProps) => {
    return (
        <div className="w-12/12 mx-auto">
         <div className="banner">
                <div>
                    <img src="http://at08.chonweb.vn/wp-content/uploads/2020/06/slider_2-1-1920x757.jpg" alt="" />
                </div>
                <div className="w-9/12 m-auto flex justify-between pt-[130px] pb-[165px]">
                    <div className="text-center w-[50%]">
                        <p className="pb-[15px] ">
                            <h4 className="text-4xl text-[#e7b45a] font-bold ">CHÚNG TÔI LÀ</h4>
                            <span className=" text-xl">Tuna Coffee</span>
                        </p>
                        <p className="flex flex-col text-xl py-[20px]">
                            <span>Thứ hai đến Thứ bảy <strong>8:30am - 11:00pm </strong> | Hotline: <strong>090.635.1080</strong></span>
                            <span className="">-------------------------------------------------</span>
                        </p>
                        <p className="text-xl">
                            Chúng tôi đi khắp thế giới để tìm kiếm cà phê tuyệt vời.
                            Trong quá trình đó, chúng tôi phát hiện ra những hạt đậu
                            đặc biệt và hiếm đến nỗi chúng tôi có thể chờ đợi để mang chúng về.
                        </p>
                    </div>
                    <div>
                        <img src="http://at08.chonweb.vn/wp-content/uploads/2020/06/bg_about.png" alt="" />
                    </div>

                </div>
         </div>

         <div className="">
                <div className="w-12/12 h-auto bg-[url(http://at08.chonweb.vn/wp-content/themes/halink.at08/dev/enqueue/css/images/bg_menutoday.jpg)] ">
                   <div className="pt-[90px] pb-[80px]">
                        <div className="text-center  ">
                            <h2 className="text-[#e7b45a] font-bold uppercase text-4xl">MENU HÔM NAY</h2>
                            <span className="text-2xl leading-[50px]">Xem menu hôm nay</span>
                        </div>
                        <div className="">
                           <form className="text-center item-center text-lg  my-[30px]">
                                <button className="p-3 text-black bg-none hover:bg-[#e7b45a] hover:text-white border-2 border-slate-300 rounded-full mx-2">Cà Phê cảm hứng</button>
                                <button className="p-3 text-black bg-none hover:bg-[#e7b45a] hover:text-white border-2 border-slate-300 rounded-full mx-2">Cà phê pha Việt</button>
                                <button className="p-3 text-black bg-none hover:bg-[#e7b45a] hover:text-white border-2 border-slate-300 rounded-full mx-2">Cà phê thế giới</button>
                                <button className="p-3 text-black bg-none hover:bg-[#e7b45a] hover:text-white border-2 border-slate-300 rounded-full mx-2">Đồ uống</button>
                           </form>
                        </div>
                        {/* đổ dữ liệu */}
                       
                        <div className="products w-9/12 m-auto grid grid-rows-4 grid-cols-2  ">
                            {props.products.map((item) => {
                                return <div className=" text-xl mb-[30px]">
                                    <div className="flex ">
                                        <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden  flex justify-center item-center text-center mt-auto">
                                            <img className="w-[100%] h-[100%] object-fill"src={item.image} alt="" />
                                    </div>
                                    <p className="flex flex-col my-auto pl-3"> 
                                            <Link to={`product/${item._id}`} className="font-bold">{item.name} <span> ---------------- </span><span>{item.price}đ</span></Link>
                                        <span className="textClamp"> {item.title} </span>
                                    </p>
                                </div>
                            </div>
                               
                            })}
                        </div>
                        
                   </div>
                </div>
         </div>
            <div className="image-cafe ">
                <div className="w-9/12 mx-auto text-2xl">
                    <h1 className="text-4xl text-[#e7b45a] font-bold my-[30px] text-center">HÌNH ẢNH QUÁN CAFE</h1>
                    <div className="list-image grid grid-rows-1 grid-cols-2 gap-[30px]">
                        <div className="test relative">
                            <img className="w-[100%] " src="http://at08.chonweb.vn/wp-content/uploads/2020/06/g5.jpg" alt="" />
                            <a className="test1 absolute w-[64px] h-[64px] top-[45%] left-[45%] translate-[50%] " href="#"><i className="fa-solid fa-magnifying-glass-plus rounded-full bg-white border-2 p-3 text-center item-center "></i></a>   
                        </div>
                        <div className="grid grid-rows-2 grid-cols-2 gap-[30px] ">
                            <div className="test w-[100%] relative">
                                <img className="w-[100%]" src="http://at08.chonweb.vn/wp-content/uploads/2020/06/g3.jpg" alt="" />
                                <a className="test1 absolute top-[40%] left-[40%] translate-[50%] " href="#"><i className="fa-solid fa-magnifying-glass-plus rounded-full bg-white border-2 p-3 text-center item-center"></i></a>
                            </div>
                            <div className="test w-[100%] relative">
                                <img className="w-[100%] " src="http://at08.chonweb.vn/wp-content/uploads/2020/06/g2.jpg" alt="" />
                                <a className="test1 absolute top-[40%] left-[40%] translate-[50%] " href="#"><i className="fa-solid fa-magnifying-glass-plus rounded-full bg-white border-2 p-3 text-center item-center"></i></a>
                            </div>
                            <div className="test w-[100%] relative">
                                <img className="w-[100%]" src="http://at08.chonweb.vn/wp-content/uploads/2020/06/g1.jpg" alt="" />
                                <a className="test1 absolute top-[40%] left-[40%] translate-[50%] " href="#"><i className="fa-solid fa-magnifying-glass-plus rounded-full bg-white border-2 p-3 text-center item-center "></i></a>
                           </div>
                            <div className="test w-[100%] relative">
                                <img className="w-[100%]" src="http://at08.chonweb.vn/wp-content/uploads/2020/06/g4.jpg" alt="" />
                                <a className="test1 absolute top-[40%] left-[40%] translate-[50%] " href="#"><i className="fa-solid fa-magnifying-glass-plus rounded-full bg-white border-2 p-3 text-center item-center "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home