import React from 'react';
import { NavLink } from 'react-router';

// 1. Outlet을 사용하여 모든 라우팅에서 보이게 해야합니다.
// 2. 각 Link를 연동하여 알맞는 주소로 전송 해야 합니다.

function Layout() {
  return (
    <div className="admin-layout">
      <header>
        <div className="logo">어드민 대시보드</div>
        <h2>Admin Page Project</h2>
      </header>
      <div className="admin-content">
        <div className="sidebar">
          <NavLink to="/admin">대시보드</NavLink>
          <NavLink to="/admin/users">사용자</NavLink>
          <NavLink to="/admin/settings">설정</NavLink>
          <NavLink to="/admin/asdjnkobsdfjkl">잘못된 페이지</NavLink>
        </div>
        <div className="main-content"></div>
      </div>
    </div>
  );
}

export default Layout;
