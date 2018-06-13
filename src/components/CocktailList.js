import React, {PureComponent} from 'react'

export default class CocktailList extends PureComponent {

  renderCocktailCatagories(catagory) {
    return <li key={catagory}>{catagory}</li>
  }


  render() {
    const { cocktailCatagories } = this.props
    return (
      <div className="cocktail-list">
        <h1>Cocktail List</h1>

        { !cocktailCatagories && 'Loading...'}


        { cocktailCatagories && <ul>{ cocktailCatagories.map(this.renderCocktailCatagories) }</ul> }


      </div>
    )
  }
}
