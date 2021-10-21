import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Расписание <code>Большой арены</code>.
        </p>
        <a
          className="App-link"
          href="https://calendar.google.com/calendar/embed?src=jgl24dlkvmobfa4eh6ob5qomks%40group.calendar.google.com&ctz=Europe%2FMoscow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Нажми на меня
        </a>
      </header>
    </div>
  );
}

export default App;
