import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function DashMenu() {
  return (
    <div className="col-md dash-menu">
      <ul className="menu-list">
        <li className="button menu-item active" data="newStore">
          <i className="fa fa-plus" />
          <span className="menu-name"> New Store</span>
        </li>
        <li className="button menu-item" data="myStore">
          <i className="fa fa-store" />
          <span className="menu-name">My Stores</span>
        </li>
        <li className="button menu-item" data="myProfile">
          <i className="fas fa-id-card-alt" />
          <span className="menu-name"> My Profile</span>
        </li>
        <li className="button menu-item" data="myBookmark">
          <i className="fas fa-bookmark" />
          <span className="menu-name"> My Bookmark</span>
        </li>
        <li className="button menu-item model-open">
          <i className="fas fa-american-sign-language-interpreting" />
          <span className="menu-name">Open Model</span>
        </li>
      </ul>
    </div>
  );
}
