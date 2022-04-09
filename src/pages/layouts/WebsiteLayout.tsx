import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { isAuthenticate} from '../../utils/localStorage'

type TypeInputs = {
  email: string,
  password: string
}

type Props = {}



const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <div className="w-9/12  m-auto bg-white text-black flex justify-between item-center  text-[#707070]  text-center leading-[50px] ">
        <ul className="text-center flex my-auto  ">
          <li>
            <span>Chào mừng </span>
          </li>
        </ul>
        {isAuthenticate()}
      </div>
      <div className="">

        <nav className="w-9/12 bg-[#252525] leading-[100px]  mx-auto text-white text-lg rounded-full " >
          <div className=" w-12/12 m-auto flex text-center justify-center overflow-hidden">
            <ul className="flex">
              <li className="px-2"> <NavLink className="hover:no-underline hover:text-[#e7b45a]" to="/">Trang chủ</NavLink></li>
              <li className="px-2"> <NavLink className="hover:no-underline hover:text-[#e7b45a]" to="/about">Giới thiệu</NavLink></li>
              <li className="px-2"> <NavLink className="hover:no-underline hover:text-[#e7b45a]" to="/product">Sản Phẩm</NavLink></li>
            </ul >
            <ul className="mx-5">
              <li className="h-[100px] w-[100px] flex item-center justify-center text-center">
                <NavLink to="/">
                  <img className="w-[100%] h-[100%] mt-auto object-cover item-center" src="http://at08.chonweb.vn/wp-content/uploads/2020/06/demo-logo.png" alt="" />
                </NavLink>
              </li>
            </ul>
            <ul className="flex ">
              <li className="px-2"><NavLink className="hover:no-underline hover:text-[#e7b45a]" to="/SignUp">Dịch vụ</NavLink></li>
              <li className="px-2"><NavLink className="hover:no-underline hover:text-[#e7b45a]" to="/SignUp">Tin tức</NavLink></li>
              <li className="px-2"> <NavLink className="hover:no-underline hover:text-[#e7b45a]" to="/Contact">Liên Hệ</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>

      <main >
        <Outlet />
      </main>
      <div >
        <div className="w-9/12 mx-auto flex justify-between my-5 text-2xl leading-[60px]">
          <div className="border-x-2 border-y-2 flex flex-cols text-center p-3  ">
            <span className="pr-2 "><img src="http://at08.chonweb.vn/wp-content/uploads/2020/06/service_1.png" alt="" /></span>
            <span>Coffee chất lượng hàng <br />
              đầu của Châu Âu
            </span>
          </div>
          <div className="border-x-2 border-y-2 flex flex-cols text-center p-3 ">
            <span className="pr-2"><img src="http://at08.chonweb.vn/wp-content/uploads/2020/06/service_1.png" alt="" /></span>
            <span className="text-center flex justify-center item-center">Coffee chất lượng hàng
              <br />
              đầu của Châu Âu
            </span>
          </div>
          <div className="border-x-2 border-y-2 flex flex-cols text-center p-3 ">
            <span className="pr-2"><img src="http://at08.chonweb.vn/wp-content/uploads/2020/06/service_1.png" alt="" /></span>
            <span>Coffee chất lượng hàng <br />
              đầu của Châu Âu
            </span>
          </div>
        </div>
        {/* footer */}

        <footer className="row row-cols-5 py-5 my-5 border-top bg-black text-white">
          <div className="col">
            <iframe className="border-2 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59589.25598491866!2d105.72657203484937!3d21.019538016758542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454a1080e72f3%3A0xb08bae358d43e397!2zTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1648830857415!5m2!1svi!2s" width={400} height={200} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="col">
          </div>
          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
        </footer>
      </div>

    </div>


  )
}

export default WebsiteLayout