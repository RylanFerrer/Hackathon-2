import React from "react";
import Header from "./components/Header";
import MainContent from "./components/Maincontent";
import {Route, Switch} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path = "/form" component = {MainContent}></Route>
          <Route path = "/" component = {MainContent}></Route>    
        </Switch>
      </>
    );
  }
}

export default App;
