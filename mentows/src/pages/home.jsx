import React, { useState, useEffect } from "react";
import './../styles/App.css';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCodeBranch} from '@fortawesome/free-solid-svg-icons'

const albert = './src/assets/albert.png';
const abraham = './src/assets/abraham.png';
const kobe = './src/assets/kobe.png';
const bill = './src/assets/bill.png';
const neil = './src/assets/neil.png';
const stephen = './src/assets/stephen.png';
const fridman = './src/assets/fridman.png';
const george = './src/assets/george.png';
const malcolm = './src/assets/malcolm.png';

const random_pictures = [
    { picture: albert, quote: "Insanity: doing the same thing over and over again and expecting different results." },
    { picture: bill, quote: "Science is the best idea humans have ever had. The more people who embrace that idea, the better." },
    { picture: neil, quote: "The good thing about science is that it's true whether or not you believe in it." },
    { picture: stephen, quote: "Quiet people have the loudest minds." },
    { picture: fridman, quote: "People need love more than they need advice. Most people know the right thing to do, they just need someone to believe in them." },
    { picture: abraham, quote: "Things may come to those who wait, but only the things left by those who hustle. " },
    { picture: kobe, quote: "Great things come from hard work and perseverance. No excuses." },
    { picture: george, quote: "You comply because you want it to end. But it's because of your compliance that it will never end." },
    { picture: malcolm, quote: "A man who stands for nothing will fall for anything." }

];

const get_random_picture = () => {
    const picture_generator = Math.floor(Math.random() * random_pictures.length)
    return random_pictures[picture_generator];
};

const Home = () => {
    const [picture, set_picture] = useState("");
    const [quote, set_quote] = useState("");

    useEffect(() => {
        const random_picture = get_random_picture();
        set_picture(random_picture.picture);
        set_quote(random_picture.quote);
    }, []);

    return (
        <body>
            <div id="home-container">
                <title>Home</title>
                <div style={{ margin: "auto" }}>
                    <p style={{ fontFamily: 'sans-serif bold', fontSize: '20px', textAlign: 'center', paddingTop: "50px", paddingBottom: "10px" }}>
                        {quote}
                    </p>
                    <div id="images" style={{ marginTop: '50px' }}>
                        <img src={picture} alt="" style={{ height: '200px', width: '250px', display: 'block', margin: 'auto', borderRadius: '3px' }} />
                    </div>
                    <div id="search" style={{ textAlign: "center", paddingTop: "60px" }}>
                        <form action="" method="get">
                            <input type="text" style={{ height: '50px', width: '500px', fontSize: '20px', border: "none", paddingLeft: "10px", borderRadius: "10px" }} />
                            <br />
                            <button type="submit" style={{ fontSize: "20px", marginTop: "20px" }}>Search</button>
                        </form>
                    </div>

                    <footer id="site-footer" style={{ margin: 'auto', textAlign: 'center', padding: '5px', position: 'fixed', overflow: 'hidden', bottom: '0', left: '0', right: '0' }}>
                        {/* <div>
                            <FontAwesomeIcon icon={{faCodeBranch}} style={{color: "#ff7300", height:"400px", width:"400px"}} />
                        </div> */}
                    </footer>
                </div>

            </div>
        </body>

    )
}

export default Home;