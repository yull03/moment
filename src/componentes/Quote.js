import { useEffect, useState } from "react";

const Quotes=[
    "팥 싫어!",
    "흰색, 파란색을 좋아해요.",
    "놀래키는거 정말 싫어해요.",
    "애기 도깨비에요 놀리면 삐져요.",
    "채소 싫어.",
    "칭찬을 좋아 합니다 창찬 해주면 으쓱으쓱!",
    "도화비는 꽹과리를 칠 줄 압니다",
    "집을 좋아 하지만 막상 나가면 잘 놉니다.",
    "날로 먹는것을 좋아 합니다 인생도",
    "강아지 구름이랑 살고있습니다. 구림한테 집니다",
    "도화비를 죽여도 탈은 드랍되지 않습니다. 죽이지마세요!"
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