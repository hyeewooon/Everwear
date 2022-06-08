import React, {useState } from 'react'
import {Input} from 'antd';

const {Search} = Input;

function SearchFeature(props) {

    const {Search} = Input;

    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandeler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <div>
            <Search 
                placeholder="검색"
                onChange={searchHandeler}
                style={{width:200}}
                value = {SearchTerm}
            />
        </div>
    )
}

export default SearchFeature
