import React from 'react'
import { Link } from 'react-router-dom'

export default function CocktailCatagoriesImages (props) {
  return (
    <div className="cocktail-catagories-images">
      <h1>Cocktail Catagories Images</h1>

      This page wil show images of a specific cocktail catagory.

      <Link to="/">Go back to the index</Link>
    </div>
  )
}
