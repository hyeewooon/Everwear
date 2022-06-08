import React, { useEffect, useState } from 'react'
import { Typography, Popover, Button } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './AdminPage.css';

const { Title } = Typography;

function AdminPage() {
    const user = useSelector(state => state.user)
    const [Products, setProducts] = useState([])
    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {

        fetchBrand()
    
    }, [])
    
    const fetchBrand = () => {
        axios.post('/api/product/products2')
            .then(response => {
                if(response.data.success){
                    setProducts(response.data.productInfo)
                }else{
                    alert("정보를 가져오는데 실패했습니다.")
                }
            })
    }

    const onClickDelete = (_id) => {

        const variables= {
            _id: _id
        }

        axios.post('/api/product/delete', variables)
            .then(response => {
                if (response.data.success) {
                    
                } else {
                    fetchBrand()
                    alert('해당 브랜드가 삭제되었습니다.')
                }
        })
    }

    const renderCards = Products.map((product, index) => {


        const content = (
            <div>
                {product.images ?
                    <img src={`http://localhost:5000/${product.images[0]}`} />
                    : "no image"}
            </div>
        );

        return <tr key={index}>

            <Popover content={content} title={`${product.title}`}>
                <td><div class="title_"><a href={`/product/${product._id}`}>{product.title}</a></div></td>
            </Popover>
            <td>{product.product} </td>
            <td><div class="url"><a href={product.url}>{product.url}</a></div></td>
            <td><button onClick={() => onClickDelete(product._id)}> Remove </button></td>
        </tr>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > 브랜드 관리 </Title>
            <hr />
            {user.userData && !user.userData.isAuth ?
                <div style={{ width: '100%', fontSize: '2rem', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Please Log in first...</p>
                    <a href="/login">Go to Login page</a>
                </div>
                :
                <table>
                    <thead>
                        <tr>
                            <th>브랜드명</th>
                            <th>주요판매제품</th>
                            <th>웹사이트</th>
                            <td>삭제</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCards}
                    </tbody>
                </table>
            }
        </div> 
    )
}

export default AdminPage
