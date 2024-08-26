import { CDN_URL } from "../utils/constants";

const Restaurantcard=(props)=>{
    const {resData} = props;
    const{name,cuisines,avgRatingString}=resData?.info;
    return(<div className='resto-card'>
        <img className="resto-img" alt="resto-img"src={CDN_URL+resData.info.cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRatingString}</h4>
        
    </div>)
}

export default Restaurantcard;