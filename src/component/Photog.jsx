import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import i from '../assets/img.jpg'
import i2 from '../assets/img2.jpg'
import i3 from '../assets/i3.jpeg'
import '../style/photog.scss'
export default function Photog() {
    const images = [
        "https://picsum.photos/200/300?image=1050",
        "https://picsum.photos/300/300?image=203",
        "https://picsum.photos/200/300?image=1052",
        "https://picsum.photos/300/300?image=206",
        "https://picsum.photos/200/300?image=1051",
        "https://picsum.photos/300/300?image=206",
        i,
        i2,
        i3
    ]
    const [data,setdata]=useState({img:'',i:0,a:0})
    const viewimage=(image,i)=>{
        const a=1;
        setdata({image,i,a});
        // console.log(data);
        document.getElementById('phom').classList.add('phom');
    
    }
    const imgactionp=()=>{
        let c=data.i;
        c=c-1;
        if(c<0){
            c=images.length-1;
        }
        const a=1;
        const im=images[c].img
        setdata({img:images[c],i:c,a:a});
        
    }
    const imgactionn=()=>{
        let c=data.i;
        c=c+1;
        if(c>images.length-1){
            c=0;
        }
        const a=1;
        const im=images[c].img
        setdata({img:images[c],i:c,a:a});
    }
    
    const closed=()=>{
        
        document.getElementById('phom').classList.remove('phom')
        setdata({img:'',i:0,a:0})
        
    }
    return (
        <>
        {
            data.a?
            
            <div style={{width:'100%',height:'100vh',background:'black',position:'fixed',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',zIndex:100000000}}>
                <button  onClick={closed} style={{position:'absolute',top:0,right:0,fontSize:'50px',background:'transparent',  border:'none'}}><i style={{color:'yellow',cursor:'pointer',}} class="fa-solid fa-xmark"></i></button>
                <button onClick={imgactionp} style={{position:'absolute',top:"40%",left:"10%",fontSize:'50px',background:'transparent',  border:'none'}}><i style={{color:'yellow',cursor:'pointer',}} class="fa-solid fa-arrow-left"></i></button>
                <img src={images[data.i]} alt='this is image' style={{
                    width:'auto',
                    maxWidth:'90%',
                    maxHeight:'90%',

                }}/>
                <button style={{position:'absolute',top:"40%",right:"10%",fontSize:'50px',background:'transparent',  border:'none'}} onClick={imgactionn}><i style={{color:'yellow',cursor:'pointer',}} class="fa-solid fa-arrow-right"></i></button>
            </div>:<h1></h1>
        }
        <div  id='phom'>
            {/* <div> <div>photography</div></div> */}
            <div className='ahero'><div><h1>Photography</h1> </div></div>
            <section style={{padding:'30px'}}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img className='phomimg'
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" ,cursor:'pointer'}}
                            alt=""
                            onClick={()=>{viewimage(image,i)}}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </section>
            
        </div>
        </>
    )
}
