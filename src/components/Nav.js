import React from 'react'
import styled, { keyframes } from 'styled-components';
import LogoIcon from '../img/logo.svg';
import Wow from '../img/wow.svg';
import UserIcon from '../img/user.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {

  const navDisplay = useSelector( (state) => state.navDisplay.displayValue );

  const Header = styled.header`
    display: ${navDisplay};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    padding: 0 30px;
    background-color: #fff;
    border-bottom: solid #e8e8e8 0.1px;
  `;

  const NavContainer = styled.div`
    max-width: 1018px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
  `

  const Logo = styled.div`
    width: 70px;
    height: 100%;
    background-image: url(${LogoIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `

  const NavList = styled.nav`
    ul {
      display: flex;
      align-items: center;
      height: 100%;
      text-decoration: none;
    }
    li {
      padding: 0 20px;
      font-size: 14px;
      font-weight: 500;
    }
    a {
      padding: 20px 0;
      &:hover {
        color: #0e884f;
        transition: all 0.2s;
      }
      &:hover {
        color: #0e884f;
        transition: all 0.2s;
      }
    }
  `;

  const WowAnimation = keyframes`
    0% { 
      transform: scale(1,1) translateY(0); 
    }
    10% { 
      transform: scale(1.1,.9) translateY(0);
    }
    30% { 
      transform: scale(.9,1.1) translateY(-10px);
    }
    50% { 
      transform: scale(1,1) translateY(0);
    }
    100% {
      transform: scale(1,1) translateY(0);
    }
  `

  const WowIcon = styled.div`
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 17px;
      margin-right: 4px;
    }

    &:hover {
      img {
        animation: ${WowAnimation} 1s ease 1;
      }
    }
  `
   const User = styled.div`
    width: 24px;
    height: 100%;
    background-image: url(${UserIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
 `

  return (
    <Header>
      <NavContainer>
        <Link to='/'><Logo /></Link>
        <NavList>
          <ul>
            <li><Link to='/counseling'>요리 상담소</Link></li>
            <li><Link to='/recipe-lab'>요리법 연구소</Link></li>
            <li><Link to='/cooking'>요리해요</Link></li>
            <li><Link to='/award'>맛있는 추억을 그리다</Link></li>
            <li>
              <Link to='/event'>
                <WowIcon>
                  <span>
                    <img src={Wow}></img>
                  </span>
                  <span>이벤트</span>
                </WowIcon>
              </Link>
            </li>
          </ul>
        </NavList>
        <Link to='/login'><User /></Link>
      </NavContainer>
    </Header>
  )
}

export default Nav;