import './App.css';
import Template from '../layout/template';
import Main from '../components/Main';
import Side from '../components/Side';

function App() {
  return (
    <div className="app">
      <Template main={<Main />} side={<Side />} />
      <Template />
    </div>
  );
}

export default App;
