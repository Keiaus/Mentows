import React from "react"

const Home = () => {

    // let array_of_pictures = [
    //     albert = <img src="./assets/albert.png" alt="" />,
    //     bill = <img src="./assets/bill.png" alt="" />,
    //     neil = <img src="./assets/neil.png" alt="" />,
    //     stephen = <img src="./assets/stephen.png" alt="" />
    // ]

    // const picture_generator = Math.floor(Math.random() * array_of_pictures.length)

    return (
        <div style={{paddingLeft: '500px', marginTop: '40px', position: 'absolute'}}>
            <input style={{height: '40px', width: '500px', fontSize: '25px'}} type="text" name="search" id="search" placeholder="Search"/> <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            {/* <div className="pictures" style={{margintop: '50px'}}>
                <script>
                    return picture_generator;
                </script>
            </div> */}
        </div>
        
    )
}

export default Home;