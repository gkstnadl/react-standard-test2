import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const AuthLayout = () => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요한 페이지입니다!");
      return <Navigate to="/login" />;
    }
    setIsRender(true);
  }, []);

  if (!isRender) {
    return;
  }

  return (
    <div>
      <h1>Auth Layout</h1>
      <p>반드시 로그인이 되어있어야 하는 페이지입니다.</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
