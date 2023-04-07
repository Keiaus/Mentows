import React, {useState, useEffect} from "react";

const albert = './src/assets/albert.png';
const bill = './src/assets/bill.png';
const neil = './src/assets/neil.png';
const stephen = './src/assets/stephen.png';

const random_pictures = [
    albert, bill, neil, stephen
];

const get_random_picture = () => {
    const picture_generator = Math.floor(Math.random() * random_pictures.length)
    return random_pictures[picture_generator];
};

const Home = () => {
    const [picture, set_picture] = useState("");

    useEffect(() => {
        const random_picture = get_random_picture();
        set_picture(random_picture);
    }, []);

    const quotes = [
        "Insanity: doing the same thing over and over again and expecting different results", 
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that", 
        "It's fun to do the impossible",
        "The end doesn't justify the means",
        "Everything negative - pressure, challenges - is all an opportunity for you to rise",
        "Life is too short for long-term grudges",
        "Do not live someone else's life and someone else's idea of what womanhood is. Womanhood is you",
        "If it doesn't scare you, you're probably not dreaming big enough",
        "Fail, fail, fail, succeed",
        "You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it",
        "Things may come to those who wait … but only the things left by those who hustle",
        "Someone was once in the same position as you and they made it out"
    ];
    
    const generateRandomQuote = Math.floor(Math.random() * quotes.length);
    
    return (
        <div id="home-container">
            <title>Home</title>
            <p style={{fontFamily: 'sans-serif bold', fontSize: '20px', textAlign: 'center'}}>
                {quotes[generateRandomQuote]}
            </p>
            <div id="images" style={{marginTop:'50px'}}>
                <img src={picture} alt="" style={{height: '200px', width: '200px', display:'block', margin:'auto'}}/>
            </div>
            <div id="searchbar" style={{textAlign:'center', marginTop: '50px'}}>
                {/* This form navigates to a page based on search entry */}
                <form action="" method="get">
                <input type="text" placeholder="Search..." style={{height:'50px', width:'600px', fontSize:'30px'}}/><button style={{fontSize:'39px', marginLeft:'50px'}}>Search</button>
                </form>
            </div>
            
            <footer>
                <p>Arthur: Keith Austin</p>
            </footer>
            
        </div>
    )
}

export default Home;