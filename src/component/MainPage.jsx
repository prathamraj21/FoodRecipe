import React, { useState } from 'react'
import MealCard from './MealCard';

const MainPage = () => {

    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput = (event) => {
        setSearch(event.target.value);
    }

    const myFun = async () => {
        if(search==""){
            setMsg("Please enter something");
        }
        else{
        const get = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData = await get.json();
        setData(jsonData.meals);
        setMsg("");
        } 
    }
  
   
  return (
    <>
     <h1 className='head'>Welcome to Food Recipe App</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type="text" placeholder='Enter Dish Name' onChange={handleInput}/>
                <button onClick={myFun}>Search</button>
            </div>
            <h4>{msg}</h4>
            <div>
                <MealCard detail={data}/>
            </div>
        </div>
    </>
  )
}

export default MainPage
