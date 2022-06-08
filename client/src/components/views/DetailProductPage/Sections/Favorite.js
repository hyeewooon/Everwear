import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { useSelector } from "react-redux";

function Favorite(props) {
  const user = useSelector((state) => state.user);

  const brandId = props.brandId;
  const userFrom = props.userFrom;
  const brandTitle = props.brandInfo.title;
  const brandURL = props.brandInfo.url;
  const brandType = props.brandInfo.product;
  const brandImage = props.brandInfo.images;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);
  const variables = {
    brandId: brandId,
    userFrom: userFrom,
    brandTitle: brandTitle,
    brandURL: brandURL,
    brandType: brandType,
    brandImage: brandImage,
  };

  const onClickFavorite = () => {
    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in first");
    }

    if (Favorited) {
      //when we are already subscribed
      axios
        .post("/api/favorite/removeFromFavorite", variables)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert("Failed to Remove From Favorite");
          }
        });
    } else {
      axios.post("/api/favorite/addToFavorite", variables).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert("Failed to Add To Favorite");
        }
      });
    }
  };

  useEffect(() => {
    axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.success) {
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("Failed to get Favorite Number");
      }
    });

    axios.post("/api/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.favorited);
      } else {
        alert("Failed to get Favorite Information");
      }
    });
  }, []);

  return (
    <>
      <Button onClick={onClickFavorite}>
        {" "}
        {!Favorited ? "브랜드 찜하기" : "찜한 브랜드"} {FavoriteNumber}
      </Button>
    </>
  );
}

export default Favorite;
