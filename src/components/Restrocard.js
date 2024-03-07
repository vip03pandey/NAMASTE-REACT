import { CDN_URL } from "../utils/constant";
import stylecard from "../utils/stylecard";

const Restrocard=(props)=>{
    const {resData}= props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}=resData?.info
    return (
        <div className="m-4 p-4 w-[300px] hover:border border-solid border-black rounded-lg hover:cursor-pointer">
            
            <img className="rounded-lg py-px-0 h-[186.66px] w-[286px]" alt="res-logo" src={CDN_URL+ cloudinaryImageId}></img>
             <div className="font-bold py-4 text-lg"> <h3>{name}</h3></div>
             <div className="truncate py-0"><h5>{cuisines.join(",")}</h5></div>
             <div className="restcost font-semibold"><h5>{costForTwo}</h5></div>
            <h5 className="font-semibold">⭐️{avgRating} </h5>
            <h5> {resData.info.sla.deliveryTime} mins</h5>
            </div>
            
    )
};
// higher order componet
// input - restaurantCard => 
export const withPromotedlabel=(Restrocard)=>{
    return (props)=>{
        <div>
            <label>Promoted</label>
            <Restrocard {...props}/>
        </div>
    }
}
export default Restrocard