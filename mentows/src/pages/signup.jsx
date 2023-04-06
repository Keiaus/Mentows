import React from 'react';

const date = new Date();
const currentYear = date.getFullYear();
const years = [];

for (let year = currentYear; year >= 1900; year--) {
  years.push(year);
}

const yearLinks = years.map(year => `<a href="#">${year}</a>`);

const SignUp = () => {
    
    return (
        <div>
            <title>
                Signup
            </title>
                <div id='style-container' style={{height:'650px', width:'500px', backgroundColor:'#007FFF', margin:'auto', borderRadius:'3%'}}>
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
                            <button class="monthbtn">Month</button>
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
                        </div>

                        <div class="dropdown2">
                            <button class="daybtn">Day</button>
                            <div class="dropdown-content2">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">7</a>
                                <a href="#">8</a>
                                <a href="#">9</a>
                                <a href="#">10</a>
                                <a href="#">11</a>
                                <a href="#">12</a>
                                <a href="#">13</a>
                                <a href="#">14</a>
                                <a href="#">15</a>
                                <a href="#">16</a>
                                <a href="#">17</a>
                                <a href="#">18</a>
                                <a href="#">19</a>
                                <a href="#">20</a>
                                <a href="#">21</a>
                                <a href="#">22</a>
                                <a href="#">23</a>
                                <a href="#">24</a>
                                <a href="#">25</a>
                                <a href="#">26</a>
                                <a href="#">27</a>
                                <a href="#">28</a>
                                <a href="#">29</a>
                                <a href="#">30</a>
                                <a href="#">31</a>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="dropdown3">
                            <button class="yearbtn">Year</button>
                            <div class="dropdown-content3">
                                {yearLinks.join('\n')}
                            </div>
                        </div>
                        <br />
                        <br />
                        <button id='next' style={{height:'40px', width:'150px', fontSize:'30px', marginTop:'100px'}}>Next</button>
                    </div>
                </div>
            </div>
    );
};

export default SignUp;