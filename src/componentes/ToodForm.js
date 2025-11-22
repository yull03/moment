import { useState } from "react";

const ToodForm = ({onAdd}) => {
    const [task,setTask]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        const trimmed=task.trim();
        if(trimmed){
            //할일 텍스트를 mainpage(부모)에 전달
            onAdd(task);
            setTask('');
        }
    };
    return (
        <form onSubmit={handleSubmit}> 
            <input
            type="text"
            value={task}
                onChange={(e)=>{setTask(e.target.value)}}
                placeholder="출석날짜 입력하기"
            />
            <button type="submit" className="uptext">추가</button>
        </form>
    );
};

export default ToodForm;