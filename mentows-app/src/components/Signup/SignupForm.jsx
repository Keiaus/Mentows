import { React, useEffect, useState } from 'react';
import express from 'express';
import require from 'require';
import axios from "axios";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
// import { $ } from "jquery";

// Express API 
const pool = require("mentows-app/src/server/db.js")
const app = express();
const PORT = 5173;

// This is the main component that runs all the HTML elements
const SignupForm = () => {

    // Hooks for each variable
    const [yesClicked, setYesClicked] = useState(false);
    const [noClicked] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);
    const [nextInYesClicked, setNextInYesClicked] = useState(false);
    const [yesInYesClicked, setYesInYesClicked] = useState(false);
    const [noInYesClicked] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [data, setData] = useState([]);

    // Sets the nextClicked state variable to true after next is clicked
    const handleNextClicked = (event) => {
        event.preventDefault();
        setNextClicked(true);
    }

    // Sets the yesClicked state variable to true after yes is clicked
    const handleYesClicked = (event) => {
        event.preventDefault();

        if (!yesClicked) {
            setYesClicked(true);
        }
    }

    // Sets the nextClicked state variable to false after one second allowing a back option
    const handleNoClicked = (event) => {
        event.preventDefault();
        setTimeout(() => {
            setNextClicked(false);
        }, 1);
    }

    // Sets the nextInYesClicked state variable to true
    const handleNextInYesClicked = (event) => {
        event.preventDefault();
        setNextInYesClicked(true);
        const minPasswordLength = 10;
        const minSpecialChars = 1;
        const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;

        // Counts the special characters using regex
        function countSpecialChars(str) {
            return (str.match(specialCharsRegex) || []).length;
        }

        if (pass !== pass2) {
            alert("The passwords don't match. Try again");
            setNextInYesClicked(false);
        }

        if (pass.length < minPasswordLength || pass2.length < minPasswordLength) {
            alert("Password must contain 10 or more characters");
            setNextInYesClicked(false);
        }

        if (countSpecialChars(pass) < minSpecialChars) {
            alert("Password must contain atleast one special character");
            setNextInYesClicked(false);
        }

        if (!/[A-Z]/.test(pass)) {
            alert("Password must contain atleast one uppercase character");
            setNextInYesClicked(false);
        }

        if (!/[0-9]/.test(pass)) {
            alert("Password must contain atleast one numeric value");
            setNextInYesClicked(false);
        }
    }

    // Sets the yesInYesClicked state variable to true
    const handleYesInYesClicked = (event) => {
        event.preventDefault();

        if (!yesInYesClicked) {
            setYesInYesClicked(true);
        }

    }

    // Sets the nextInYesClicked state variable to false after one second allowing a back option
    const handleNoInYesClicked = (event) => {
        event.preventDefault();
        setTimeout(() => {
            setNextInYesClicked(false);
        }, 1);

    }

    // Sets the month state varibale to the value given by the user
    const handleMonthSelect = (event) => {
        setMonth(event.target.value);
    }

    // Sets the day state varibale to the value given by the user
    const handleDaySelect = (event) => {
        setDay(event.target.value);
    }

    // Sets the year state varibale to the value given by the user
    const handleYearSelect = (event) => {
        setYear(event.target.value);
    }

    // Sets the name state varibale to the value given by the user
    const handleNameEntry = (event) => {
        setName(event.target.value);
    }

    // Sets the phone state varibale to the value given by the user
    const handlePhoneEntry = (event) => {
        setPhone(event.target.value);
    }

    // Sets the email state varibale to the value given by the user
    const handleEmailEntry = (event) => {
        setEmail(event.target.value);
    }

    // Sets the username state varibale to the value given by the user
    const handleUsernameEntry = (event) => {
        setUsername(event.target.value);
    }

    // Sets the pass state varibale to the value given by the user
    const handlePassEntry = (event) => {
        setPass(event.target.value);
    }

    // Sets the pass2 state varibale to the value given by the user
    const handlePass2Entry = (event) => {
        setPass2(event.target.value);
    }

    // Formats the phone number to be readable when displayed
    const formatPhoneNumber = (phoneNumber) => {
        // Remove all non-digit characters
        phoneNumber = phoneNumber.replace(/\D/g, '');

        // Add dashes between groups of digits
        phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

        return phoneNumber;
    }

    const getUsers = (req, res) => {
        pool.query(`select * from useraccountinfo`, (error, users) => {
            if (error)
            {
                throw error
            }
            res.status(200).json(users.row);
        })
    }

    app.get("/", (req, res) => {
        res.send("Hello world");
    })

    app.get("/Signup", getUsers);

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })

    // Runs the necessary queries
    useEffect(() => {
        axios
            .get('/Signup')
            .then(res => res.data)
            .then(data => setData(data))
    }, []);


    // // Gets the first and last name entered by the user
    // const fullName = $('#name').val().split(' ');
    // const firstName = fullName.shift();
    // const lastName = fullName.join(' ');

    // // Gets the user's date of birth
    // const birthday = `${month}/${day}/${year}`;

    // async function insertData() {
    //     try {
    //         const insertUserData = `INSERT INTO useraccountinfo (userfirstname, userlastname, userusername, useremail, userphone, userdob, userpassword) 
    //                                 VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    //         const values = [firstName, lastName, username, email, phone, birthday, pass2];
    //         const result = await C.query(insertUserData, values);
    //         console.log(result.rows);
    //     } catch (error) {
    //         console.error('Error executing query:', error);
    //     }

    //     C.end();
    // }

    // insertData();



    // Returns sign up page after next is clicked
    if (nextClicked) {

        // Assigns variables to given data from the user
        const monthSelect = month;
        const daySelect = day;
        const yearSelect = year;
        const formattedString = `${monthSelect} ${daySelect}, ${yearSelect}`;

        // Returns sign up page after yes is clicked
        if (yesClicked) {

            // Returns sign up page after the next button in yes is clicked
            if (nextInYesClicked) {

                // Returns sign up page after the no button in yes is clicked
                if (noInYesClicked) {
                    return (
                        <form onSubmit={handleNoInYesClicked}>
                            <div id='signup-page'>
                                <div>
                                    <title>Sign up</title>
                                    <div id='style-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                                        <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                            <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>

                                            <input type="text" name="email" placeholder='Email' id="email" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '10px', cursor: "text" }} value={email} onChange={handleEmailEntry} />
                                            <br />
                                            <br />
                                            <input type="text" name="username" placeholder='Enter a username' id="username" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={username} onChange={handleUsernameEntry} />
                                            <br />
                                            <br />
                                            <input type="password" name="password" placeholder='Password' id="password" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={pass} onChange={handlePassEntry} />
                                            <br />
                                            <br />
                                            <input type="password" name="password2" placeholder='Confirm password' id="password" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={pass2} onChange={handlePass2Entry} />
                                            <br />
                                            <div style={{ marginTop: '10px' }}>

                                                <button type='submit' id='next-in-yes' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '50px', borderRadius: '3%', cursor: 'pointer' }} >Next</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )
                }

                // Returns sign up page after the yes button in yes is clicked
                if (yesInYesClicked) {
                    return (
                        <form onSubmit={handleYesInYesClicked}>
                            <div id='signup-page'>
                                <div>
                                    <title>Sign up</title>
                                    <div id='style-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                                        <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                            <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>

                                            <input type="text" name="email" placeholder='Email' id="email" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '10px', cursor: "text" }} value={email} onChange={handleEmailEntry} />
                                            <br />
                                            <br />
                                            <input type="text" name="username" placeholder='Enter a username' id="username" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={username} onChange={handleUsernameEntry} />
                                            <br />
                                            <br />
                                            <input type="password" name="password" placeholder='Password' id="password" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={pass} onChange={handlePassEntry} />
                                            <br />
                                            <br />
                                            <input type="password" name="password2" placeholder='Confirm password' id="password" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={pass2} onChange={handlePass2Entry} />
                                            <br />
                                            <div style={{ marginTop: '10px' }}>

                                                <button type='submit' id='next-in-yes' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '50px', borderRadius: '3%', cursor: 'pointer' }} onClick={handlePassMatch}>Next</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )
                }

                return (
                    <>
                        <div id='next-clicked'>
                            <div>
                                <title>Sign up | Mentows</title>
                                <div id='next-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                                    <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                        <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>
                                        <h4 style={{ color: 'black', fontSize: '25px', marginTop: '40px', marginBottom: '30px' }}>Is the information entered correct?</h4>
                                        {
                                            <p style={{ color: 'black', fontSize: '25px', display: 'block', textAlign: 'left', marginLeft: '60px' }}>
                                                <span style={{ fontWeight: 'bold', wordWrap: 'break-word', width: '20px', textOverflow: 'ellipsis', overflow: 'hidden' }}>Email:</span> {email}
                                                <br />
                                                <span style={{ fontWeight: 'bold', wordWrap: 'break-word', width: '100px', textOverflow: 'ellipsis', overflow: 'hidden' }}>Username:</span> {username}
                                            </p>
                                        }

                                        <div>

                                            <button type='button' id='yes' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '60px', borderRadius: '3%', cursor: 'pointer' }} onClick={handleYesInYesClicked}>Yes</button>
                                            <br />
                                            <button type='button' id='no' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '10px', borderRadius: '3%', cursor: 'pointer' }} onClick={handleNoInYesClicked}>No</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            return (
                <>
                    <form onSubmit={handleNextInYesClicked}>
                        <div id='signup-page'>
                            <div>
                                <title>Sign up</title>
                                <div id='style-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                                    <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                        <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>

                                        <input type="text" name="email" placeholder='Email' id="email" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '10px', cursor: "text" }} value={email} onChange={handleEmailEntry} />
                                        <br />
                                        <br />
                                        <input type="text" name="username" placeholder='Enter a username' id="username" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={username} onChange={handleUsernameEntry} />
                                        <br />
                                        <br />
                                        <input type="password" name="password" placeholder='Password' id="password" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={pass} onChange={handlePassEntry} />
                                        <br />
                                        <br />
                                        <input type="password" name="password2" placeholder='Confirm password' id="password" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={pass2} onChange={handlePass2Entry} />
                                        <br />
                                        <div style={{ marginTop: '10px' }}>

                                            <button type='submit' id='next-in-yes' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '50px', borderRadius: '3%', cursor: 'pointer' }} >Next</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            )
        }

        // Returns sign up page after no is clicked
        if (noClicked) {
            return (
                <>
                    <form onSubmit={handleNoClicked}>
                        <div id='signup-page'>
                            <div>
                                <title>Sign up | Mentows</title>
                                <div id='style-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                                    <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                        <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>

                                        <input type="text" name="name" placeholder='Name' id="name" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '10px', cursor: "text" }} value={name} onChange={handleNameEntry} />
                                        <br />
                                        <br />
                                        <input type="text" name="phone" placeholder='Phone' id="phone" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={phone} onChange={handlePhoneEntry} />
                                        <br />
                                        <br />
                                        <div style={{ marginTop: "40px" }}>
                                            <div>
                                                <label htmlFor="DOB" style={{ fontSize: '30px', color: 'black' }}>Date of Birth</label>
                                            </div>
                                            <br />
                                            <div id='selection' style={{ display: 'inline-flex', textAlign: 'center', marginTop: '10px' }}>
                                                <div className="month" style={{ paddingRight: '10px' }}>
                                                    <label style={{ fontSize: '15px', color: 'black' }}>Month</label>
                                                    <br />
                                                    <select id='month-select' style={{ width: '120px', height: '50px', fontSize: '20px', cursor: "pointer" }} value={month} onChange={handleMonthSelect}>
                                                        <option value=''></option>
                                                        <option value='January'>January</option>
                                                        <option value='February'>February</option>
                                                        <option value='March'>March</option>
                                                        <option value='April'>April</option>
                                                        <option value='May'>May</option>
                                                        <option value='June'>June</option>
                                                        <option value='July'>July</option>
                                                        <option value='August'>August</option>
                                                        <option value='September'>September</option>
                                                        <option value='October'>October</option>
                                                        <option value='November'>November</option>
                                                        <option value='December'>December</option>
                                                    </select>

                                                </div>

                                                <div className="day" style={{ paddingRight: '10px' }}>
                                                    <label style={{ fontSize: '15px', color: 'black' }}>Day</label>
                                                    <br />
                                                    <select id='day-select' style={{ width: '75px', height: '50px', fontSize: '20px', cursor: "pointer" }} value={day} onChange={handleDaySelect}>
                                                        <option value=''></option>
                                                        <option value='1'>1</option>
                                                        <option value='2'>2</option>
                                                        <option value='3'>3</option>
                                                        <option value='4'>4</option>
                                                        <option value='5'>5</option>
                                                        <option value='6'>6</option>
                                                        <option value='7'>7</option>
                                                        <option value='8'>8</option>
                                                        <option value='9'>9</option>
                                                        <option value='10'>10</option>
                                                        <option value='11'>11</option>
                                                        <option value='12'>12</option>
                                                        <option value='13'>13</option>
                                                        <option value='14'>14</option>
                                                        <option value='15'>15</option>
                                                        <option value='16'>16</option>
                                                        <option value='17'>17</option>
                                                        <option value='18'>18</option>
                                                        <option value='19'>19</option>
                                                        <option value='20'>20</option>
                                                        <option value='21'>21</option>
                                                        <option value='22'>22</option>
                                                        <option value='23'>23</option>
                                                        <option value='24'>24</option>
                                                        <option value='25'>25</option>
                                                        <option value='26'>26</option>
                                                        <option value='27'>27</option>
                                                        <option value='28'>28</option>
                                                        <option value='29'>29</option>
                                                        <option value='30'>30</option>
                                                        <option value='31'>31</option>
                                                    </select>
                                                </div>

                                                <div className="year" style={{ paddingRight: '10px' }}>
                                                    <label style={{ fontSize: '15px', color: 'black' }}>Year</label>
                                                    <br />
                                                    <select id='year-select' style={{ width: '75px', height: '50px', fontSize: '20px', cursor: "pointer" }} value={year} onChange={handleYearSelect}>
                                                        <option value=''></option>
                                                        {(() => {
                                                            const date = new Date();
                                                            const currentYear = date.getFullYear();
                                                            const options = [];

                                                            for (let year = currentYear; year >= 1900; year--) {
                                                                options.push(<option key={year} value={year}>{year}</option>);
                                                            }

                                                            return options;
                                                        })()}
                                                    </select>
                                                </div>

                                            </div>
                                            <br />
                                            <div style={{ marginTop: '10px' }}>

                                                <button type='submit' id='next' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '50px', borderRadius: '3%', cursor: 'pointer' }}>Next</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            )

        }

        return (
            <>
                <div id='next-clicked'>
                    <div>
                        <title>Sign up | Mentows</title>
                        <div id='next-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                            <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>
                                <h4 style={{ color: 'black', fontSize: '25px', marginTop: '40px', marginBottom: '30px' }}>Is the information entered correct?</h4>
                                {
                                    <p style={{ color: 'black', fontSize: '25px', display: 'block', textAlign: 'left', marginLeft: '60px' }}>
                                        <span style={{ fontWeight: 'bold', maxWidth: '50%' }}>Name:</span> {name}
                                        <br />
                                        <span style={{ fontWeight: 'bold', maxWidth: '50%' }}>Phone:</span> {formatPhoneNumber(phone)}
                                        <br />
                                        <div style={{ marginRight: '20px', marginTop: '20px' }}>
                                            <span style={{ fontWeight: 'bold' }}>Date of Birth</span>
                                            <br />
                                            <div>
                                                {/* {document.getElementById("month-select").value} {document.getElementById("day-select").value} {document.getElementById("year-select").value} */}
                                                {formattedString}
                                            </div>
                                        </div>
                                    </p>
                                }

                                <div>

                                    <button type='button' id='yes' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '60px', borderRadius: '3%', cursor: 'pointer' }} onClick={handleYesClicked}>Yes</button>
                                    <br />
                                    <button type='button' id='no' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '10px', borderRadius: '3%', cursor: 'pointer' }} onClick={handleNoClicked}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <form onSubmit={handleNextClicked}>
                <div id='signup-page'>
                    <div>
                        <title>Sign up | Mentows</title>
                        <div id='style-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                            <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>

                                <input type="text" name="name" placeholder='Name' id="name" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '10px', cursor: "text" }} value={name} onChange={handleNameEntry} />
                                <br />
                                <br />
                                <input type="text" name="phone" placeholder='Phone' id="phone" style={{ height: '40px', width: '340px', fontSize: '20px', cursor: "text" }} value={phone} onChange={handlePhoneEntry} />
                                <br />
                                <br />
                                <div style={{ marginTop: "40px" }}>
                                    <div>
                                        <label htmlFor="DOB" style={{ fontSize: '30px', color: 'black' }}>Date of Birth</label>
                                    </div>
                                    <br />
                                    <div id='selection' style={{ display: 'inline-flex', textAlign: 'center', marginTop: '10px' }}>
                                        <div className="month" style={{ paddingRight: '10px' }}>
                                            <label style={{ fontSize: '15px', color: 'black' }}>Month</label>
                                            <br />
                                            <select id='month-select' style={{ width: '120px', height: '50px', fontSize: '20px', cursor: "pointer" }} value={month} onChange={handleMonthSelect}>
                                                <option value=''></option>
                                                <option value='January'>January</option>
                                                <option value='February'>February</option>
                                                <option value='March'>March</option>
                                                <option value='April'>April</option>
                                                <option value='May'>May</option>
                                                <option value='June'>June</option>
                                                <option value='July'>July</option>
                                                <option value='August'>August</option>
                                                <option value='September'>September</option>
                                                <option value='October'>October</option>
                                                <option value='November'>November</option>
                                                <option value='December'>December</option>
                                            </select>

                                        </div>

                                        <div className="day" style={{ paddingRight: '10px' }}>
                                            <label style={{ fontSize: '15px', color: 'black' }}>Day</label>
                                            <br />
                                            <select id='day-select' style={{ width: '75px', height: '50px', fontSize: '20px', cursor: "pointer" }} value={day} onChange={handleDaySelect}>
                                                <option value=''></option>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                                <option value='8'>8</option>
                                                <option value='9'>9</option>
                                                <option value='10'>10</option>
                                                <option value='11'>11</option>
                                                <option value='12'>12</option>
                                                <option value='13'>13</option>
                                                <option value='14'>14</option>
                                                <option value='15'>15</option>
                                                <option value='16'>16</option>
                                                <option value='17'>17</option>
                                                <option value='18'>18</option>
                                                <option value='19'>19</option>
                                                <option value='20'>20</option>
                                                <option value='21'>21</option>
                                                <option value='22'>22</option>
                                                <option value='23'>23</option>
                                                <option value='24'>24</option>
                                                <option value='25'>25</option>
                                                <option value='26'>26</option>
                                                <option value='27'>27</option>
                                                <option value='28'>28</option>
                                                <option value='29'>29</option>
                                                <option value='30'>30</option>
                                                <option value='31'>31</option>
                                            </select>
                                        </div>

                                        <div className="year" style={{ paddingRight: '10px' }}>
                                            <label style={{ fontSize: '15px', color: 'black' }}>Year</label>
                                            <br />
                                            <select id='year-select' style={{ width: '75px', height: '50px', fontSize: '20px', cursor: "pointer" }} value={year} onChange={handleYearSelect}>
                                                <option value=''></option>
                                                {(() => {
                                                    const date = new Date();
                                                    const currentYear = date.getFullYear();
                                                    const options = [];

                                                    for (let year = currentYear; year >= 1900; year--) {
                                                        options.push(<option key={year} value={year}>{year}</option>);
                                                    }

                                                    return options;
                                                })()}
                                            </select>
                                        </div>

                                    </div>
                                    <br />
                                    <div style={{ marginTop: '10px' }}>

                                        <button type='submit' id='next' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '50px', borderRadius: '3%', cursor: 'pointer' }} >Next</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='container my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => {
                                    <tr key={item.name}>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </form>
        </>
    )
}

export default SignupForm;