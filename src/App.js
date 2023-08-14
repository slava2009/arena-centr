import logo from './logo.png';
import './App.css';
import React, { Component } from 'react';
import Calendar from 'react-calendar';

class App extends Component {
function App() {
  state = {
    date: new Date(),
  }
  onChange = date => this.setState({ date })
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }

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
