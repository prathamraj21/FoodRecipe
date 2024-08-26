import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {

    const {mealid} = useParams();
    const [info, setInfo] = useState();

    const getInfo = async () => {
        const get = await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json()
        setInfo(jsonData.meals[0]);
    }

    if(info != ""){
        getInfo()
    }

  return (
    <div>
        { !info ? "Data Not Found" : 
        <div className='mealInfo'>
    <img src={info.strMealThumb} alt="" />
      <div className='info'>
        <h1>Recipe Details</h1>
        <button>{info.strMeal}</button>
        <h3>Instructions</h3>
        <p>{info.strInstructions}</p>
      </div>
    </div>
    }
    </div>
    
  )
}

export default MealInfo
