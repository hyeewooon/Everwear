const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: { //작성자
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: { //브랜드명
        type: String,
        maxlength: 50
    },
    url: { //url
        type: String
    },
    product: { //주요판매제품
        type: Array,
        default: []
    },
    eco: { //slogan
        type: Array,
        default: []
    },
    info: {  //상세소개
        type: String,
    },
    images: {
        type: Array,
        default: []
    },
    views: {
        type: Number,
        default: 0
    },
    products: {
        type: String
    },
    slogans: {
        type: String
    }

}, { timestamps: true })

productSchema.index({ //이름과 주요 판매 제품에 대한 검색 
    title: 'text',
    product: 'text'
}, {
    weights: { //중요도 설정
        title: 5,
        description: 1
    }
})


const Product = mongoose.model('Product', productSchema);

module.exports = { Product }