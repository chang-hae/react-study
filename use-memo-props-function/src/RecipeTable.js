import React, { useState } from 'react';
import Recipe from './Recipe';

function RecipeTable({ alertTitle }) {

  console.log('RecipeTable re-rendering');

  const [theme, setTheme] = useState("light");
  const [coffees, setCoffees] = useState([
    {
      name: "아이스 코코넛 커피",
      description: "이국적인 코코넛과 볼드한 커피의 완벽한 조화. 한 여름 완벽한 홈캉스를 즐기기에 최고의 레시피입니다.",
      recipe: [
        "돌체구스토 머신으로 얼음 위로 아이스 아메리카노 90ml를 내려주세요.",
        "글라스에 코코넛 설탕과 갈린 얼음을 넣어주세요.",
        "얼음과 설탕 위로 코코넛 음료를 추가하세요.",
        "충분히 저어주세요.",
        "차가운 아메리카노를 추가해주세요."
      ]
    }
  ]);

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <>
      <button onClick={alertTitle}>show title</button>
      <br />
      <button onClick={toggleTheme}>{theme}</button>
      <div style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
      {
        coffees.map((coffee, index) => 
          <Recipe 
            key={index}
            name={coffee.name}
            description={coffee.description}
            recipe={coffee.recipe}
          />
        )
      }
      </div>
    </>    
  );
}

export default React.memo(RecipeTable);
