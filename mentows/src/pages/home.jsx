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
        <body>
            <div id="home-container">
                <title>Home</title>
                <p style={{fontFamily: 'sans-serif bold', fontSize: '20px', textAlign: 'center'}}>
                    {quotes[generateRandomQuote]}
                </p>
                <div id="images" style={{marginTop:'50px'}}>
                    <img src={picture} alt="" style={{height: '200px', width: '200px', display:'block', margin:'auto'}}/>
                </div>
                <div id="searchbar" style={{textAlign:'center', marginTop: '50px', marginLeft:'155px'}}>
                    {/* This form navigates to a page based on search entry */}
                    <form action="" method="get">
                        <input type="text" style={{height:'40px', width:'400px', fontSize:'20px'}}/><button style={{fontSize:'15px', marginLeft:'50px'}}>Mentows Search</button>
                    </form>
                </div>
                
                <footer id="site-footer" style={{margin:'auto', textAlign:'center', bottom:'0px', padding:'5px', position:'fixed', overflow:'hidden', bottom:'0', left:'0', right:'0'}}> 
                    <small>
                        <p>Arthur: Keith Austin</p>
                    </small> 
                </footer>
                
                
            </div>
        </body>
        
    )
}

export default Home;