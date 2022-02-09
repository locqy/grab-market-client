import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(function () {
    axios
      .get(
        `https://5b4d2afa-37a4-4962-847c-d93ae1def3a9.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받아오고 있습니다..</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imgURL} />
      </div>

      <div id="profile-box">
        <img src={"/images/icons/avatar.png"} />
        <span>{product.seller}</span>
      </div>

      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022년 2월 9일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
