import React from 'react'
import '../style/contact.scss'
import {motion} from 'framer-motion'
export default function Contact() {
    return (
        <div className='cmain'>
            <div className='cf'></div>
            <div className='chero'><div><h1>Contact Me</h1> </div></div>
            <div className='cform'>
                <div className='cfirst'>
                    <motion.h1 initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>Get In Touch</motion.h1>
                    <p>We endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                    <h2><i class="fa-solid fa-phone"></i> <span><span>contact Us</span> <span>+91 123456</span></span></h2>
                    <h2><i class="fa-solid fa-envelope"></i>  <span><span>send us an mail</span> <span>mail@.com</span></span></h2>
                    <h2><i class="fa-solid fa-location-dot"></i>  <span><span>Visit Our Office</span> <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span></span></h2>
                </div>
                <div className='csecond'>
                    <div className='csf'>
                       
                        <form action="">
                            <input type="text" name="name" id="" placeholder='name*'required />
                            <input type="email" name="" id="" placeholder='email*' required/>
                            <input type="text" name="name" id="" placeholder='phone*'required />
                            <textarea placeholder='type message' rows={7}></textarea>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className='getdir'> <motion.h1 initial={{ y: '60%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>Reach us</motion.h1> <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=star%20arcade%20morbi+(shivam)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
          </div>
    )
}
