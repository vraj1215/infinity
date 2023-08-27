import React from 'react'
import '../style/footer.scss'
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <section className='fstart start'>
            <div>
                <div className='ffirst'>
                    
                    <h1>infinity</h1>
                    <p><i class="fa-solid fa-location-dot"></i>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ut?</p>
                    <p><i class="fa-solid fa-envelope"></i>  <a href="mailto:vrajpatel121512@gmail.com">mail@to.com</a></p>
                    <p><i class="fa-solid fa-phone"></i> <a href="callto:+917383499798">12345678</a></p>
                </div>
                <div className='ssecond'>
                    
                   <Link to="/"><i class="fa-solid fa-circle"></i> Home</Link>
                   <Link to="/about"><i class="fa-solid fa-circle"></i> About</Link>
                   <Link to=""><i class="fa-solid fa-circle"></i> Contact</Link>
                   <Link to="/service"><i class="fa-solid fa-circle"></i> Service</Link>
                   
                   
                    
                </div>
                <div className='tthird'>
                    <a href="" id='insta'><i class="fa-brands fa-instagram"></i></a>
                    <a href="" id='face'><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""  id='youtu'><i class="fa-brands fa-youtube"></i></a>
                    <a href="" id='linkin'><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>

            
        </section>
    )
}
