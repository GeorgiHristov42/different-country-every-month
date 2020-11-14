import React, { Component } from 'react';

class Trivia extends Component {
  render() {

    if(this.props.data){
      var trivia = this.props.data.trivia.map(function(trivia){
        return  <li key={trivia.user}>
            <blockquote>
               <p>{trivia.text}</p>
               {/* <cite>{trivia.user}</cite> */}
            </blockquote>
         </li>
      })
    }

    return (
      <section id="trivia">
      <div className="text-container">
         <div className="row">
{/* 
            <div className="two columns header-col">
               <h1><span>Trivia</span></h1>
            </div> */}

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {trivia}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Trivia;
