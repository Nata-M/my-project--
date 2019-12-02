import React from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Cars from './components/Cars'
import './App.css';
import './css/navbar.css';
import CreateUser from './components/CreateUser'
import UsersList from './components/UsersList'
import Mysearch from './components/Search'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {
  render () {
    return (
    <div className="App">
    <Navbar />
     <Route exact path = '/users' render = {() => <Content />} />
     <Route exact path = '/cars' render = {() => <Cars />} />
    </div>
  );
}
}
export default App;
