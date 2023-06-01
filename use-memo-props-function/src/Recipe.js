import React from 'react';

function Recipe({name, description, recipe}) {

  return (
    <>
      <h1>{name}</h1>
      <h3>{description}</h3>
      {
        recipe.map((step, index) => {
          return <p key={index}>{index + 1}. {step}</p>
        })
      }
    </>
  );
}

export default Recipe;
