import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import StoreDetail from "./views/StoreDetail.js/StoreDetail";
import UserInfo from "./views/UserInfo/UserInfo";
import SignUp from "./views/SignUp";

const App = () => {
  return (
    <Layout className="layout">
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 64px)" }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path={"/store/:storeId"} element={<StoreDetail />} />
            <Route path={"/userinfo/:userId"} element={<UserInfo />} />
            <Route path={"/signup"} element={<SignUp />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </Layout>
  );
};

export default App;
