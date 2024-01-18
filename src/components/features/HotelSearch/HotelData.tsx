import React from "react";

interface HotelBoxContent{
    hotelName?:string;
    reviewName?:string;
    reviewNumber?:string;
    score?:string;
    price?:string;
    duration?:string;
    numberAdults?:string;
    bookButon?:string;
}

const HotelBox: React.FC<HotelBoxContent> = ({ hotelName,reviewName,reviewNumber,score,price,duration,numberAdults,bookButon}) =>{
    return(
        <div>
            <div className="HotelBox"> 
                    <div className="HotelName">
                        {hotelName}
                    </div>
                    <div className="reviewBox">
                        <div className="reviewClasification">
                            {reviewName}
                        </div>
                        <div className="reviewsNumber">
                            {reviewNumber}
                        </div>
                        <div className="score">
                            {score}
                        </div>
                    </div>
                    
                </div>
        </div>
    );

};

export default HotelBox;
