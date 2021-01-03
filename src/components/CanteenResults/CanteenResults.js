import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import "antd/dist/antd.css";
import { Card } from "antd";



const { Meta } = Card;

const CanteenResults = (props) => { 
    const { canteenDetails } = props;
    return ( 
        <div style={{width: "100%",marginTop:"100px", display:"flex", flexWrap: "wrap", justifyContent: 'space-evenly'}}>        
            {
                canteenDetails.map((item, i)=> {                     
                        return(
                            <Link to = {{pathname:`/canteenroute/${item.canteen_id}`}} >
                                <Card
                                    className = "hover"
                                    style = {{
                                            height:"41vh",
                                            width: "20vw ",
                                            borderRadius: "10px",
                                            boxShadow: "3px  3px 5px 3px #888888", 
                                            marginBottom: "50px"                                                
                                        }}
                                    cover={
                                    <img
                                        alt="example"
                                        src={`http://localhost:5000${item.imageurl}`}
                                        style = {{ 
                                            height:"28vh",
                                            width: "20vw",
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px"                                                                  
                                        }}
                                    />                                    
                                    }
                                    key = {i}
                                >
                                    <Meta title={item.canteen_name} description="This is the description"  />
                                </Card> 
                            </Link>                                                                                                                        
                        )
                    }                                                          
                )
            }
        </div>                     
    );
}
 
export default CanteenResults;