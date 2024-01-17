import { useCostOfLivingContext } from "../../../contexts/CostOfLivingContext/CostOfLivingContextManager";
import Navbar from "../Navbar/Navbar";
import "../../../styles/CostOfLiving.css";

const CostOfLivingPage: React.FC = () => {
    const { country, updateCountry } = useCostOfLivingContext();

    return (
        <div className="costOfLivingPage">
            <Navbar/>
            <h1 className="COLTitle">Cost of Living for {country}</h1>
            <div className="flexCOLgrid">
                <div className="flexCOLrow" style={{height:"352px"}}>
                    <div className="COLBOX1 COLBOX">
                        <h1>Markets</h1>
                        <div className="subtitle">
                            <p>All you need basket for 1 week</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M11 4.74488H8.605L6.415 1.46488C6.32 1.32488 6.16 1.25488 6 1.25488C5.84 1.25488 5.68 1.32488 5.585 1.46988L3.395 4.74488H1C0.725 4.74488 0.5 4.96988 0.5 5.24488C0.5 5.28988 0.505 5.33488 0.52 5.37988L1.79 10.0149C1.905 10.4349 2.29 10.7449 2.75 10.7449H9.25C9.71 10.7449 10.095 10.4349 10.215 10.0149L11.485 5.37988L11.5 5.24488C11.5 4.96988 11.275 4.74488 11 4.74488ZM6 2.64488L7.4 4.74488H4.6L6 2.64488ZM9.25 9.74488L2.755 9.74988L1.655 5.74488H10.35L9.25 9.74488ZM6 6.74488C5.45 6.74488 5 7.19488 5 7.74488C5 8.29488 5.45 8.74488 6 8.74488C6.55 8.74488 7 8.29488 7 7.74488C7 7.19488 6.55 6.74488 6 6.74488Z" fill="#004006"/>
                            </svg>
                        </div>
                        <div className="list">
                            <ul>
                                <li><div className="listElem"><p>Milk(1L)</p><p>5$</p></div></li>
                                <li><div className="listElem"><p>Bread</p><p>3$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                                <li><div className="listElem"><p>Rice(1Kg)</p><p>6$</p></div></li>
                            </ul>
                        </div>
                        <hr className="listLine"/>
                        <div style={{textAlign:"right", marginRight:"30px", fontSize:"14px"}}>
                            <p style={{textAlign:"right"}}>Total: 100$</p>
                        </div>
                    </div>
                    <div className="COLBOX2 COLBOX">
                        <h1>Utilities&Rent</h1>
                        <div className="subtitle">
                            <p>Monthly</p>
                        </div>
                        <div className="list">
                            <ul>
                                <li><div><div className="listElem"><p>Basic</p><p>622.25$</p></div>
                                <p className="subList">Electricity, Heating, Cooling, Water, Garbage</p></div></li>
                                <li><div><div className="listElem"><p>Mobile</p><p>622.25$</p></div>
                                <p className="subList">Phone Monthly Plan with Calls and 10GB+ Data</p></div></li>
                                <li><div><div className="listElem"><p>Internet</p><p>622.25$</p></div>
                                <p className="subList">60 Mbps or More, Unlimited Data, Cable/ADS</p></div></li>
                                <li><div><div className="listElem"><p>Apartment</p><p>622.25$</p></div>
                                <p className="subList">1 bedroom CityCenter</p></div></li>
                                <li><div><div className="listElem"><p>Apartment</p><p>622.25$</p></div>
                                <p className="subList">1 bedroom OutsideCenter</p></div></li>
                                <li><div><div className="listElem"><p>Apartment</p><p>622.25$</p></div>
                                <p className="subList">3 bedroom CityCenter</p></div></li>
                                <li><div><div className="listElem"><p>Apartment</p><p>622.25$</p></div>
                                <p className="subList">3 bedroom OutsideCenter</p></div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="COLBOX3 COLBOX">
                        <h1>Transportation</h1>
                        <div className="list">
                            <ul>
                                <li><div className="listElem"><p>One-Way Ticket</p><p>2$</p></div></li>
                                <li><div className="listElem"><p>Monthly Pass</p><p>2$</p></div></li>
                                <li><div className="listElem"><p>Taxi Start</p><p>2$</p></div></li>
                                <li><div className="listElem"><p>Taxi 1km</p><p>2$</p></div></li>
                                <li><div className="listElem"><p>Taxi 1h</p><p>2$</p></div></li>
                                <li><div className="listElem"><p>Gasoline 1l</p><p>2$</p></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flexCOLrow" style = {{gap:"62px",height:"328px"}}>
                    <div className="COLBOX4 COLBOX">
                        <h1>Restaurants</h1>
                        <div className="subtitle">
                            <p>Lunch timeeee</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M8 3V7H9.5V11H10.5V1C9.12 1 8 2.12 8 3ZM5.5 4.5H4.5V1H3.5V4.5H2.5V1H1.5V4.5C1.5 5.605 2.395 6.5 3.5 6.5V11H4.5V6.5C5.605 6.5 6.5 5.605 6.5 4.5V1H5.5V4.5Z" fill="#004006"/>
                            </svg>
                        </div>
                        <div className="list">
                            <ul>
                                <li><div className="listElem"><p>Meal, Inexpensive Restaurant</p><p>45$</p></div></li>
                                <li><div className="listElem"><p>Meal for 2 People, Mid-range Restaurant, Three-course</p><p>100$</p></div></li>
                                <li><div className="listElem"><p>McMeal at McDonalds (or Equivalent Combo Meal)</p><p>12$</p></div></li>
                                <li><div className="listElem"><p>Domestic Beer (0.5 liter draught)</p><p>12$</p></div></li>
                                <li><div className="listElem"><p>Imported Beer (0.33 liter bottle)</p><p>12$</p></div></li>
                                <li><div className="listElem"><p>Cappuccino (regular)</p><p>12$</p></div></li>
                                <li><div className="listElem"><p>Coke/Pepsi (0.33 liter bottle)</p><p>12$</p></div></li>
                                <li><div className="listElem"><p>Water (0.33 liter bottle)</p><p>12$</p></div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flexCOLGrid2">
                        <div className="flexCOLrow1">
                            <div className="COLBOX5 COLBOX">
                                <div className="subtitle">
                                    <h1>Sport&Leisure</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.5 5.75C16.6 5.75 17.5 4.85 17.5 3.75C17.5 2.65 16.6 1.75 15.5 1.75C14.4 1.75 13.5 2.65 13.5 3.75C13.5 4.85 14.4 5.75 15.5 5.75ZM5 12.25C2.2 12.25 0 14.45 0 17.25C0 20.05 2.2 22.25 5 22.25C7.8 22.25 10 20.05 10 17.25C10 14.45 7.8 12.25 5 12.25ZM5 20.75C3.1 20.75 1.5 19.15 1.5 17.25C1.5 15.35 3.1 13.75 5 13.75C6.9 13.75 8.5 15.35 8.5 17.25C8.5 19.15 6.9 20.75 5 20.75ZM10.8 10.75L13.2 8.35L14 9.15C15.3 10.45 17 11.25 19.1 11.25V9.25C17.6 9.25 16.4 8.65 15.5 7.75L13.6 5.85C13.1 5.45 12.6 5.25 12 5.25C11.4 5.25 10.9 5.45 10.6 5.85L7.8 8.65C7.4 9.05 7.2 9.55 7.2 10.05C7.2 10.65 7.4 11.15 7.8 11.45L11 14.25V19.25H13V13.05L10.8 10.75ZM19 12.25C16.2 12.25 14 14.45 14 17.25C14 20.05 16.2 22.25 19 22.25C21.8 22.25 24 20.05 24 17.25C24 14.45 21.8 12.25 19 12.25ZM19 20.75C17.1 20.75 15.5 19.15 15.5 17.25C15.5 15.35 17.1 13.75 19 13.75C20.9 13.75 22.5 15.35 22.5 17.25C22.5 19.15 20.9 20.75 19 20.75Z" fill="#004006"/>
                                    </svg>
                                </div>
                                <div className="list">
                                    <ul>
                                        <li><div className="listElem"><p>Fitness Club, Monthly Fee for 1 Adult</p><p>100$</p></div></li>
                                        <li><div className="listElem"><p>Tennis Court Rent (1 Hour on Weekend)</p><p>100$</p></div></li>
                                        <li><div className="listElem"><p>Cinema, International Release, 1 Seat</p><p>100$</p></div></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="COLBOX5 COLBOX">
                                <div className="subtitle">
                                    <h1>Childcare</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M13.5 2V10H21.5C21.5 5.58 17.92 2 13.5 2ZM15.5 8V4.34C17.2 4.94 18.55 6.29 19.16 8H15.5ZM6.94 11L5.99 9H2.5V11H4.72C4.72 11 6.61 15.07 6.84 15.42C5.74 16.01 5 17.17 5 18.5C5 20.43 6.57 22 8.5 22C10.26 22 11.72 20.7 11.96 19H14.04C14.28 20.7 15.74 22 17.5 22C19.43 22 21 20.43 21 18.5C21 17.46 20.54 16.53 19.82 15.89C20.87 14.54 21.5 12.84 21.5 11H6.94ZM8.5 20C7.67 20 7 19.33 7 18.5C7 17.67 7.67 17 8.5 17C9.33 17 10 17.67 10 18.5C10 19.33 9.33 20 8.5 20ZM17.5 20C16.67 20 16 19.33 16 18.5C16 17.67 16.67 17 17.5 17C18.33 17 19 17.67 19 18.5C19 19.33 18.33 20 17.5 20ZM18.24 14.66L17.95 15.03C17.81 15.01 17.65 15 17.5 15C16.11 15 14.9 15.82 14.34 17H11.66C11.16 15.96 10.16 15.2 8.98 15.03L8.54 14.36C8.44 14.19 8.2 13.67 7.87 13H19.16C18.95 13.59 18.64 14.15 18.24 14.66Z" fill="#004006"/>
                                    </svg>
                                </div>
                                <div className="list">
                                    <ul>
                                        <li><div className="listElem"><p>Preschool (or Kindergarten) Monthly for 1 Child</p><p>100$</p></div></li>
                                        <li><div className="listElem"><p>International Primary School, Yearly for 1 Child</p><p>100$</p></div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flexCOLrow1"> 
                            <div className="COLBOX5 COLBOX">
                                <div className="subtitle">
                                    <h1>Clothing&Shoes</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.6 18.2016L13 11.7516V10.8416C14.65 10.3516 15.8 8.67162 15.43 6.79162C15.17 5.48162 14.13 4.39162 12.82 4.09162C10.54 3.57162 8.50002 5.30162 8.50002 7.50162H10.5C10.5 6.67162 11.17 6.00162 12 6.00162C12.83 6.00162 13.5 6.67162 13.5 7.50162C13.5 8.34162 12.81 9.02162 11.97 9.00162C11.43 8.99162 11 9.45162 11 9.99162V11.7516L2.40002 18.2016C1.63002 18.7816 2.04002 20.0016 3.00002 20.0016H21C21.96 20.0016 22.37 18.7816 21.6 18.2016ZM6.00002 18.0016L12 13.5016L18 18.0016H6.00002Z" fill="#004006"/>
                                    </svg>
                                </div>
                                <div className="list">
                                    <ul>
                                        <li><div className="listElem"><p>1 Pair of Jeans (Levis 501 Or Similar)</p><p>100$</p></div></li>
                                        <li><div className="listElem"><p>1 Summer Dress in a Chain Store (Zara, H&M, ...)</p><p>100$</p></div></li>
                                        <li><div className="listElem"><p>1 Pair of Nike Running Shoes (Mid-Range)</p><p>100$</p></div></li>
                                        <li><div className="listElem"><p>1 Pair of Men Leather Business Shoes</p><p>100$</p></div></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="COLBOX5 COLBOX">
                                <div className="subtitle">
                                    <h1>Salaries&Financing</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="#004006"/>
                                    </svg>
                                </div>
                                <div className="list">
                                    <ul>
                                        <li><div className="listElem"><p>Average Monthly Net Salary (After Tax)</p><p>100$</p></div></li>
                                        <li><div className="listElem"><p>Mortgage Interest Rate in Percentages (%), Yearly,
 for 20 Years Fixed-Rate</p><p>100$</p></div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CostOfLivingPage;