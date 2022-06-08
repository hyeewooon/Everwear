import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> 

           <img style={{width:'100%', position:"absolute", left:'0px'}} src={require('./풋터_01.png')} />
            <Icon type="footer" /></p>
        </div>
    )
}

export default Footer
