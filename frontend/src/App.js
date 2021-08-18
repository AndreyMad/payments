import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";


function App({match}) {
console.log('%cApp.js line:7 location.url', 'color: #007acc;', match);
const socket = io("http://localhost:80", {
  path:"/payments",
  query:{x:221231231232}
});

socket.on('message', function(data){console.log(data)});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
