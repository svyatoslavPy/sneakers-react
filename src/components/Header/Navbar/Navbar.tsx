import React, { useEffect, useState } from 'react';
import { HeaderLogo, User, Basket, Search } from './index';
import { NavLayout } from '../../layout/navigation/NavLayout';
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../../SideBar/SideBar';
import { useSelector } from 'react-redux';

export const NavBar: React.FC = () => {
  const cartDataNavBar = useSelector((state: any) => state.snikers.cartData);

  useEffect(() => {
    console.log(cartDataNavBar);
  }, []);

  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const setShowCartHandler = () => {
    setShowSideBar((showSideBar) => !showSideBar);
  };

  return (
    <NavLayout>
      <div onClick={() => navigate('/')} className="nav-logo">
        <img src={HeaderLogo} alt="logo"></img>
      </div>
      <div className="nav-links-inner">
        <div className="nav-links">
          <p onClick={() => navigate('/Men')} className="nav-links__item">
            Men
          </p>
          <p className="nav-links__item">Women</p>
          <p className="nav-links__item">Kids</p>
          <p className="nav-links__item">Upcoming</p>
        </div>
        <div className="nav-links-line"></div>
      </div>
      <div className="nav-buy">
        <img src={User} alt="user"></img>
        <img onClick={() => setShowCartHandler()} src={Basket}></img>
        <p className="nav-buy__item">{cartDataNavBar.length}</p>
        <img src={Search}></img>
      </div>
      <div className={`sidebar-container ${showSideBar ? 'sidebar-visible' : ''}`}>
        <SideBar />
      </div>
    </NavLayout>
  );
};
