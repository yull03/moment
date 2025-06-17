import Quote from "./Quote";


const MainPage = ({user,onLogout}) => {
    return (
        <div className="main">
            {/* 홍길동님, 반가워요 */}
            <h2>{user}님, 반가워요</h2>
            <button onClick={onLogout}>로그아웃</button>
            <Quote/>
        </div>
    );
};

export default MainPage;