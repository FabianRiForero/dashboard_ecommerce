import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailGame() {
    const [game,setGame] = useState({});

    useEffect(() => {
        // const {id} = useParams();
        // console.log(id);
    },[]);

    return (
        <>
            <h1>Hello World</h1>
        </>
    );

}

export default DetailGame;