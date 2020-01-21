import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar.jsx"
import Header from "./components/Header/Header.jsx"
import Profile from "./components/Profile/Profile.jsx"
import Dialogs from "./components/Dialogs/Dialogs.jsx"
import { BrowserRouter, Route } from "react-router-dom"

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
  
        <NavBar state={props.state.dialogsPage}/>
        <div className="app-wrapper-content">

          <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>} />

          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>} />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;