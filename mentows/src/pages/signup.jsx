import React from 'react';

const SignUp = () => {
    
    return (
        <div>
            <title>
                Signup
            </title>
                <div id='style-container' style={{height:'650px', width:'500px', backgroundColor:'#007FFF', margin:'auto', borderRadius:'10%'}}>
                    <div id='container' style={{textAlign:'center', marginTop:'50px'}}>
                        <h1 style={{textAlign:'center', paddingTop:'50px'}}>Signup</h1>
                        <input type="text" name="name" placeholder='Name' id="name" style={{height:'40px', width:'340px', fontSize:'30px', marginTop:'10px'}}/>
                        <br />
                        <br />
                        <input type="text" name="phone" placeholder='Phone' id="phone" style={{height:'40px', width:'340px', fontSize:'30px'}}/>
                        <br />
                        <br />
                        <label htmlFor="DOB" style={{fontSize:'30px'}}>Date of Birth</label>
                        <br />
                        <div class="dropdown">
                            <button class="dropbtn">Month</button>
                            <div class="dropdown-content">
                                <a href="#">January</a>
                                <a href="#">February</a>
                                <a href="#">March</a>
                                <a href="#">April</a>
                                <a href="#">May</a>
                                <a href="#">June</a>
                                <a href="#">July</a>
                                <a href="#">August</a>
                                <a href="#">September</a>
                                <a href="#">October</a>
                                <a href="#">November</a>
                                <a href="#">December</a>
                            </div>
                        <button id='next' style={{height:'40px', width:'150px', fontSize:'30px', marginTop:'100px'}}>Next</button>
                    </div>
                </div>
        </div>
    </div>
    );
};

export default SignUp;