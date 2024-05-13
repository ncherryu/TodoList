import React from 'react';
import './App.css';
import TodoList from './Todolist';
import Clock from './Clock';
import MyWeather from './MyWeather';

function App() {
  return (
    <div className='container'>
      <TodoList></TodoList>
      <MyWeather weather='맑음'>일기예보</MyWeather>
      <Clock></Clock>
    </div>
  );
}
export default App;
