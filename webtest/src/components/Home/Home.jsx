import React from "react";

const Home = (props) => {

    const dishes = [
        {
            id: 1,
            name: 'plato 1',
            description: 'Este es el plato 1',
            price: 10
        },
        {
            id: 2,
            name: 'plato 2',
            description: 'Este es el plato 2',
            price: 20
        },
        {
            id: 3,
            name: 'plato 3',
            description: 'Este es el plato 3',
            price: 15
        }
    ]

    const listDishes = dishes.map((dish) => <div>{dish.name}: <br /> {dish.description} Precio: {dish.price}</div>);


    return <div className="Home-container">
        <div id="Intro">
            <span className="Titlespan">Bienvenido a la pizzería Del Poble</span>
            <br />
            <span className="maintext">Aqúi podrás informarte de nuestros productos:</span>
           {listDishes}
        </div>
        <div>

        </div>
    </div>
};

export default Home;