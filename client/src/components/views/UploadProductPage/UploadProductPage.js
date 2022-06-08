import React, { useEffect, useState, Component } from "react";
import { Typography, Button, Form, Input } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";
import ReactDOM, { render } from "react-dom";
import Select from "react-select";
import SkeletonAvatar from "antd/lib/skeleton/Avatar";
const { TextArea } = Input;

const Beautys = [
  { key: 1, value: "기초 화장품" },
  { key: 2, value: "향수" },
  { key: 3, value: "메이크업" },
  { key: 4, value: "바디워시/샤워" },
  { key: 5, value: "헤어케어" },
  { key: 6, value: "클렌징" },
  { key: 7, value: "기타" },
];

const Fasions = [
  { key: 8, value: "스포츠" },
  { key: 9, value: "데일리/캐주얼 의류" },
  { key: 10, value: "패션잡화" },
  { key: 11, value: "아동의류" },
  { key: 12, value: "언더웨어" },
  { key: 13, value: "반려동물" },
  { key: 14, value: "생활/취미" },
  { key: 15, value: "산모용품" },
  { key: 16, value: "기타" },
];

const Ecos = [
  { key: 1, value: "친환경 패키지 사용" },
  { key: 2, value: "업사이클 제품" },
  { key: 3, value: "동물 실험 반대" },
  { key: 4, value: "화학 성분 배제" },
  { key: 5, value: "대체 가죽 사용" },
  { key: 6, value: "자연 유래 성분" },
  { key: 7, value: "공정 무역" },
  { key: 8, value: "기타" },
];

function UploadProductPage(props) {
  const [Title, setTitle] = useState(""); //브랜드명
  const [Url, setUrl] = useState(""); //웹사이트 주소
  const [Product, setProduct] = useState([]); //주요 판매 제품
  const [Eco, setEco] = useState([]); //추구하는 가치
  const [Info, setInfo] = useState(""); //상세소개

  const [Products, setProducts] = useState("");
  const [Slogans, setSlogans] = useState("");

  const [Images, setImages] = useState([]); // 이미지 업로드

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const urlChangeHandler = (event) => {
    setUrl(event.currentTarget.value);
  };
  const productChangeHandler = (event) => {
    setProduct(event.currentTarget.value);
    setProducts(event.currentTarget.value);
  };

  const ecoChangeHandler = (event) => {
    setEco(event.currentTarget.value);
    setSlogans(event.currentTarget.value);
  };

  const descriptionChangeHandler = (event) => {
    setInfo(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Title || !Url || !Product || !Eco || !Info || !Images) {
      return alert(" 모든 값을 넣어주셔야 합니다.");
    }

    const body = {
      writer: props.user.userData._id,
      title: Title,
      url: Url,
      product: Product,
      eco: Eco,
      info: Info,
      images: Images,
      products: Products,
      slogans: Slogans,
    };

    Axios.post("/api/product", body).then((response) => {
      if (response.data.success) {
        alert("브랜드가 등록되었습니다.");
        props.history.push("/");
      } else {
        alert("브랜드 등록에 실패했습니다.");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2> 브랜드 등록하기 </h2>
      </div>

      <Form onSubmit={submitHandler}>
        {/* DropZone */}

        <label>관련 사진 업로드</label>
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>브랜드명</label>
        <Input onChange={titleChangeHandler} value={Title} />
        <br />
        <br />
        <label>웹사이트 주소</label>
        <Input onChange={urlChangeHandler} value={Url} />
        <br />
        <br />
        <label>주요 판매제품</label>
        <select
          onChange={productChangeHandler}
          value={Product}
          style={{
            width: 700,
            height: 50,
            border: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <optgroup label="Cosmetics">
            {Beautys.map((item) => (
              <option key={item.key} value={item.value}>
                {" "}
                {item.value}{" "}
              </option>
            ))}
          </optgroup>
          <optgroup label="Fasions">
            {Fasions.map((item) => (
              <option key={item.key} value={item.value}>
                {" "}
                {item.value}{" "}
              </option>
            ))}
          </optgroup>
        </select>
        <br />
        <label>추구하는 가치</label>
        <select
          onChange={ecoChangeHandler}
          value={Eco}
          style={{
            width: 700,
            height: 50,
            border: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Ecos.map((item) => (
            <option key={item.key} value={item.value}>
              {" "}
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <label>상세소개</label>
        <TextArea onChange={descriptionChangeHandler} value={Info} />
        <br />
        <br />

        <br />
        <br />
        <Button type="submit" onClick={submitHandler}>
          등록하기
        </Button>
        <label> </label>
      </Form>
    </div>
  );
}

export default UploadProductPage;
