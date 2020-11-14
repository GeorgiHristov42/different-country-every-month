import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import History from './Components/History';
import Contact from './Components/Contact';
import Facts from './Components/Facts';
import Trivia from './Components/Trivia';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      historyData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getHistoryData(){
      const load = document.getElementById('siteLoading')
    $.ajax({
      url:'/historyData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({historyData: data});
        setTimeout(()=>{
          load.outerHTML='';
        },500)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getHistoryData();
  }


  render() {
    return (
      <div className="App">
        <Header data={this.state.historyData.main}/>
        <About data={this.state.historyData.main}/>
        <Trivia data={this.state.historyData.trivia}/>
        <History data={this.state.historyData.history}/>
        {/* TODO: Transform portfolio to calendar of different countries */}
        {/* <Portfolio data={this.state.historyData.portfolio}/> */}
        <Facts data={this.state.historyData.facts}/>
        <Contact data={this.state.historyData.main}/>
        <Footer data={this.state.historyData.main}/>
      </div>
    );
  }
}

export default App;
