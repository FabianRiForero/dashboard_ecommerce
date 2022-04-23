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
        async function getData(){
            const response1 = await fetch('http://192.168.0.18:3000/api/products/all');
            const response2 = await fetch('http://192.168.0.18:3000/api/users');
            const games = await response1.json();
            const users = await response2.json();
            const cards = [
                {title: 'Total Games',color: 'primary',quantity: games.meta.count,icon: 'fa-gamepad'},
                {title: 'Total Users',color: 'success',quantity: users.meta.count,icon: 'fa-user-astronaut'},
                {title: 'Total Genres',color: 'warning',quantity: Object.keys(games.meta.countByCategory.genre).length,icon: 'fa-dragon'},
                {title: 'Total Platforms',color: 'secondary',quantity: Object.keys(games.meta.countByCategory.platform).length,icon: 'fa-laptop'},
            ];
            setCards(cards);
        }
        getData();
    },[]);

    return(
        <div className="row">
            {cards.map( (card, i) => {
                return <SmallCard {...card} key={i}/>
            })}

        </div>
    );
}

export default ContentRowGames;