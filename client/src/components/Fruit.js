import React, { useState } from 'react';
import "./fruit.css";
import { ans } from "./Home";

const Fruit = () => {
    const [companyData, setCompanyData] = useState(new Map());

    let d = ans.getDate().toString();
    let m = ans.getMonth();
    let y = ans.getFullYear().toString();
    if (m === 0) {
        d = d + " Jan " + y;
    }
    else if (m === 1) {
        d = d + " Feb " + y;
    }
    else if (m === 2) {
        d = d + " Mar " + y;
    }
    else if (m === 3) {
        d = d + " Apr " + y;
    }
    else if (m === 4) {
        d = d + " May " + y;
    }
    else if (m === 5) {
        d = d + " Jun " + y;
    }
    else if (m === 6) {
        d = d + " Jul " + y;
    }
    else if (m === 7) {
        d = d + " Aug " + y;
    }
    else if (m === 8) {
        d = d + " Sep " + y;
    }
    else if (m === 9) {
        d = d + " Oct " + y;
    }
    else if (m === 10) {
        d = d + " Nov " + y;
    }
    else {
        d = d + " Dec " + y;
    }
    // console.log(d);

    const handleSelect = async (event) => {

        const selectedOption = event.target.value;
        console.log(selectedOption);
        const response = await fetch(`http://localhost:5000/items/${selectedOption}`);
        const data = await response.json();

        const myMap = new Map();
        for (let i = 0; i < data.length; i++) {
            if (data[i][2] === d) {
                const key1 = data[i][0];
                let matrix1 = [[data[i][3], data[i][4], data[i][7], data[i][8], data[i][10]]];
                if (data[i][7] === "") {
                    matrix1 = [[data[i][3], data[i][4], data[i][6], data[i][8], data[i][10]]];
                }
                const keyExists = myMap.has(key1);
                if (keyExists) {
                    const matrix2 = myMap.get(key1);
                    console.log(matrix2);
                    const matrix1With3 = matrix2.concat(matrix1);
                    myMap.set(key1, matrix1With3);
                }
                else {
                    myMap.set(key1, matrix1);
                }
            }
        }
        setCompanyData(myMap);
        // console.log(companyData);
    };

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
            <div className='mybody'>
                <div className='selection'>Date: {d}</div>
                <div className='selection'>
                    Select the fruit:&nbsp;&nbsp;&nbsp;&nbsp;
                    <select onChange={handleSelect}>
                        <option value="all">-- Please select an option --</option>
                        <option value="apple">Apple</option>
                        <option value="coconut">Coconut</option>
                        <option value="custard apple">Custard Apple</option>
                        <option value="dragon fruit">Dragon Fruit</option>
                        <option value="fig">Fig</option>
                        <option value="grapes">Grapes</option>
                        <option value="kiwi">Kiwi</option>
                        <option value="mango">Mango</option>
                        <option value="mausambi">Mausambi</option>
                        <option value="muskmelon">Muskmelon</option>
                        <option value="orange">Orange</option>
                        <option value="papaya">Papaya</option>
                        <option value="pear">Pear</option>
                        <option value="sapodilla">Sapodilla</option>
                        <option value="strawberry">Strawberry</option>
                        <option value="watermelon">Watermelon</option>
                    </select>
                </div>
                <div class="card-container">
                    {Array.from(companyData).map(([companyName, productDetails]) => (
                        <div className="cat_cards" style={{ paddingTop: 1 }}>
                            <div
                                style={{ height: `${Math.max(300, productDetails.length * 70)}px`, width: 400, alignItems: "center" }}
                                className="card mx-auto"
                            >
                                <div className="card-header w-100 row" style={{ height: 35, textAlign: 'left' }} key={companyName}>
                                    <p style={{ fontWeight: 700 }}>{companyName}</p>
                                </div>
                                <br />
                                <div>
                                    <button
                                        className="shop_no"
                                        style={{
                                            float: "right",
                                            backgroundColor: "#F2C652",
                                            color: "black",
                                            border: "none"
                                        }}
                                    >
                                        <i className="fas fa-store" style={{ color: "black" }} />
                                        &nbsp;&nbsp;Shop No - {productDetails[0][0]}
                                    </button>
                                </div>

                                <div className="card-body w-100">
                                    <table className="table">
                                        <tbody>
                                            {productDetails.map((details) => (
                                                <tr key={details}>
                                                    <td className="tableleft">
                                                        {details[2]}
                                                    </td>
                                                    <td className="tableright">
                                                        {details[3]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer w-100" style={{ height: 40 }}>
                                    <button className="btn" style={{ backgroundColor: "#19B44A" }}>
                                        <i className="fas fa-phone" style={{ color: "white" }} />
                                        <a href={`tel:${productDetails[0][4]}`} style={{ color: "white", textDecoration: "none" }}>
                                            &nbsp;&nbsp;Call Owner
                                        </a>
                                    </button>
                                    <button className="btn" style={{ backgroundColor: "#DADADA" }}>
                                        <i className="fas fa-location-arrow" style={{ color: "black" }} />
                                        <a
                                            href={productDetails[0][1]}
                                            style={{ color: "black", textDecoration: "none" }}
                                        >
                                            &nbsp;&nbsp;Directions
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="footer" className="mx-auto">
                    <p>Apply Now - To Avail Credit</p>
                </div>
            </div >
        </>
    )
}

export default Fruit