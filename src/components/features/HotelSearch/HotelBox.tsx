import React from "react";

interface HotelBoxContent{
    hotelName?:string;
    reviewName?:string;
    reviewNumber?:string;
    score?:string;
    price?:string;
    duration?:string;
    numberAdults?:string;
    bookButton?:string;
}

const HotelBox: React.FC<HotelBoxContent> = ({ hotelName,reviewName,reviewNumber,score,price,duration,numberAdults,bookButton}) =>{
    return(
        <div>
            <div className="HotelBox"> 
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
                            {price}
                        </div>
                        <div className="durationTrip">
                            {duration}
                        </div>
                        <div className="numberAdults">
                            {numberAdults}
                        </div>
                    </div>
                    <button className="bookButton">
                        {bookButton}
                    </button>  
            </div>
        </div>
    );

};

export default HotelBox;
