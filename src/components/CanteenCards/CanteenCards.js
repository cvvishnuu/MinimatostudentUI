import React from 'react';
import Card from 'react-bootstrap/Card'
require('./CanteenCards.css');

const CanteenCards = (props) => { 
    const { details } = props;
    console.log(details)
    return ( 
        <div style={{width: "100%",marginTop:"200px", display:"flex", flexFlow:"row wrap", justifyContent: 'space-around'}}>
            {
                details.map((item, i)=>{   
                    if(i < 6) {
                        return(
                            <Card className = "hover canteen-cards" key= {i}>
                                <Card.Img variant="top" src = {`http://localhost:5000/uploads/resimage${i+1}.jpg`} />
                                <Card.Body>
                                    <Card.Title style={{marginLeft:"10px"}}>{item.canteen_name} Rating : 4.0</Card.Title>                                    
                                </Card.Body>
                            </Card>
                        )
                    }                                                          
                })
            }
        </div>                     
    );
}

 
export default CanteenCards;