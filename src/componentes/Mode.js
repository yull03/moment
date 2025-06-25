
const Mode = ({ dark, toggleDark }) => {
    return (
      <div className="btn-mode">
        <button onClick={toggleDark}>
          {dark ? ' 라이트모드' : ' 다크모드'}
        </button>
        <h2>{dark ? '다크모드 입니다' : '라이트모드 입니다'}</h2>
      </div>
    );
  };
  
  export default Mode;