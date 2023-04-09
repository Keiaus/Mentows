import React from 'react';

const SignUp = () => {
    
    return (
        <body>
        
        <div>
            <title>
                Signup
            </title>
           
                <div id='style-container' style={{height:'630px', width:'500px', backgroundColor:'whitesmoke', margin:'auto', borderRadius:'3%', marginTop:'50px'}}>
                    <div id='container' style={{textAlign:'center', marginTop:'50px'}}>
                        <h1 style={{textAlign:'center', paddingTop:'50px', color:'black'}}>Signup</h1>
                        <form id='name-form'>
                            <input type="text" name="name" placeholder='Name' id="name" style={{height:'40px', width:'340px', fontSize:'30px', marginTop:'10px'}}/>
                        </form>
                        <br />
                        <br />
                        <form id='phone-form'>
                            <input type="text" name="phone" placeholder='Phone' id="phone" style={{height:'40px', width:'340px', fontSize:'30px'}}/>
                        </form>
                        <br />
                        <br />
                            <div>
                                <label htmlFor="DOB" style={{fontSize:'30px', color:'black'}}>Date of Birth</label>
                            </div>
                        <br />
                        <div id='selecion' style={{display:'inline-flex', textAlign:'center', marginTop:'10px'}}>
                            <div class="month" style={{paddingRight:'10px'}}>
                                <label style={{fontSize:'15px', color:'black'}}>Month</label>
                                <br />
                                <form id='month-form'>
                                    <select id='month-select' style={{width:'120px', height:'50px', fontSize:'20px'}}>
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
                                </form>
                            </div>

                            <div class="day" style={{paddingRight:'10px'}}>
                                <label style={{fontSize:'15px', color:'black'}}>Day</label>
                                <br />
                                <form id='day-form'>
                                    <select id='day-select' style={{width:'75px', height:'50px', fontSize:'20px'}}>
                                        <option value=''></option>
                                        <option value='one'>1</option>
                                        <option value='two'>2</option>
                                        <option value='three'>3</option>
                                        <option value='four'>4</option>
                                        <option value='five'>5</option>
                                        <option value='six'>6</option>
                                        <option value='seven'>7</option>
                                        <option value='eight'>8</option>
                                        <option value='nine'>9</option>
                                        <option value='ten'>10</option>
                                        <option value='eleven'>11</option>
                                        <option value='twelve'>12</option>
                                        <option value='thirteen'>13</option>
                                        <option value='fourteen'>14</option>
                                        <option value='fifteen'>15</option>
                                        <option value='sixteen'>16</option>
                                        <option value='seventeen'>17</option>
                                        <option value='eighteen'>18</option>
                                        <option value='nineteen'>19</option>
                                        <option value='twenty'>20</option>
                                        <option value='twentyone'>21</option>
                                        <option value='twentytwo'>22</option>
                                        <option value='twentythree'>23</option>
                                        <option value='twentyfour'>24</option>
                                        <option value='twentyfive'>25</option>
                                        <option value='twentysix'>26</option>
                                        <option value='twentyseven'>27</option>
                                        <option value='twentyeight'>28</option>
                                        <option value='twentynine'>29</option>
                                        <option value='thirty'>30</option>
                                        <option value='thirtyone'>31</option>
                                    </select>
                                </form>
                            </div>

                            <div class="year" style={{paddingRight:'10px'}}>
                                <label style={{fontSize:'15px', color:'black'}}>Year</label>
                                <br />
                                <form id='year-form'>
                                    <select style={{width:'75px', height:'50px', fontSize:'20px'}} >
                                    <option value=''></option>
                                        {(() => {
                                            const date = new Date();
                                            const currentYear = date.getFullYear();
                                            const options = [];

                                            for (let year = currentYear; year >= 1900; year--) {
                                                options.push(<option id='year-select' key={year} value={year}>{year}</option>);
                                            }

                                            return options;
                                        })()}
                                    </select>
                                </form>
                            </div>

                        </div>
                        <br />
                            <div style={{marginTop:'10px'}}>
                                <form id='next-form'>
                                    <button id='next' style={{height:'40px', width:'150px', fontSize:'30px', marginTop:'50px', borderRadius:'3%'}}>Next</button>
                                </form>
                            </div>
                    </div>
                </div>
                
            </div>
        </body>
    );
};

export default SignUp;