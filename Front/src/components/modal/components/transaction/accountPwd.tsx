import ModalFunc from "../../utils/ModalFunc";
import React, { useEffect, useState } from "react";
import DefaultButton from "../../../button/DefaultButton";
import { Memo } from "./style";
import { useDispatch } from "react-redux";
import { setAccountPwd } from "../../../../modules/transaction/accountPwdSlice";

const AccountPwdModal: React.FC = () => {
  const [accountInputValue, setAccountInputValue] = useState("");
  const dispatch = useDispatch();
  const { closeModal } = ModalFunc();
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(accountInputValue);
  // };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInputValue(e.target.value);
    console.log(setAccountInputValue);
  };

  const handleButton = () => {
    if (accountInputValue === "0000") {
      dispatch(setAccountPwd(accountInputValue));
    } else {
      alert("비밀번호가 틀립니다!");
    }
    closeModal();
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleButton();
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <Memo.MainContainer>
      <h1>계좌 비밀번호 입력</h1>
      <Memo.Input placeholder="계좌 비밀번호" onChange={handleInput} />
      <DefaultButton onClick={handleButton}>입력</DefaultButton>
    </Memo.MainContainer>
  );
};

export default AccountPwdModal;
