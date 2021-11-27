import './App.css';
import Template from '../layout/template';
import Main from '../components/Main/Main';
import Main2 from '../components/Main/Main2';
import Side from '../components/Side';
import Side2 from '../components/Side/Side2'

function App() {
  return (
    <div className="app">
      <Template main={<Main />} side={<Side />} />
      <Template main={<Main2 />} side={<Side2 />}/>
    </div>
  );
}

export default App;
