import Restaurantcard from "./Restaurantcard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    //useState Hook:A state variable which makes the data in sync with the ui
    const[listOfRestaurant,setListOfRestaurant]=useState([]);
    const[filteredRestaurant,setfilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("");

    
    

    

    //useEffect Hook:  which renders after the component render mostly used for fetching apis
    
    useEffect(()=>{
       
       setListOfRestaurant(resList);
       setfilteredRestaurant(resList);
       
    },[]);

    const fetchData=async()=>{
          data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=21.99740&lng=79.00110");
          const json=data?.json();
          console.log(json);
    }
    

   /* //Conditional Rendering
   if(listOfRestaurant.length===0){
        return <Shimmer/>
    }*/

    return( <div className="body">
        <div className="filter-btn">
        <div className="search">
                <input type="text"  value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                    
                }}/>
                <button onClick={()=>{
                    const filteredResto=listOfRestaurant.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setfilteredRestaurant(filteredResto);
                }}>search</button>
            </div>
            <button className="filter-button" 
             onClick={()=>{
                const filterdList=listOfRestaurant.filter(
                    (resto)=>resto.info.avgRating>4.2
                );
                setfilteredRestaurant(filterdList);

            }}>High rated restaurants</button>
           
        </div>

        <div className="restaurant-card">
        {filteredRestaurant.map((restaurants)=>(
            <Restaurantcard key={restaurants.info.id} resData={restaurants}/>
        ))}
       
        </div>
    </div>
    )
}
export default Body;