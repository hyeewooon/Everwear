import React from 'react'
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';
import {addToLike} from '../../../../_actions/user_actions';


function ProductInfo(props) {
    const dispatch = useDispatch();


    const clickHandler2 = () => {
        //iframe
        

    }

    return (
        <div>
            <Descriptions title="브랜드 소개">
                <Descriptions.Item label="홈페이지"><div style={{width:200, overflow:'hidden'}}><a href={props.detail.url}>{props.detail.url}</a></div></Descriptions.Item>
                <Descriptions.Item label="주요 판매제품"><div style={{width:200, overflow:'hidden'}}>{props.detail.product}</div></Descriptions.Item>
                <Descriptions.Item label="추구하는 가치"><div style={{width:200, overflow:'hidden'}}>{props.detail.eco}</div></Descriptions.Item>
                <Descriptions.Item label="상세소개">{props.detail.info}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button size="large" shape="round" type="disabled" onClick={clickHandler2} >
                    <a href={props.detail.url}>브랜드 바로가기</a>
                </Button>
            </div>



        </div>
    )
}

export default ProductInfo