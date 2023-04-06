import React from 'react';

const About = () => {
    return (
        <div>
            <title>About</title>
            <p style={{textAlign:'center', fontSize:'50px', fontFamily:'bold'}}>About</p>
            <p style={{position: 'absolute', textAlign: 'center', fontSize: '20px', fontFamily: 'sans-serif bold', maxWidth:'500px'}}>Mentows is an internet hosting service for Astronomers. 
            It's collaborative environment allows scientists to review hubble data, document new discoveries, 
            and much more. Think GitHub but for Astronomers.</p>
        </div>
    );
};

export default About;