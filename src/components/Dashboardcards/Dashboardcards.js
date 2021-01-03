import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './Dashboardcards.css';

const Dashboardcards = ()=> {
    return ( 
        <CardDeck style = {{marginRight: "auto", marginLeft: "auto", position: "relative", zIndex: "-1" }}>
            <Card className = "hover" style={{ width: '10rem' }}>
                <Card.Img variant="top" src = {require("../Assets/dashboardpic1.jpg")} />
                <Card.Body>
                    <Card.Title><center>Good food and great vibes</center></Card.Title>
                </Card.Body>
            </Card>
            <Card className = "hover" style={{ width: '10rem' }}>
                <Card.Img variant="top" src = {require("../Assets/dashboardpic2.jpg")} />
                <Card.Body>
                    <Card.Title>   <center>Satisfy your snack attack</center></Card.Title>
                </Card.Body>
            </Card>
            <Card className = "hover" style={{ width: '10rem' }}>
                <Card.Img variant="top" src = {require("../Assets/dashboardpic3.jpg")} />
                <Card.Body>
                    <Card.Title>  <center> Hasty and tasty!</center></Card.Title>
                </Card.Body>
            </Card>
            <Card className = "hover" style={{ width: '10rem' }}>
                <Card.Img variant="top" src = {require("../Assets/dashboardpic4.jpg")} />
                <Card.Body>
                    <Card.Title> <center>Eat  Drink  Love</center> </Card.Title>
                </Card.Body>
            </Card>
        </CardDeck> 
    );
}
 
export default Dashboardcards;