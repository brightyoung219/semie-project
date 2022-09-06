import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeDisplay } from '../store';
import Sempio from '../img/sempio.svg';
import Semie from '../img/logo.svg';
import Kakao from '../img/kakao-talk.svg'

function Login() {

  const navDisplay = useSelector((state) => state.navDisplay.displayValue);
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeDisplay('none'));
  }, []);

  const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 84px;
    padding: 0 30px;
    background-color: #fff;
`;

  const NavContainer = styled.div`
    height: 100%;
    max-width: 1360px;
    position: relative;
  `

  const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 100%;
    .sempio {
      width: 89px;
      height: 35px;
      background-image: url(${Sempio});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .semie {
      width: 78px;
      height: 60px;
      background-image: url(${Semie});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .x {
      font-size: 30px;
      font-weight: 100;
      padding: 0 20px;
      transform: scaleY(0.7) translateY(3px);
      opacity: 50%;
    }
  `

  const NavList = styled.div`
    position: absolute;
    right: 0px;
    top: 45%;
    span {
      padding: 0 20px;
      position: relative;
      cursor: pointer;
      &:hover::after {
        transform: scaleX(1);
      }
      &::after {
        content: "";
        position: absolute;
        border-bottom: 1px solid #737373;
        transform: scaleX(0);
        bottom: -3px;
        left: 20px;
        right: 20px;
        transition: all 0.2s;
      }
    }
    .bar::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 80%;
      border-left: 1px solid #737373;
      transform: translateY(-10%);
    }
    span:last-child {
      padding-right: 0px;
      &::after {
        right: 0px;
      }
    }
  `

  const MainContainer = styled.main`
    width: 100%;
    padding-top: 165px;
    padding-bottom: 80px;
    background-color: #f5f5f5;

    .input-container {
      padding: 60px 225px;
      background-color: #fff;
      text-align: center;
      max-width: 900px;
      margin: auto;
      h1 {
        font-size: 36px;
      }
      form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
      }
      input {
        margin-bottom: 10px;
        width: 100%;
        height: 48px;
        border: 1px solid #ccc;
        padding: 10px 20px;
        font-size: 16px;
        &:focus {
          outline: none;
        }
        &:hover {
          border: 1px solid #424242;
          transition: all 0.5s;
        }
      }
      .login-btn {
        width: 100%;
        height: 48px;
        margin: 10px 0;
        border: none;
        border-radius: 8px;
        background-color: #424242;
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        color: #fff;
        &:hover {
          background-color: #333;
          transition: all 0.3s;
        }
      }
      .login-info {
        font-size: 14px;
        color: #424242;
        line-height: 150%;
        word-break: keep-all;
        text-align: left;
      }
      .login-guide {
        display: flex;
        justify-content: center;
        margin: auto;
        margin: 40px 0;
        font-size: 14px;
        color: #424242;
        div {
          margin: 0 15px;
          position: relative;
        }
        .find::before {
          content: "";
          position: absolute;
          left: -15px;
          bottom: 0;
          height: 80%;
          border-left: 1px solid #ccc;
          transform: translateY(-16%);
        }
      }
      h2 {
        position: relative;
        margin-top: 50px;
        font-size: 14px;
        color: #737373;
        text-align: center;
        &::before {
          content: "";
          position: absolute;
          left: 0px;
          right: 320px;
          bottom: 7px;
          border-bottom: 1px solid #ccc;
        }
        &::after {
          content: "";
          position: absolute;
          left: 320px;
          right: 0px;
          bottom: 7px;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  `

  const Btn = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 30px;
    border: none;
    border-radius: 8px;
    background-color: #fee500;;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #424242;
    cursor: pointer;
  `



  return (
    <>
      <Header>
        <NavContainer>
          <LogoContainer>
            <div className='sempio' />
            <div className='x'>X</div>
            <div className='semie' />
          </LogoContainer>
          <NavList>
            <span>로그인</span>
            <span className='bar'>회원가입</span>
            <span className='bar'>개인정보 수정</span>
          </NavList>
        </NavContainer>
      </Header>
      <MainContainer>
        <div className='input-container'>
          <h1>로그인</h1>
          <form>
            <input type='text' placeholder='아이디'></input>
            <input type='password' placeholder='비밀번호'></input>
            <button className='login-btn' button='submit'>로그인</button>
          </form>
          <p className='login-info'>
            기존에 ID(아이디)로 가입하신 회원님은 ID로 로그인해주세요. ID로 가입하셨던 회원님도 개인정보 수정 페이지에서 이메일 인증 후에 이메일로도 로그인이 가능합니다.
          </p>
          <div className='login-guide'>
            <div>회원가입</div>
            <div className='find'>로그인 정보 찾기</div>
          </div>
          <h2>소셜미디어 계정으로 로그인</h2>
          <Btn>카카오 계정으로 로그인</Btn>
        </div>
      </MainContainer>
    </>
  )
}

export default Login;