import Height from "@/componen/Height";
import React from "react";

const Main: React.FC = () => {
    return (<>
        <main className='container m-auto lg:max-w-screen-xl'>
            <div className='lg:flex p-3'>
                <div className='flex-1'>
                    <div >
                        <img style={{ width: "100%", borderRadius: "60px" }} src="/assets/big-blog-thumb.jpg" />
                        <div className=' p-7 relative bg-white' id="shadow" style={{
                            borderRadius: "20px",
                            width: "80%",

                            zIndex: "9999",
                            marginTop: "-70px"
                        }}>
                            <div className='lg:flex gap-5 text-red-400 font-semibold' style={{ background: "#fff" }}>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>

                                    <span className='pl-2'>02 Maret 2024</span></div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>

                                    <span className='pl-2'>Azwar Halimu</span></div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                    </svg>

                                    <span className='pl-2'>  Branding</span></div>
                            </div>
                            <Height height={20} />
                            <div className='font-bold '>SEO Agency & Digital Marketing</div>
                            <Height height={20} />
                            <div className=" lg:block md:hidden hidden">Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...</div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "20px" }}></div>
                <div className='flex-1'>
                    <table cellPadding={"10px"} width={"100%"}>
                        <tbody>
                            {[...Array(4)].map((list, index) => (
                                <tr key={index}>
                                    <td valign='top'>
                                        <div className='flex text-red-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>
                                            <span className="py-2">24 Desember 2100</span>
                                        </div>
                                        <Height height={10} />
                                        <div className=' font-bold'>Lorem lipsum lorom lipsum</div>
                                        <Height height={10} />
                                        <div>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...

                                        </div>
                                    </td>
                                    <td valign='top' width={"30%"}>
                                        <img style={{ width: "100%", borderRadius: "10px" }} src="/assets/blog-thumb-01.jpg" />
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </>);
}

export default Main;