import React from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/List'

function App() {
  return (
    <>
      <h2 style = {{margin: "2rem"}} className="page-header">My ToDo - List</h2>
      <List />
    </>
  );
}

export default App;
