import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import data from './data/portfolioData.json';
import ReactGA from 'react-ga';
/*import Contact from './Components/Contact';*/

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        foo: 'bar',
        resumeData: data
    };
  }

  componentDidMount() {
    ReactGA.initialize('UA-118897235-3');
    ReactGA.pageview('/');
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Education data={this.state.resumeData.experience}/>
        <Experience data={this.state.resumeData.experience}/>
        <Projects data={this.state.resumeData.experience}/>
        <Skills data={this.state.resumeData.experience}/>
        {/*<Contact data={this.state.resumeData.main}/>*/}
      </div>
    );
  }
}

export default App;
