import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div>
            <div className="flex justify-between w-9/12 mx-auto my-[40px]">
                <div className="text w-6/12 flex flex-col ">
                    <h1 className="font-bold text-2xl">CÔNG TY TNHH TM DV HALINK</h1>
                    <p className="my-[30px]">
                        Trải qua hơn 15 năm hoạt động  phát triển, đã từng bước khẳng đinh và tạo sự tín nhiệm trong lòng khách hàng, trở thành một trong những công ty chuyên nghiệp nhất cung cấp Điện thoại, máy tính, thiết bị văn phòng và các giải pháp ứng dụng công nghệ
                    </p>
                        <span><i className="fa-solid fa-user"></i> Số 6 Phan Chu Trinh, P.Tân Thành, Q.Tân Phú, TP.HCM</span>
                        <span> <i className="fa-solid fa-location-dot"></i> Bộ phận tư vấn khách hàng: <br />
                        Hotline: 090.635.1080 <br />
                        Email: dv@web24s.com
                        </span>
                   
                </div>
                <form className="w-6/12 flex flex-col leading-[30px] " action="">
                    <h2 className="font-bold text-2xl">Gửi tin nhắn cho chúng tôi</h2>
                    <input className=" border-2 w-[70%] rounded-full  px-3 py-2" type="text" />
                    <input className=" border-2 w-[70%] rounded-full  px-3 py-2 my-4" type="text" />
                    <textarea className=" border-2 w-[70%] rounded-full " ></textarea>
                    <button className=" w-[20%] border-2 bg-amber-300 px-2 py-2 text-xl  text-white rounded-full mt-[20px]"> Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact