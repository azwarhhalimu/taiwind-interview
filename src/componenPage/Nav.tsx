import { tMenu } from "@/interface/tMenu";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";


const Nav: React.FC = () => {
    const menu: tMenu[] = [
        {
            label: "Beranda",
            href: "",
        },
        {
            label: "Layanan",
            href: "",
        },
        {
            label: "Blog",
            href: "",
        },
        {
            label: "Tentang",
            href: "",
        },
        {
            label: "Kontak",
            href: "",
        },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<>
        <div className=' bg-slate-100'>

            <nav id="nav" className='lg:max-w-screen-xl mx-auto p-4'>
                <div className='flex lg:flex'>
                    <div className=' flex-1 font-bold' style={{ fontSize: "30px" }}>
                        <span className=' text-red-500'>Webiste</span>{" "}
                        <span className=' text-blue-500'>Tailwind</span>
                    </div>
                    <button onClick={handleShow} className="lg:hidden">Menu</button>
                    <ul id="menu" className='hidden lg:flex block'>
                        {menu.map((list, index) => (
                            <li key={`${index}-ed`} className=" hover:text-red-600"><a href={list.href}>{list.label}</a></li>
                        ))}

                        <li>
                            <a className=" px-10 text-white py-3 bg-red-500 rounded-full" href="">Login</a>
                        </li>
                    </ul>

                </div>
            </nav >
        </div >
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul id="menu" className='lg:flex'>
                    {menu.map((list, index) => (
                        <li key={`${index}-ed`} className=" hover:text-red-600"><a href={list.href}>{list.label}</a></li>
                    ))}

                    <li>
                        <a className=" px-10 text-white py-3 bg-red-500 rounded-full" href="">Login</a>
                    </li>
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    </>);
}

export default Nav;