import React from "react";

interface HotelBoxContent{
    hotelName?:string;
    reviewName?:string;
    reviewNumber:number;
    score:number;
    price:number;
    nights:number;
    numberAdults:number;
    bookOnClick?:()=>void;
    imageUri?:string;
}

const HotelBox: React.FC<HotelBoxContent> = ({ hotelName,reviewName,reviewNumber,score,price,nights,numberAdults,bookOnClick, imageUri}) =>{
    return(
        <div>
            <div className="HotelBox"> 
                    {imageUri && <div>
                        <img src={imageUri} />
                    </div>}
                    <div className="HotelName">
                        {hotelName}
                    </div>
                    <div className="scoreReviewBox">
                        <div className="reviewBox">
                            <div className="reviewClasification">
                                {reviewName}
                            </div>
                            <div className="reviewsNumber">
                                {reviewNumber}
                            </div>
                        </div>
                        <div className="score">
                         {score}
                        </div>
                    </div>
                    <div className="priceAndDetails">
                        <div className="priceBooking">
                            {price + "€"}
                        </div>
                        <div className="durationTrip">
                            {nights + " nights"}
                        </div>
                        <div className="numberAdults">
                            {numberAdults + ' adults'}
                        </div>
                    </div>
                    <button className="bookButton" onClick={bookOnClick}>
                        Book now
                    </button>  
            </div>
        </div>
    );

};

export default HotelBox;
