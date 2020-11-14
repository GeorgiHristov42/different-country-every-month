import React, { Component } from 'react';

class History extends Component {
  render() {

    if(this.props.data){
      var recipesmessage = this.props.data.recipesmessage;
      var culture = this.props.data.culture.map(function(culture){
        return <div key={culture.title}><h3>{culture.title}</h3>
        <p className="info">{culture.summary} </p>
        {/* <span>&bull;</span><em className="date">{culture.graduated}</em> */}
        <p>{culture.description}</p></div>
      })
      var film = this.props.data.film.map(function(film){
        return <div key={film.company}><h3>{film.company}</h3>
            <p className="info">{film.title}<span>&bull;</span> <em className="date">{film.years}</em></p>
            <p className="newline">{film.description}</p>
        </div>
      })
      var recipes = this.props.data.recipes.map(function(recipes){
      var projectImage = 'images/tech/'+recipes.image;
        return <div key={recipes.name} className="columns history-item">
                <div className="item-wrap">
                  <a href={recipes.url} title={recipes.name}>
                    <img className='recipes' alt={recipes.name} src={projectImage} />
                    <div className="overlay">
                        <div className="history-item-meta">
                      <h5>{recipes.name}</h5>
                          <p>{recipes.category}</p>
                        </div>
                    </div>
                  </a>
                  </div>
                  <h5>{recipes.name}</h5>
                  <p>{recipes.description}</p>
               </div>
      })
    }

    return (
      <section id="history">

      <div className="row culture">
         <div className="three columns header-col">
            <h1><span>Culture</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {culture}
               </div>
            </div>
         </div>
      </div>


      <div className="row film">

         <div className="three columns header-col">
            <h1><span>Films and Books</span></h1>
         </div>

         <div className="nine columns main-col">
          {film}
        </div>
    </div>



      <div className="row recipes">

         <div className="three columns header-col">
            <h1><span>Favorite Recipes</span></h1>
         </div>

         <div>
           <div className="nine columns main-col"><p className="lead center">{recipesmessage}</p></div>
				   <ul className="bgrid-quarters s-bgrid-thirds cf">
					  {recipes}
					 </ul>
			  </div>
      </div>
   </section>
    );
  }
}

export default History;
