import React from "react"

const Home = () => {

    albert = document.createElement('img');
    bill = document.createElement('img');
    neil = document.createElement('img');
    stephen = document.createElement('img');

    function event()
    {
        let array_of_pictures = [
            albert.src = './assets/albert.png',
            bill.src = './assets/bill.png',
            neil.src = './assets/neil.png',
            stephen.src = './assets/stephen.png'
        ]
    
        const picture_generator = Math.floor(Math.random() * array_of_pictures.length)
        
    }

    return (
        <div style={{paddingLeft: '500px', marginTop: '40px', position: 'absolute'}}>
            <input style={{height: '40px', width: '500px', fontSize: '25px'}} type="text" name="search" id="search" placeholder="Search"/> <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            <div className="pictures" style={{margintop: '50px'}}>
                <script type="text/javascript">
                    document.getElementById('')
                </script>
            </div>
        </div>
        
    )
}

export default Home;