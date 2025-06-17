import { useEffect, useState } from "react";

const Quotes=[
    "내가 당한것에 50배 만큼 되돌려 주어야 한다",
    "복수는 가장 상대방이 가장 아끼고 소중한것을 부숴야한다",
    "시작이 반이다.",
    "티끌모아 태산",
    "감사는 받은 만큼만 표시를 해야 한다",
    "눈에는 눈 이에는 이",
    "싸움도 못해 보이는데 어디가서 내 형이라 하지 마라",
    "실패는 성공으로 가는 길이다",
    "너 자신을 알라",
    "유레카",
    "희망을 놓치 않은 사람이 더 큰 행운을 가져온다"
]


const Quote = () => {
    const [quotes,setQuote]=useState('');
    useEffect(()=>{
        const random=Math.floor(Math.random()*Quotes.length);
        setQuote(Quotes[random]);
    },[]);
    return (
        <div className="text">
            오늘의 명언: "{quotes}"
        </div>
    );
};

export default Quote;