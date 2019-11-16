import React from "react";
import Header from "./components/Header";
import MainContent from "./components/Maincontent";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainContent />
      </>
    );
  }
}

export default App;
