import { CDN_URL } from "../utils/constant";
import stylecard from "../utils/stylecard";

const Restrocard=(props)=>{
    const {resData}= props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,}=resData?.info
    return (
        <div className="res-card "  style={stylecard}>
            <img className="res-img" alt="res-logo" src={CDN_URL}></img>
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}⭐️</h5>
            <h5> {resData.info.sla.deliveryTime} mins</h5>
            </div>
    )
}
export default Restrocard