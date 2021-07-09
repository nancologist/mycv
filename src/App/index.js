import './App.css';
import Template from '../layout/template';
import Main from '../components/Main';
import Side from '../components/Side';

function App() {
  const print = () => {
  };

  return (
    <div className="app">
      <Template
        main={<Main />}
        side={<Side />}
      />

      <button onClick={print}>PRINT</button>
    </div>
  );
}

export default App;
