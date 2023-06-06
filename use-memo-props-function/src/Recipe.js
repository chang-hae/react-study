import React from 'react';

const Recipe = ({name, description, recipe}) => {
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

export default React.memo(Recipe);
