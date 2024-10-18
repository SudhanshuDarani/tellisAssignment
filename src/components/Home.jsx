import React from 'react'
// import bannerImage from "../../public/banner-1.webp" // Assuming you move it to src/assets/


export const Home = () => {
    return (
        <>
            <div className='bg-black h-[100%] flex justify-center  relative w-[100vw]'>
                <div className="navbar z-[999] mb-[20pt] bg-black h-[2/4] fixed flex justify-between item-center w-[100%] flex text-white p-[20pt]">
                    <div className="navbarImage h-[100%] w-[10%] ">
                        <img src={`${process.env.PUBLIC_URL}/logo-1.webp`} className='h-[100%] 
                    w-[100%]' alt="Banner" />
                    </div>

                    <div className="navbarTexts flex gap-[20pt] text-[14pt] px-[10pt] items-center w-[50%] font-semibold">
                        <p>Home +</p>
                        <p>Pages +</p>
                        <p>Shop +</p>
                        <p>Blog +</p>
                        <p>Contact </p>
                    </div>
                    <button className='px-[20pt] text-[15pt] py-[18pt] bg-[#B38F3E]'>Booking Now</button>
                </div>
                <div className="container mt-[12rem] flex h-[100vh] w-[100%] ">
                    <div className="text flex justify-center flex-col  text-white w-[50%] text-[45pt] font-bold items-center"
                        style={{ fontFamily: "Arima" }}>
                        <span>
                            Best Haircut Salon <br />
                            in the city
                        </span>
                        <button className=' px-[20pt] text-[15pt] py-[18pt] bg-[#B38F3E]'>READ MORE</button>
                    </div>
                    <div className="images  w-[50%] p-[1pt] flex justify-center items-end">
                        <img src={`${process.env.PUBLIC_URL}/banner-1.webp`} className='h-[70%] w-[100%]' alt="Banner" />
                    </div>
                </div>
            </div>


            <div className="container2 h-screen flex w-[100%]">
                <div className="column1 flex flex-col items-center relative  w-[50%] relative p-[20pt]">
                    <div className="image1 h-[450pt] w-[350pt] left-[20%] top-[40pt] absolute">
                        <img src={`${process.env.PUBLIC_URL}/column1.webp`} className='h-[100%] w-[100%]' alt="Banner" />
                    </div>
                    <div className="image2 h-[150pt] top-[75pt] w-[150pt] absolute right-[30pt]">
                        <img src={`${process.env.PUBLIC_URL}/column2.webp`} className='h-[100%] w-[100%]' alt="Banner" />
                    </div>
                    <div className="image3 h-[280pt] border-[8pt] border-white w-[280pt] bottom-[80pt] right-[80pt] absolute">
                        <img src={`${process.env.PUBLIC_URL}/column3.webp`} className='h-[100%] w-[100%]' alt="Banner" />
                    </div>
                </div>
                <div className="column2  w-[50%] flex flex-col justify-center gap-[12pt] p-[2pt]">
                    <h1 className='text-[#B48E40] text-[18pt] font-[600]' style={{ fontFamily: "Arima" }}>About us</h1>
                    <h2 className='text-[black] text-[45pt] font-[600] leading-[50pt] mb-[15pt]' style={{ fontFamily: "Arima" }}>
                        Best Haircut Salons <br />
                        For Men Women
                    </h2>
                    <p className='text-[#33333A] text-[16pt]'>
                        Haircut" is a term used to describe when a person removes the hair <br />
                        on their head. This is done to allow for better access to the part of <br />the body that needs cutting.
                    </p>
                    <button className=' mt-[20pt] text-[white] font-[600] px-[20pt] w-[28%] text-[20pt] py-[10pt] bg-[#B38F3E]' style={{ fontFamily: "Arima" }}>Read More</button>
                </div>
            </div>


            <div className="container3 h-screen  w-[100%] bg-[#F7F7F7]">
                <div className="col1  h-[50%] w-[100%] flex flex-col justify-center items-center text-center">
                    <h1 className='text-[#B48E40] font-[700] text-[18pt] mb-[10pt]'
                        style={{ fontFamily: "Arima" }}>
                        OUR SERVICE
                    </h1>
                    <h4 style={{ fontFamily: "Arima" }} className='text-[49pt] font-[600] leading-[60pt]'>Popular Hair Cutting <br /> And salon</h4>
                </div>
                <div className="col2 h-[50%] w-[100%]  flex">
                    <div className="img1 h-[100%] w-[50%]  flex justify-center">
                        <img src={`${process.env.PUBLIC_URL}/services-5.webp`} className='h-[100%] w-[70%]' alt="Banner" />
                    </div>
                    <div className="img2 h-[100%] w-[50%]  p-[10pt]">
                        <h3 style={{ fontFamily: "Arima" }} className='text-[30pt] font-[800] leading-[35pt] mt-[35pt] mb-[15pt]'>
                            Best Facial Hair Trim At <br /> Home Treatment
                        </h3>
                        <p className='text-[15pt] w-[80%]'>Phasellus vitae purus ac urna consequat facilisis a vel leo. Maecenas hendrerit lacinia mollis. Fusce in leo lectus. Phasellus leo mi, pellentesque nec risus malesuada, volutpat porta ligula.</p>
                    </div>
                </div>
            </div>

        </>
    )
}
