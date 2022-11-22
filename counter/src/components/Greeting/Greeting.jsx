import React, { useState, useEffect } from "react";

const Greeting = (props) => {

    const [name, setName] = useState(props.name);
    useEffect(() => {
        setTimeout(() => {
            setName("Alfonsina");
        }, 3000);
    }, []);

    return <div><span>Hola {name}</span>
        <p>Hola {props.name}</p></div>

};


export default Greeting;