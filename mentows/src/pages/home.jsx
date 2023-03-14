import React from "react";

const Home = () => {

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
    document.getElementsByClassName

    let albert = './assets/albert.png';
    let bill = './assets/bill.png';
    let neil = './assets/neil.png';
    let stephen = './assets/stephen.png';
    
    const array_of_pictures = [
        albert, bill, neil, stephen
    ]

    const picture_generator = Math.floor(Math.random() * array_of_pictures.length)
    array_of_pictures[picture_generator];

    return (
        <div style={{display:'flex', alignItems: 'center', marginTop: '200px', justifyContent: 'center'}}>
            <div className="quotes" style={{marginTop: '20px', fontSize: 'x-large', color: 'white'}}>
                script={{
                    generateRandomQuote
                }}
            </div>
            <input style={{height: '40px', width: '500px', fontSize: '25px'}} type="text" name="search" id="search" placeholder="Search"/> <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            <div className="pictures" style={{margintop: '50px'}}>
                script={{
                    picture_generator
                }}
            </div>
        </div>
        
    )
}

export default Home;