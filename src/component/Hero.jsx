import React from 'react'
import '../style/hero.scss'
import i from '../assets/img.jpg'
import i2 from '../assets/img2.jpg'
import i3 from '../assets/i3.jpeg'
import { motion } from 'framer-motion'
import { useState } from 'react'
export default function Hero() {
    const slide = [

        {url: i},
        { url: i2 },
        { url: i3 }
    ]
    const [curindex, setcurindex] = useState(0);
    const gotopre = () => {
        const i = curindex === 0;
        const newindex = i ? slide.length - 1 : curindex - 1;
        setcurindex(newindex);
    }
    const gotonex = () => {
        const i = curindex === slide.length - 1;
        const newindex = i ? 0 : curindex + 1;
        setcurindex(newindex);
    }
    return (
        <div>
            <section className='hero'>

                <div className='slider'>

                    <div style={{ height: "100%", position: 'relative' }}>
                        <div className='back' onClick={gotopre}><i class="fa-solid fa-arrow-left"></i></div>
                        <div className='forwd' onClick={gotonex}><i class="fa-solid fa-arrow-right"></i></div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='slide' style={{ backgroundImage: `url(${slide[curindex].url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh' }}><div>{curindex !== 0 ? curindex === 1 ? <div className='main1'><h1 style={{ background: 'transparent' }}>photography</h1></div> : <div className='main1'><h1 style={{ background: 'transparent' }}>photography</h1></div> : <div className="main" style={{ backgroundColor: 'transparent' }}>

                            <div className="inside" style={{ backgroundColor: 'transparent' }}>
                                <h2 style={{ backgroundColor: 'transparent' }}>Hello There!</h2>
                                <motion.h1 style={{ backgroundColor: 'transparent' }} initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>i'm shivam adroja</motion.h1>
                                <motion.p style={{ backgroundColor: 'transparent' }} initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni recusandae libero, dolorem architecto iure totam. Voluptates a ducimus maiores.</motion.p>
                                <motion.div style={{ backgroundColor: 'transparent' }} initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                                    <button >Hire Me</button>
                                    <button >Call Me</button>
                                </motion.div>
                            </div>



                        </div>}</div></motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
