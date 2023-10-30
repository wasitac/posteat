import React from "react";
import { Content } from "antd/es/layout/layout";
import { Row } from "antd";
import GridCard from "../../commons/GridCard";
import Filter from "./Filter";
import SearchInput from "./SearchInput";
import MoreItem from "../../commons/MoreItem";

const LandingPage = () => {
  return (
    <div>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        {/* main image */}
        <div style={{ width: "85%", margin: "0 auto" }}>
          <SearchInput></SearchInput>
          <h2>식당 리스트</h2>
          <hr />
          <Filter />
          <Row gutter={[10, 10]}>
            {new Array(20).fill(null).map((_, index) => {
              return (
                <GridCard
                  LandingPage
                  storeId={index + 1}
                  // storePicturePath=
                  storeName={`storename ${index + 1}`}
                  key={index + 1}
                />
              );
            })}
          </Row>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "inlineBlock",
            margin: "20px",
          }}
        >
          <MoreItem></MoreItem>
        </div>
      </Content>
    </div>
  );
};

export default LandingPage;
