import React, { useRef, useState } from 'react';
import S from './style';
import { RootState } from '../../../../modules/store/store';
import { useSelector } from 'react-redux';

const MemWithdrawal: React.FunctionComponent = () => {
    const { member } = useSelector((state: RootState) => state.user);
    const [ inputPwd, setInputPwd ] = useState<string>("");

    const notiList = [
        {
            notiId: 1,
            title: "회원탈퇴 시 유의사항",
            desc: `탈퇴 이후에는 동일한 계정으로 복구가 불가능합니다.
                   탈퇴 시 회원님의 모든 데이터가 삭제됩니다. 이는 계좌 정보, 퀴즈 기록 등이 포함됩니다.
                   일정 기간(예: 법적으로 요구되는 보존 기간 동안) 일부 데이터는 보존될 수 있습니다. 
                   예를 들어, 금융 거래 기록은 관련 규정에 따라 5년간 보관될 수 있습니다.`
        },
        {
            notiId: 2,
            title: "데이터 보존 정책",
            desc: `금융 거래와 관련된 정보는 탈퇴 이후에도 일정 기간 동안 보관됩니다. 이는 관계 법령에 따라 요구되는 사항입니다.
                   보존 기간 종료 후 모든 데이터는 완전히 삭제됩니다.`
        }
    ];

    const fetchWithdrawal = async () => {
        const response: Response = await fetch(`${process.env.REACT_APP_SERVER_URL}`, 
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(
                    {
                        memberNo: member.memberNo,
                        memberPassword: inputPwd
                    }
                )
            }
        );

        return response;
    };

    const handleWithdrawal = () => {
        fetchWithdrawal()
        .then((response) => {
            if(response.ok) {
                alert(`${member.memberId} 탈퇴 완료`);
            }
        })
        .catch((err) => {
            alert("탈퇴 중 문제 발생");
        })
    };

    const onChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPwd(() => e.target.value);
    };

    return (
        <S.SelectedMenuHeaderContainer>
            <S.MenuTitle>회원 탈퇴</S.MenuTitle>

            <S.WithdrawalNotiContainer>
                <S.NotiWrapper>
                    {notiList.map(({ notiId, title, desc }) => (
                        <S.NotiList key={notiId}>
                            <S.NotiTitle>{title}</S.NotiTitle>
                            <S.NotiDescription style={{ whiteSpace: "pre-line" }}>{desc}</S.NotiDescription>
                        </S.NotiList>
                    ))}
                </S.NotiWrapper>
            </S.WithdrawalNotiContainer>

            <S.GuideContainer>
                <S.GuideSpan>유의사항을 모두 확인하였으면 <strong>"현재 패스워드"</strong>를 입력하세요.</S.GuideSpan>
                <S.GuideInput type="password" onChange={onChangePwd} />
            </S.GuideContainer>

            <S.BtnContainer>
                <S.Btn onClick={handleWithdrawal}>탈퇴</S.Btn>
            </S.BtnContainer>
        </S.SelectedMenuHeaderContainer>
    );
};

export default MemWithdrawal;
