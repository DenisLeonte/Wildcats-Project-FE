import React from "react";

interface OfferBoxText{
    cityName?:string;
    price?:string;
    fromPlace?:string;
    fromPrice?:string;
    picture:string;
}

const OfferBox: React.FC<OfferBoxText> = ({cityName,price,fromPlace,fromPrice,picture})=>{
    const images = require.context('../../../../assets/', true);
    return(
        <div>
            <div className='offerBox'>
                <div className="pictureOfferBox">
                        <img src={images("./" + picture)}/>
                </div>
                <div className='textOfferBox'> 
                    <div className="textCity">
                        {cityName}
                    </div>
                    <div className="textFromCity">
                        {fromPlace}
                    </div>
                    <div className="textPrice">
                        {price}
                    </div>
                    <div className="textFrom">
                        {fromPrice}
                    </div>

                    
                </div>
            </div>
        </div>
    );
};
export default OfferBox;