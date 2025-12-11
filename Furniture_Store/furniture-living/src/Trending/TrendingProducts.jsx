import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  TrendingWrapper,
  TitleBox,
  CardContainer,
  Card,
  ArrowBtn,
  PriceRow,
  OffTag
} from "./trending-style";

import sofaImg from "../assets/sofa2.png";
import bedImg from "../assets/bed2.png";

const products = [
  {
    id: 1,
    title: "Oxford Leatherette Sofa",
    desc: "Minimalist Scandinavian frame paired with breathable..",
    price: "₹18,999",
    oldPrice: "₹25,000",
    off: "24% Off",
    img: sofaImg,
  },
  {
    id: 2,
    title: "Breeze Wooden Swing Bed",
    desc: "Handcrafted teak swing bed with premium rope detailing..",
    price: "₹25,000",
    oldPrice: "₹50,000",
    off: "50% Off",
    img: bedImg,
  },
];

const TrendingProducts = () => {
  return (
    <TrendingWrapper>
      <TitleBox>
        <h2>Trending Products</h2>
        <p>Tried, trusted, and loved</p>
      </TitleBox>

      <div style={{ position: "relative" }}>
        <ArrowBtn left>
          <FiChevronLeft />
        </ArrowBtn>

        <CardContainer>
          {products.map((p) => (
            <Card key={p.id}>
              <img src={p.img} alt="/" />

              <div className="content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <PriceRow>
                  <strong>{p.price}</strong>
                  <span className="old">{p.oldPrice}</span>
                  <OffTag>{p.off}</OffTag>
                </PriceRow>

                <button className="shop-btn">Shop Now</button>
              </div>
            </Card>
          ))}
        </CardContainer>

        <ArrowBtn>
          <FiChevronRight />
        </ArrowBtn>
      </div>
    </TrendingWrapper>
  );
};

export default TrendingProducts;
