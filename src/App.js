import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }
  getResumeData() {
    fetch(`./resumeData.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ resumeData: data });
      });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    const { main, skills, portfolio } = this.state.resumeData;
    return (
      <div className="App">
        <Header data={main} />
        <About data={main} />
        <Skills data={skills} />
        <Portfolio data={portfolio} />
        <Footer data={main} />
      </div>
    );
  }
}

export default App;
