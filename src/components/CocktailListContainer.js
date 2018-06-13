import React, { PureComponent } from 'react'
import request from 'superagent'
import CocktailList from './CocktailList'

export default class CocktailListContainer extends PureComponent {
  state = { cocktailCatagories: [] }

  componentDidMount() {
    request
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => this.updateCocktailCatagories(Object.values(response.body.drinks)))
      .catch(console.error)
  }

  updateCocktailCatagories(catagories) {
    this.setState({
      cocktailCatagories: catagories.map(x => Object.values(x)[0])
    })
  }

  render() {
    return <CocktailList cocktailCatagories={this.state.cocktailCatagories} />
  }


}
