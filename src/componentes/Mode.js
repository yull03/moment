import { useEffect, useState } from "react";
import styled from "styled-components";


const Mode = () => {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setDark(saved);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("theme", dark);
        // styled.app`
        // background-image:url(./images/flash.jpg); 
        // color: #222;
        // `;
    }, [dark]);
    return (
        <div>
            <button onClick={() => { setDark(!dark) }}>
                {dark ? "라이트모드" : "다크모드"}
            </button>
            <h2>{dark ? "다크모드 입니다" : "라이트모드 입니다"}</h2>
        </div>
    );
};

export default Mode;