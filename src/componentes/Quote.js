import { useEffect, useState } from "react";

const Quotes=[
    "팥 싫어!",
    "흰색, 파란색을 좋아해요.",
    "놀래키는거 정말 싫어해요.",
    "애기 도깨비에요 놀리면 삐져요.",
    "귀여운 구름이랑 살아요!",
    "꽹과리를 칠 줄 압니다!",
    "해태탈을 좋아해요!",
    "도동이들 놀리는 재미에 사는 중",
    "날 것에 환장 합니다",
    "너무 오래 살아서 나이를 잊어 버렸습니다",
    "이쁜남자 멋진여자 최고!"
]


const Quote = () => {
    const [quotes,setQuote]=useState('');
    useEffect(()=>{
        const random=Math.floor(Math.random()*Quotes.length);
        setQuote(Quotes[random]);
    },[]);
    return (
        <div className="text">
            도화비를 소개 합니다! <br/>"{quotes}"
        </div>
    );
};

export default Quote;