import './App.css';
import Template from './layout/template';
import Main from './components/Main.js'

function App() {
  return (
    <div className="app">
      <Template
        main={<Main />}
        side="fjksdfjkasfjk"
      />
    </div>
  );
}

export default App;
