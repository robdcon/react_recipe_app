import React, { Component } from 'react';
import './main.css';
import axios from '../node_modules/axios';

    

class RecipeCard extends React.Component
{

  constructor(props)
  {
    super(props)

    this.state =
    {
      nutrients : [['fat','100'],['calories','200'], ['energy','300']],
      ingredients : [['eggs','100'],['flour','200'], ['milk','300']]
    }

  }

  // Make GET request to Edamam API

  getRecipe()
  {
     var recipes = axios.get('https://api.edamam.com/search?q=chicken&app_id=' + 'f86a9d27&app_key=eafbbceae5126fcc52614412a2ae8441' + '&from=0&to=2')
     recipes.then(function(data){})
     

     console.log(this.state.ingredients)
  }

  render()
  {
    return (

      <div className="recipe-container container">

        <RecipeImage />

          <table>

            <tbody>
              <RecipeTitle title='Recipe Title'/>
              
              <NutrientList nutrients={this.state.nutrients}/>
            </tbody>

          </table>

        <Button name="Get Recipe" handleClick={(e)=>{this.getRecipe(); e.preventDefault()} }/>

      </div>
    )
  }
}



class RecipeTitle extends React.Component
{
  render()
  {

    return (

      <tr>
        <th colSpan="2">
          {this.props.title}
        </th>
      </tr>

    )
  }
}

// Recipe card image

class RecipeImage extends React.Component
{
  render()
  {
    const imageUrl = this.props.imageUrl

    return (

      <div>
        <img src={imageUrl} alt="recipe image"/>
      </div>
    )
  }
}




 

class NutrientList extends React.Component
{
  
  render()
  {
    
    return(

      this.props.nutrients.map(([key, value])=><tr><td>{key}</td><td>{value}</td></tr>)
    )
  }
}

class Button extends React.Component
{

  render()
  {
    var buttonStyle = {width:'60',height:'25'}

    return(

      <button 

        onClick = {this.props.handleClick} 
        style = {buttonStyle}
        ClassName = "btn btn-default"

      >{this.props.name}</button>
    )
  }
}

export default RecipeCard;
