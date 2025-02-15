import styled, { keyframes } from "styled-components";
import DefaultButton from "../../components/button/DefaultButton";
import { InputField } from "../../components/inputfield/style";
import { Link } from "react-router-dom";
import PlainButton from "../../components/button/PlainButton";

export const T = {
  MainContainer: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: auto;
    justify-content: center;
    align-items: center;
    padding: 20px;
  `,
  H1: styled.h2`
    text-align: left;
    margin: 0;
    margin-top: 20px;
  `,
  H5: styled.h5`
    font-size: 10px;
    text-align: center;
    margin: 0;
    color: grey;
  `,
  P: styled.p`
    font-size: 15px;
    margin: 0;
    color: grey;
  `,
  NumInput: styled.input.attrs({ type: "number" })`
    width: 80%;
    height: 30px;
    padding: 10px;
    margin: 20px 0;
    border: none;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
    /* ::placeholder {
      font-size: 400px;
    } */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-bu6yhbton {
      -webkit-appearance: none; /* Chrome, Safari, Edge에서 화살표 제거 */
      margin: 0;
    }
    /* hover랑 focus 시에도 Chrome, Safari, Edge에서 화살표 제거 */
    /* &:hover,
    &:focus {
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    } */
  `,
  TextInput: styled(InputField)``,
  Select: styled.select`
    width: 80%;
    padding: 10px;
    margin: 20px 0;
    /* border: 1ps solid #e0e0e0; */
    border: none;
    border-radius: 4px;
    /* transform: translateY(-20px); */
    transition: opacity 0.5s ease, trasform 0.5s ease;
  `,
  Button: styled(DefaultButton)`
    font-size: 15px;
    width: 80%;
    height: 35px;
    margin-bottom: 20px;
  `,
  PlainButton: styled(PlainButton)`
    margin: 0;
    font-size: 15px;
    border: none;
    color: grey;
    background-color: white;
  `,
  TransactionInfo: styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    padding: 3px 0;
  `,

  /* 첫번째 화면 */
  FirstPage: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    width: 22em;
    height: 92%;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #ffffff;
    /* 스크롤바 */
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--scrollbar-color);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: darkgray;
    }

    &::-webkit-scrollbar-track {
      border-radius: 12px;
    }
  `,
  /* 두번째 화면 */
  SecondPage: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    width: 22em;
    height: 92%;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #ffffff;
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    /* 스크롤바 */
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--scrollbar-color);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: darkgray;
    }

    &::-webkit-scrollbar-track {
      border-radius: 12px;
    }
  `,
  MyBank: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
  `,
  Balance: styled.button`
    width: 100%;
    text-align: center;
    margin: 20px 0;
  `,

  ThirdPage: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
    width: 22em;
    height: 92%;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #ffffff;
  `,
  MemoBtn: styled.button`
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: lightgray;
    color: black;
  `,

  Modal: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1000;
  `,
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  `,
  Link: styled(Link)`
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
  `,
  Divider: styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 90%;
    &:before,
    &:after {
      content: "";
      flex: 1; /* 양쪽 선이 동일한 비율로 늘어남 */
      height: 1px; /* 선의 두께 */
      background-color: var(--grey); /* 선의 색상 */
    }
    & span {
      padding: 0 10px; /* 텍스트 주변 여백 */
      color: #999; /* 텍스트 색상 */
      font-size: small;
    }
  `,

  /* Third Page */
  img: styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 50px;
  `,
};
