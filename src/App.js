import { useEffect, useState } from "react";
import "./App.scss";
import Time from "./componentes/Time";
import MainPage from "./componentes/MainPage";
import LoginForm from "./componentes/LoginForm";
import Weather from "./componentes/Weather";
import Mode from "./componentes/Mode";

// import bgImg from "./images/3.jpg";


const App = () => {
  const USER_KEY="user_name";
  const [user,setUser]=useState('');
  //처음 시작하자마자 user_name을 읽어 와야 함
    useEffect(()=>{
      const saved=localStorage.getItem(USER_KEY);
      if(saved){
        setUser(saved);
      }
    },[]);
  const handleLogin=(data)=>{
    localStorage.setItem(USER_KEY,data);
    setUser(data);
  }
      const handleLogout=()=>{
        localStorage.removeItem(USER_KEY);
      setUser('');
    }

  return (
    <div className="app">
      <Mode/>
      {/* <img src="./images/1.jpg" alt="이미지1"/> */}
      {/* <img src={`${process.env.PUBLIC_URL}/images/1.jpg`} alt="이미지1"/> */}
      {/* <img src={bgImg} alt="이미지2"/> */}
      <Weather/>
      <Time/>
      {
        user ? (
          <MainPage user={user} onLogout={handleLogout}/>
        ) :(
          <LoginForm onLogin={handleLogin}/>
        )
      }
      
      
    </div>
  );
};

export default App;
