import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";
import fruits from './images/fruits.png';
import vegetables from './images/vegetables.png';
import staple from './images/staple.png';

import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Date.css'

let ans;

const Home = () => {
    const [startDate, setStartDate] = useState();
    const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
        <input
            value={value}
            className="example-custom-input"
            onClick={onClick}
            onChange={onChange}
            ref={ref}
        ></input>
    ));
    ans = startDate;
    return (
        <div>
            <div className="my-body">
                <h2>Aurangabad Mandi Daily Prices</h2>
                <div className='conte'>Please select the category you want to purchase</div>
                <div className='conte'>Select the Date</div>

                <DatePicker
                    placeHolderText="mm/dd/yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                    dayClassName={() => "example-datepicker-day-class"}
                    popperClassName="example-datepicker-class"
                    todayButton="TODAY"
                />

                <div>
                    <div><Link to="/fruit" style={ans ? null : { pointerEvents: "none" }}><img src={fruits} className="myimage" alt="fruits" /></Link></div>
                    <div><Link to="/vegetable" style={ans ? null : { pointerEvents: "none" }}><img src={vegetables} className="myimage" alt="vegetables" /></Link></div>
                    <div><Link to="/staple" style={ans ? null : { pointerEvents: "none" }}><img src={staple} className="myimage" alt="staples" /></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Home
export { ans };