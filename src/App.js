import logo from './logo.png';
import './App.css';
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // allows click events
import googleCalendarPlugin from "@fullcalendar/google-calendar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Расписание <code>Центральной игровой арены</code>.
        </p>
        <a
          className="App-link"
          href="https://calendar.google.com/calendar/embed?src=b491b4e810851afe89db6c0b8055320d09af3246f60b8b7004b39c6bece7164b@group.calendar.google.com&ctz=Europe/Moscow"
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


export default App;
