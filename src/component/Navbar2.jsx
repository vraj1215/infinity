import React, { useEffect } from 'react'
import '../style/nav.scss';
import {Link} from 'react-router-dom'
export default function () {
   
    const remo = () => {
        const a = document.getElementsByClassName('a')
        a.forEach((ele) => {
            ele.classList.remove('active')
        })
    }
    useEffect(() => {
        // setInterval(() => {
        //     // const i = curindex === slide.length - 1;
        //     // const newindex = i ? 0 : curindex + 1;
        //     setcurindex(curindex==slide.length-1?0:curindex+1);
                
        // }, 3000)
    }, [])
   
    
    return (
        <div>
            <header>
                <a href="" class="logo">Infinity</a>
                <ul class="navlist">
                    <li><Link to="/" className=" a" onClick={remo}>Home</Link></li>
                    <li><Link to="/about" className='a' onClick={remo}>About</Link></li>
                    <li id='drop'><a href="#about"  className='a' onClick={remo}>Service</a>
                        <ul id='submenu'>
                            <li><Link to="/photography">photography</Link></li>
                            <li><Link to="/photography">photography</Link></li>
                            <li><Link to="/photography">photography</Link></li>
                            <li><Link to="/photography">photography</Link></li>
                        </ul>
                    </li>

                    <li><a href="#" className='a' onClick={remo}>Video</a></li>
                    <li><Link to="/contact" className='a' onClick={remo}>Contact</Link></li>
                </ul>
                <div class="bx bx-menu" id="menu-icon"></div>
            </header>

               </div>
    )
}
