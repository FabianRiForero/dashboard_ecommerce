import React, { useState, useEffect } from "react";
import LastUser from "./LastUser";

function LastU(){
    const [users,setUser] = useState([]);

    useEffect(() => {
        async function getUsers(){
            const response = await fetch('http://localhost:3001/api/users/');
            const users = await response.json();
            // Obteniendo ultimo id
            let id = 0;
            let position = 0
            users.data.forEach((user, index) => {
                if(user.id > id){
                    position = index
                    id = user.id
                }
            });
            const response1 = await fetch(`http://localhost:3001${users.data[position].detail}`);
            const user = await response1.json();
            setUser(user.data);
        }
        getUsers();
    },[]);

    return(
        <>
            <LastUser {...users} />
        </>
    );
}

export default LastU;