import './Slider.css';
import 'react-slideshow-image/dist/styles.css'
import React, { useState } from "react";
import { Fade } from "react-slideshow-image";

const CallbackExample = () => {
  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  const style = {
    textAlign: "center",
    padding: "200px 0",
    fontSize: "30px"
  };

  const properties = {
    autoplay: true,
    indicators: true,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next);
    }
  };


  
  return (
    <div class="header_slider" style={{position:'absolute',height:'450px'}}>
      <div  >
        <Fade {...properties}>
          <div >
            <img style={{width:'100%',maxheight:'445px'}} src = {require('./image_src/Header_나뭇잎_전체.png')} />
            <img style={{position:'absolute',width:'50%' ,left:'25%', top:'100px'}} src={require('./image_src/Header_글자_전체.png')}/> 
           
          </div>
          <div style={{...style, background: '#f7f1e3', width:'100%',position:'absolute',height:'445px'}}>
            <div >
                <a href="/magazine" style={{textDecoration: 'none', color:'black', position:'relative', left:'-280px', top:'-30px'}}>
                    <h3 >과대포장NO 🛍 동물실험NO 🙈<br/>
                    이달의 착한 브랜드를 소개합니다.</h3>
                </a>
                <img style={{position:'relative',width:'450px' ,top:'-230px', right:'-300px'}} src = {require('./image_src/자전거-타는-사람.png')} />
            </div>
          </div>
          {/* <div style={{...style, background: '#8fe78f'}}>
            Third Slide
          </div>
          <div style={{...style, background: '#ccc'}}>
            Fourth Slide
          </div> */}
        </Fade>
      </div>
      <p style={{fontSize: "20px", textAlign: "center"}}></p>
    </div>
  );
};

export default CallbackExample;