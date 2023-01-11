import '../css/InputArea.css';

function InputArea(props) {
  const { onChange, onClick } = props;

  return (
    <div className="input-container">
      <h1>Buscador de perfis do github</h1>
      <div className="search">
        <input type="text" placeholder='type a profile' onChange={onChange} className="input-search-profile" />
        <button onClick={onClick}><p>Search</p></button>
      </div>
    </div>
  )
};

export default InputArea;