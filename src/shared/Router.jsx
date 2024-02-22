import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NonAuthLayout from "../components/layout/NonAuthLayout";
import AuthLayout from "../components/layout/AuthLayout";
import NotFount from "../pages/default-set/NotFount";
import Home from "../pages/Home";
import LoginPage from "../pages/non-auth/LoginPage";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        {/* 로그인 여부 상관없는 라우터 */}
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/search" />
          <Route path="/testPage" />
        </Route>
        {/* 로그인 상태가 반드시 아니어야 하는 라우터 */}
        <Route element={<NonAuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" />
        </Route>

        {/* 로그인이 필요한 라우터 */}
        <Route element={<AuthLayout />}>
          <Route path="/user/:userId" />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFount />} />
        <Route />
      </Routes>
    </Router>
  );
}
