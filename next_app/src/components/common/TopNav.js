import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import cookie from 'js-cookie';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { userLogout } from '../../redux/actions/userActions';
import { menuToggle } from '../../redux/actions/commonActions';

export default function TopNavbar() {
  const dispatch = useDispatch();
  const targetNode = useRef();
  const userData = useSelector((state) => state.user);
  const commonData = useSelector((state) => state.common);

  const handelClick = (e) => {
    if (targetNode.current && !targetNode.current.contains(e.target) && commonData.menuToggle) {
      dispatch(menuToggle());
    }
  };

  useEffect(() => {
    document.addEventListener('click', handelClick);

    return () => {
      document.removeEventListener('click', handelClick);
    };
  }, [commonData.menuToggle]);
  const logOut = () => {
    cookie.remove('token');
    // To trigger the event listener we save some random data into the `logout` key
    window.localStorage.setItem('logout', Date.now()); // new
    Router.push('/login');
    // localStorage.removeItem('token');
    dispatch(userLogout());
  };

  return (
    <nav className="navBar nav-top">
      <div className="container">
        <div className="title">
          <Link href="/"><a className="brand hover-animate">getJSON</a></Link>
          <div className="pageTitle" />
        </div>
        <div className="pageTitle" />
        <ul>
          <li>
            <a className="button maxOnly" href="/docs.html">
              <i className="fas fa-book" />
              {' '}
              Doc
            </a>
          </li>
          <li>
            <a className="button maxOnly" href="/dash.html">
              <i className="fas fa-laptop-code" />
              {' '}
              API
            </a>
          </li>
          {userData.logged
            ? (
              <li>
                <a className="button maxOnly" href="/explore.html">
                  <i className="fas fa-store" />
                  {' '}
                  Store
                </a>
              </li>
            )
            : <li><Link href="/login"><a className="button primary" href="/explore.html"><i className="fas fa-user" /></a></Link></li> }
          {userData.logged
                  && (
                  <li ref={targetNode}>
                    <a onClick={(e) => dispatch(menuToggle())} className={`button dropper${commonData.menuToggle ? ' active' : ''}`}><i className="fas fa-ellipsis-v" /></a>
                    <ul className={`dropdown${commonData.menuToggle ? ' visible' : ''}`}>
                      <li><a className="button">New Store</a></li>
                      <li><a className="button">My Store</a></li>
                      <li><a className="button">Profile</a></li>
                      <li><a className="button">Bookmark</a></li>
                      <li className="separate"><a onClick={(e) => logOut()} className="button">Logout</a></li>
                    </ul>
                  </li>
                  )}
        </ul>
      </div>
    </nav>
  );
}
