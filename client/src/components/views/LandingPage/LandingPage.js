import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios";
import { Icon, Col, Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Checkbox from './Sections/CheckBox'
import Checkbox2 from './Sections/CheackBox2'
import Checkbox3 from './Sections/CheckBox3'
import { cosmetic, fashion, slogan } from './Sections/Datas'
import Header from 'antd/lib/calendar/Header';
import SearchFeature from './Sections/SearchFeature';
import './LandingPage.css';
import Slider from './Slider';


function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)
    const [Filters, setFilters] = useState({
        products: [],
        slogans: []
    })
    const[SearchTerm, setSearchTerm] = useState("")

    useEffect(() => {

        let body = {
            skip: Skip,
            limit: Limit
        }

        getProducts(body)

    }, [])
    

    const getProducts = (body) => {
        axios.post('/api/product/products', body)
            .then(response => {
                if (response.data.success) {
                    if (body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    } else {
                        setProducts(response.data.productInfo)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert(" 정보를 가져오는데 실패 했습니다.")
                }
            })
    }
    
    const loadMoreHanlder = () => {

        let skip = Skip + Limit
        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters
        }

        getProducts(body)
        setSkip(skip)
    }

    const renderCards = Products.map((product, index) => {


        return <Col lg={6} md={8} xs={24} key={index}>
            <Card class="card" 
                key={index}
                cover={<a href={`/product/${product._id}`}><img style={{width:'100%'}} src={`http://localhost:5000/${product.images[0]}`} /></a>}
            >
                <Meta
                    title={product.title}
                    description={`${product.product}`}
                />
            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {

        let body = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(body)
        setSkip(0)

    }
    const showFilteredResults2 = (filters) => {

        let body = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(body)
        setSkip(0)

    }

    const handleFilters = (filters,category) => {
        const newFilters = {...Filters}

        newFilters[category] = filters


        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const handleFilters2 = (filters,category) => {
        const newFilters = {...Filters}

        newFilters[category] = filters

        console.log(newFilters)

        showFilteredResults2(newFilters)
        setFilters(newFilters)
    }

    const handleFilters3 = (filters,category) => {
        const newFilters = {...Filters}

        newFilters[category] = filters

        console.log(newFilters)

        showFilteredResults2(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)

        let body ={
            skip: 0,
            limit: Filters,
            searchTerm:newSearchTerm
        }


        setSkip(0)
        setSearchTerm(newSearchTerm)
        getProducts(body)
    }

    return (
        
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div class="header" style={{ }}>
                <Slider />
                {/* <img style={{width:'100%', position:'absolute', left:'0px', margin:'-50px 0px 50px 0px'}} src={require('./Header2.png')} /> */}
            </div>
            <div class="header" style={{ }}>
                
                <img style={{width:'100%' , height:'430px'}} src={require('./background.png')} />
            </div>
  
            {/* Filter */}
            
            <Row gutter={[16,16]}>
                <Col lg={12} xs={24}>
                    {/* CheckBox */}
                    <Checkbox list={cosmetic} handleFilters={filters => handleFilters(filters, "products")}/>
                </Col>
                <Col lg={12} xs={24}>
                    {/* CheckBox */}
                    <Checkbox2 list={fashion} handleFilters2={filters => handleFilters2(filters, "products")}/>
                </Col>
                <Col lg={12} xs={24}>
                    {/* CheckBox */}
                    <Checkbox3 list={slogan} handleFilters3={filters => handleFilters3(filters, "slogans")}/>
                </Col>
            </Row>
            

            {/* Search */}
            <div style={{display:'flex', justifyContent: 'flex-end', margin: '1rem auto'}}>
                <SearchFeature 
                    refreshFunction={updateSearchTerm}
                />
            </div>
            

            {/* Cards */}

            <Row gutter={[16, 16]}  >
                {renderCards}
            </Row>
            <br />





            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={loadMoreHanlder}>더보기</button>
            </div>
            

        </div>
    )
}

export default LandingPage
