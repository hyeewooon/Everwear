import React, { useEffect, useState } from 'react'
import { Typography, Popover, Button } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './FavoritePage.css';

const { Title } = Typography;

function FavoritePage() {
    const user = useSelector(state => state.user)

    const [Favorites, setFavorites] = useState([])
    const [Loading, setLoading] = useState(true)
    let variable = { userFrom: localStorage.getItem('userId') }

    useEffect(() => {
        fetchFavoredBrand()
    }, [])

    const fetchFavoredBrand = () => {
        axios.post('/api/favorite/getFavoredBrand', variable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.favorites)
                    setFavorites(response.data.favorites)
                    setLoading(false)
                } else {
                    alert('Failed')
                }
            })
    }

    const onClickDelete = (brandId, userFrom) => {

        const variables = {
            brandId: brandId,
            userFrom: userFrom,
        }

        axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                if (response.data.success) {
                    fetchFavoredBrand()
                } else {
                    alert('Failed')
                }
            })
    }


    const renderCards = Favorites.map((favorite, index) => {


        const content = (
            <div>
                {favorite.brandImage ?
                    <img src={`http://localhost:5000/${favorite.brandImage[0]}`} />
                    : "no image"}
               
            </div>
        );

        return <tr key={index}>

            <Popover content={content} title={`${favorite.brandTitle}`}>
                <td><a href={`/product/${favorite.brandId}`}>{favorite.brandTitle}</a></td>
            </Popover>
            <td>{favorite.brandType} </td>
            <td><a href={favorite.brandURL}>{favorite.brandURL}</a> </td>
            <td><button onClick={() => onClickDelete(favorite.brandId, favorite.userFrom)}> Remove </button></td>
        </tr>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > 찜한 브랜드 </Title>
            <hr />
            {user.userData && !user.userData.isAuth ?
                <div style={{ width: '100%', fontSize: '2rem', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Please Log in first...</p>
                    <a href="/login">Go to Login page</a>
                </div>
                :
                !Loading &&
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

export default FavoritePage
