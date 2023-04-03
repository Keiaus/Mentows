import React, {useState, useEffect} from "react";

const albert = './assets/albert.png';
const bill = './assets/bill.png';
const neil = './assets/neil.png';
const stephen = './assets/stephen.png';

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
            <p style={{fontFamily: 'sans-serif bold', fontSize: '20px', textAlign: 'center'}}>
                {quotes[generateRandomQuote]}
            </p>

            <img src={picture} alt="" style={{fontSize:'300px'}}/>
        </div>
    )
}

export default Home;