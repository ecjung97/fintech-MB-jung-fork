import React, { useState } from 'react';
import S from './style';
import FormFiledComponent from './FormFiledComponent';
import { Info } from './types';
import { RootState } from '../../../../modules/store/store';
import { useSelector } from 'react-redux';

const MemInfoModiComponent: React.FunctionComponent = ():JSX.Element => {
    const member = useSelector((state: RootState) => state.user);
    const tempMemInfo = [
        {
            fieldName: "아이디",
            value: member.username
        },
        {
            fieldName: "닉네임",
            value: member.name
        },
        {
            fieldName: "이름",
            value: "나일론 머스크"
        },
        {
            fieldName: "핸드폰",
            value: "010-xxxx-xxxx"
        },
        {
            fieldName: "이메일",
            value: member.email
        },
        {
            fieldName: "주소",
            value: "미국 캘리포니아주 팔로알토"
        },
        {
            fieldName: "출생년도",
            value: { first: "1971", second: "06", third: "28" }
        }
    ];

    return (
        <S.FormField method="post">
            <S.FieldWrapper>
                <S.FieldTitle>기본 정보</S.FieldTitle>

                <S.FieldTable>
                    <tbody>
                        {tempMemInfo.map((info: Info, i: number): JSX.Element => (
                            <FormFiledComponent key={i} info={info} index={i} />
                        ))}
                    </tbody>
                </S.FieldTable>
                <S.EditBtnContainer>
                    <S.EditBtn>수정 완료</S.EditBtn>
                </S.EditBtnContainer>
            </S.FieldWrapper>
        </S.FormField>
    );
};

export default MemInfoModiComponent;