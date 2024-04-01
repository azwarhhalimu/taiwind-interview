import Height from "@/componen/Height";
import React from "react";

const Jumberton: React.FC = () => {
    return (<>
        <div>
            <div id="main-banner">
                <Height height={60} />
                <div className='w-full xl:max-w-screen-xl m-auto'>
                    <div className='p-4 lg:flex'>
                        <div className='place-self-center flex-1'>
                            <div className=' text-red-500 text-lg'>SELAMAT DATANG DI WEBISITE TAILWIND</div>
                            <Height height={30} />
                            <div className=' text-5xl'><span className='text-blue-500  font-bold'>Ini adalah template untuk</span><span className='text-red-500'>testing </span>ujian interview</div>
                            <Height height={20} />
                            <div>Web ini di buat menggunakna tailwind css. testong teting percobaan</div>
                            <Height height={20} />
                            <button className=' bg-red-500 py-3 px-10 rounded-full text-white'>Explorer Sekarang</button>
                        </div>
                        <div className='hidden lg:block flex-1'>
                            <img className='float-right' src={"/assets/banner-right-image.png"} style={{ width: "80%", }} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>);
}

export default Jumberton;