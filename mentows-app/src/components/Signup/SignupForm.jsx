import { React, useEffect, useState } from 'react';

const SignupForm = () => {

    const [yesClicked, setYesClicked] = useState(false);
    const [noClicked, setNoClicked] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');

    const handleNextClicked = (event) => {
        event.preventDefault();
        setNextClicked(true);
    }

    const handleYesClicked = (event) => {
        event.preventDefault();
        console.log("yes clicked");
        setYesClicked(true);
    }

    const handleNoClicked = (event) => {
        event.preventDefault();
        setNoClicked(true);
    }

    const handleMonthSelect = (event) => {
        setMonth(event.target.value);
    }

    const handleDaySelect = (event) => {
        setDay(event.target.value);
    }

    const handleYearSelect = (event) => {
        setYear(event.target.value);
    }

    const handleNameEntry = (event) => {
        setName(event.target.value);
    }

    const handlePhoneEntry = (event) => {
        setPhone(event.target.value);
    }

    function formatPhoneNumber(phoneNumber) {
        // Remove all non-digit characters
        phoneNumber = phoneNumber.replace(/\D/g, '');

        // Add dashes between groups of digits
        phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

        return phoneNumber;
    }

    // useEffect(() => {
    //     setYesClicked(true);
    // }, [])

    if (nextClicked) {

        const monthSelect = month;
        const daySelect = day;
        const yearSelect = year;
        const formattedString = `${monthSelect} ${daySelect}, ${yearSelect}`;

        return (
            <>
                <div id='next-clicked'>
                    <div>
                        <title>Sign up | Mentows</title>
                        <div id='next-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                            <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>
                                <p style={{ color: 'black', fontSize: '25px', marginTop: '40px', marginBottom: '30px' }}>Is the information entered correct?</p>
                                {
                                    <p style={{ color: 'black', fontSize: '25px', display: 'block', textAlign: 'left', marginLeft: '130px' }}>
                                        <span style={{ fontWeight: 'bold' }}>Name:</span> {name}
                                        <br />
                                        <span style={{ fontWeight: 'bold' }}>Phone:</span> {formatPhoneNumber(phone)}
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

                                    <button type='button' onClick={handleYesClicked} id='yes' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '60px', borderRadius: '3%', cursor: 'pointer' }} >Yes</button>
                                    <br />
                                    <button type='button' onClick={handleNoClicked} id='no' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '10px', borderRadius: '3%', cursor: 'pointer' }}>No</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // {yesClicked ? (
    //     useEffect(() => {
    //         setYesClicked(true);
    //     })
    // ) : noClicked ? (
    //     useEffect(() => {
    //         setNoClicked(true);
    //     })
    // ) : (
    //     <>
    //     </>
    // )}

    // else {
    return (
        <>
            <form onSubmit={handleNextClicked}>
                <div id='signup-page'>
                    <div>
                        <title>Sign up | Mentows</title>
                        <div id='style-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                            <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>

                                <input type="text" name="name" placeholder='Name' id="name" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '10px' }} value={name} onChange={handleNameEntry} />
                                <br />
                                <br />
                                <input type="text" name="phone" placeholder='Phone' id="phone" style={{ height: '40px', width: '340px', fontSize: '20px' }} value={phone} onChange={handlePhoneEntry} />
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
                                            <select id='month-select' style={{ width: '120px', height: '50px', fontSize: '20px' }} value={month} onChange={handleMonthSelect}>
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
                                            <select id='day-select' style={{ width: '75px', height: '50px', fontSize: '20px' }} value={day} onChange={handleDaySelect}>
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
                                            <select id='year-select' style={{ width: '75px', height: '50px', fontSize: '20px' }} value={year} onChange={handleYearSelect}>
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
                </div>
            </form>

            {yesClicked ? (
                <>
                    {/* <form onSubmit={handleYesClicked}> */}
                    <div id='signup-page'>
                        <div>
                            <title>Sign up</title>
                            <div id='style-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                                <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                    <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>

                                    <input type="text" name="email" placeholder='Email' id="email" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '10px' }} onChange={(event) => setEmail(event.target.value)} />
                                    <br />
                                    <br />
                                    <input type="text" name="username" placeholder='Enter a username' id="username" style={{ height: '40px', width: '340px', fontSize: '20px' }} onChange={(event) => setUsername(event.target.value)} />

                                    <br />
                                    <div style={{ marginTop: '10px' }}>

                                        <button type='submit' id='next' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '50px', borderRadius: '3%', cursor: 'pointer' }} >Next</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </form> */}
                </>

            ) : noClicked ? (
                <>
                    {/* <form onSubmit={handleNoClicked}> */}
                    <div id='signup-page'>
                        <div>
                            <title>Sign up | Mentows</title>
                            <div id='style-container' style={{ height: '630px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                                <div id='container' style={{ textAlign: 'center', marginTop: '50px' }}>
                                    <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Sign up</h1>

                                    <input type="text" name="name" placeholder='Name' id="name" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '10px' }} onChange={(event) => setName(event.target.value)} />
                                    <br />
                                    <br />
                                    <input type="text" name="phone" placeholder='Phone' id="phone" style={{ height: '40px', width: '340px', fontSize: '20px' }} onChange={(event) => setPhone(event.target.value)} />
                                    <br />
                                    <br />
                                    <div style={{ marginTop: "40px" }}>
                                        <div>
                                            <label htmlFor="DOB" style={{ fontSize: '30px', color: 'black' }}>Date of Birth</label>
                                        </div>
                                        <br />
                                        <div id='selecion' style={{ display: 'inline-flex', textAlign: 'center', marginTop: '10px' }}>
                                            <div className="month" style={{ paddingRight: '10px' }}>
                                                <label style={{ fontSize: '15px', color: 'black' }}>Month</label>
                                                <br />
                                                <select id='month-select' style={{ width: '120px', height: '50px', fontSize: '20px' }} onChange={(event) => setMonth(event.target.value)}>
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
                                                <select id='day-select' style={{ width: '75px', height: '50px', fontSize: '20px' }} onChange={(event) => setDay(event.target.value)}>
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
                                                <select id='year-select' style={{ width: '75px', height: '50px', fontSize: '20px' }} onChange={(event) => setYear(event.target.value)}>
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
                    </div>
                    {/* </form> */}
                </>
            ) : (
                <>
                </>
            )}
        </>
    )
}
// }

export default SignupForm;