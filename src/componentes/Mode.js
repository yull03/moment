
const Mode = ({ dark, toggleDark }) => {
    return (
      <div className="btn-mode">
        <button onClick={toggleDark}>
          {dark ? ' 라이트 모드' : ' 다크 모드'}
        </button>
        <h2>{dark ? 'Comming Soon':'Comming Soon'}</h2>
      </div>
    );
  };
  
  export default Mode;