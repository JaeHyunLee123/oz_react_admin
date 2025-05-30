import React from 'react';
import { NavLink } from 'react-router';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - 잘못된 페이지 요청</h1>
      <p>이 페이지 요청은 잘못된 페이지 입니다.</p>
      <NavLink to="/admin">대시보드로 돌아가기</NavLink>
    </div>
  );
}

export default NotFound;
