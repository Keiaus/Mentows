import React from 'react';

const SignUp = () => {

    const dropDownStuff = {
        /* Dropdown Button */
        .dropbtn {
            background-color: #04AA6D;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
        }
        
        /* The container <div> - needed to position the dropdown content */
        .dropdown {
            position: relative;
            display: inline-block;
        }
        
        /* Dropdown Content (Hidden by Default) */
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
        
        /* Links inside the dropdown */
        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
        
        /* Change color of dropdown links on hover */
        .dropdown-content a:hover {background-color: #ddd;}
        
        /* Show the dropdown menu on hover */
        .dropdown:hover .dropdown-content {display: block;}
        
        /* Change the background color of the dropdown button when the dropdown content is shown */
        .dropdown:hover .dropbtn {background-color: #3e8e41;}
        }
    
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