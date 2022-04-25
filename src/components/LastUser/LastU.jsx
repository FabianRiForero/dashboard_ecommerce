import React, { useState, useEffect } from "react";
import LastUser from "./LastUser";

function LastU(){
    const [users,setUser] = useState([]);

    useEffect(() => {
        async function getUsers(){
            const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
            const response = await fetch(`${BACKEND_URL}/api/users/`);
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
const response1 = await fetch(`${BACKEND_URL}${users.data[position].detail}`);
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