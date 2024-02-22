import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("accessToken");
  const nickname = localStorage.getItem("nickname");

  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>

      {/* 로그인 여부에 따라 조건부 렌더링 */}
      {token ? (
        <p>안녕하세요, {nickname}님!</p>
      ) : (
        <Link to="/login">로그인을 해주세요.</Link>
      )}
    </div>
  );
};

export default Home;
