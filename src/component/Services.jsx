import React from 'react'
import '../style/services.scss';
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import i from '../assets/img.jpg'
export default function Services() {
  return (
    <>
      <section className='start'>
        <motion.h2 initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>Real And Natural</motion.h2>
        <motion.h1 initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>Moments You Want To Remember</motion.h1>
        <div >
          <div className="box">
            <Link to="/photography"><div style={{ height: '400px', width: '550px', backgroundImage: `url(${i})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}><div className='first'>photography</div><div className='second'></div></div></Link>
            
            <Link to="/photography"><div style={{ height: '400px', width: '550px', backgroundImage: `url(${i})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}><div className='first'>photography</div><div className='second'></div></div></Link>
            
            <Link to="/photography"><div style={{ height: '400px', width: '550px', backgroundImage: `url(${i})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}><div className='first'>photography</div><div className='second'></div></div></Link>
            
            <Link to="/photography"><div style={{ height: '400px', width: '550px', backgroundImage: `url(${i})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}><div className='first'>photography</div><div className='second'></div></div></Link>
            
          </div></div>


      </section>
      <div className='scontent'>
        <div className='sf'>
          <motion.h1 initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>Why Choose Us</motion.h1>
          <h2><i class="fa-solid fa-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium exercitationem necessitatibus ex at, aperiam iste neque molestiae molestias cupiditate?</h2>
          <h2><i class="fa-solid fa-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium exercitationem necessitatibus ex at, aperiam iste neque molestiae molestias cupiditate?</h2>
          <h2><i class="fa-solid fa-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium exercitationem necessitatibus ex at, aperiam iste neque molestiae molestias cupiditate?</h2>
        </div>
        <div className='ss'></div>
      </div>
    </>

  )
}
