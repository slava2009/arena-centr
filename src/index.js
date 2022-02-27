import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bridge from '@vkontakte/vk-bridge';

// Отправляет событие нативному клиенту на инициализацию приложения
bridge.send("VKWebAppInit", {});

// Подписывается на события, отправленные нативным клиентом
bridge.subscribe((e) => console.log(e));

// Отправляет событие нативному клиенту на инициализацию приложения
bridge.send("VKWebAppInit", {});

// Проверяет, поддерживается ли событие на текущей платформе.
if (bridge.supports("VKWebAppResizeWindow")) {
    bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
