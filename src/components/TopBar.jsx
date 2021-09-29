import React from "react";

function TopBar() {
  return (
    <div className="top-bar">
      <div></div>
      <div className="user">
        <div className="avatar">
          <img
            src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black-thumbnail.png"
            alt=""
          />
        </div>
        <span className="name">Họ và tên</span>
      </div>
    </div>
  );
}

export default TopBar;
