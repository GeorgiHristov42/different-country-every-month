import React, { Component } from 'react';

class Facts extends Component {
  render() {

    if(this.props.data){
      var facts = this.props.data.facts.map(function(facts){
        return  <li key={facts.user}>
            <blockquote>
               <p>{facts.text}</p>
               {/* <cite>{facts.user}</cite> */}
            </blockquote>
         </li>
      })
    }

    return (
      <section id="facts">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               {/* <h1><span>Client Facts</span></h1> */}
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {facts}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Facts;
