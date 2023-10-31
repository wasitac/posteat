import React from "react";
import { Button, Layout, Menu } from "antd";
import { useParams } from "react-router";
import logo from "../../../img/logo.png";

const { Header } = Layout;
// TODO: 클릭해도 포커스가 안바뀜
function NavBar() {
  const { userId } = useParams();
  const items = [
    {
      label: <a href="/posteat">가게</a>,
      key: 1,
    },
    {
      // 로그인 안되어있으면 알림창 띄우고 로그인 창으로 이동하기
      label: <a href={false ? `/userinfo/${userId}` : "/login"}>내정보</a>,
      key: 2,
    },
  ];

  return (
    <div>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <a href="/posteat" style={{ marginTop: "25px", paddingRight: "30px" }}>
          <img alt="로고" src={logo} width="60" />
        </a>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
        />
        <Button style={{ position: "absolute", right: "30px" }} href="/login">
        {true?"로그인":"로그아웃"}
    </Button>
      </Header>
    </div>
  );
}

export default NavBar;
