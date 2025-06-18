

import Mode from "./Mode";
import Quote from "./Quote";
import ToodForm from "./ToodForm";
import TOodoList from "./TOodoList";
import {useEffect, useState} from "react";




const MainPage = ({user,onLogout}) => {
    const TODOS_KEY ="todos";
    const [todos,setTodos]=useState([]);
    //처음 localstrage에 저장된 todos값이 있으면 읽어와서 설정
    useEffect(()=>{
        const saved=localStorage.getItem(TODOS_KEY); //문자열
        if(saved){
            setTodos(JSON.parse(saved)); //문자열을 객체로...
        }
    },[]);
    //todos가 변경되면 localstrage에 저장
    useEffect(()=>{

        const saved=JSON.stringify(todos); //객체를 문자열로...
        localStorage.setItem(TODOS_KEY,saved);

    },[todos]);
        const addTodo=(text)=>{
            /**
             * todo {id: 현재시간 Date.now(), text}
             */
            const newTodo={id:Date.now(), todo:text, done:false}
            setTodos([...todos,newTodo]);
    }
    const deleteTodo=(id)=>{
        const update=todos.filter((item)=>{
            return item.id !==id;
        });
        setTodos(update);
    }
    const toggleTodo=(id)=>{
        const update=todos.map((item)=>{
            return item.id === id ? {...item, done:!item.done} : item;
        });
        setTodos(update);
    }
    return (
        <div className="main">
            <h2>{user}님, 반가워요</h2>
            <button onClick={onLogout}>로그아웃</button>
            <Quote/>
            <ToodForm onAdd={addTodo}/>
            <TOodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
        </div>
    );
};

export default MainPage;