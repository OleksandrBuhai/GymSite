import React, {useState} from 'react';
import "./Header.css"
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import {Link}from 'react-scroll'


const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false
    const [menu, setMenu] = useState(false)

    return (
        <div className='header'>
            <img src={Logo} alt='' className='logo'
                 style={{width: "1.5rem", height: "1.5rem"}}/>
            {(menu === false && mobile === true) ?
                (<div style={{
                    background: "var(--appColor)",
                    padding: "0.5rem",
                    borderRadius: "5px"
                }}
                      onClick={()=> setMenu(true)}
                ><img src={Bars} alt={""}/></div>) :
                <ul className='header-menu'>
                    <li onClick={()=>setMenu(false)}>
                        <Link
                        to='hero'
                        span={true}
                        smooth={true}
                        >Home</Link>
                        </li>
                    <li onClick={()=>setMenu(false)}>
                        <Link to='programs'
                              span={true}
                              smooth={true}>Programs</Link></li>
                    <li onClick={()=>setMenu(false)}>
                        <Link to='reasons'
                              span={true}
                              smooth={true}>Why us</Link></li>
                    <li onClick={()=>setMenu(false)}>
                        <Link to='plans'
                              span={true}
                              smooth={true}>Plans</Link></li>
                    <li onClick={()=>setMenu(false)}>
                        <Link to='testimonials'
                        span={true}
                        smooth={true}>Testimonials</Link>
                        </li>
                </ul>
            }
        </div>
    );
};

export default Header;