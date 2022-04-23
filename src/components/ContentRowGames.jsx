import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

// const cards = [
//     {
//         title: 'Total games',
//         color: 'primary',
//         quantity: '50',
//         icon: 'fa-gamepad',
//     },
//     {
//         title: 'Total Users',
//         color: 'info',
//         quantity: '10',
//         icon: 'fa-user-astronaut',
//     },
// ]

function ContentRowGames(){
    const [cards,setCards] = useState([]);

    useEffect(() => {
        // async function getData(){
        //     const url = "http://localhost:3001/api/users";
        //     const response = await fetch(url);
        //     console.log({response});
        //     // const games = await response.json();
        // }
        // getData();
        fetch("http://localhost:3001/api/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },[]);

    return(
        <div className="row">
            {/* {cards.map( (card, i) => {
                return <SmallCard {...card} key={i}/>
            })} */}

        </div>
    );
}

export default ContentRowGames;