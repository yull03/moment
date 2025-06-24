
const TOodoList = ({todos,onDelete,onToggle}) => {
    if(todos.length === 0){
        return <p className="list">할일이 없습니다</p>;
    }
    return (
        <ul className="ch-list">
            {
                todos.map((item)=>{
                    return (
                        <li key={item.id}>
                            <input 
                            type="checkbox"
                            onChange={()=>{onToggle(item.id)}}
                            checked={item.done}
                            />
                            <span 
                            style={{textDecoration: item.done ? 'line-through' : 'none'}}>
                            {item.todo}</span>
                            <button onClick={()=>{onDelete(item.id)}}>삭제</button>
                            </li>);
                })
            }
        </ul>
    );
};

export default TOodoList;