import logo from './logo.svg';
import './App.css';
import Demo from './component/useEffect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Demo a={'xuejian'} />
      </header>
    </div>
  );
}

export default App;
